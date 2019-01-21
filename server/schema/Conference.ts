import { Url } from "@okgrow/graphql-scalars";
import { flatMap, uniq } from "lodash";
import {
  Arg,
  Field,
  FieldResolver,
  ID,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import conferences from "../conferences";
import series from "./conferenceSeries";
import { Contact } from "./Contact";
import { Location } from "./Location";
import { UrlScalar } from "./scalars";
import { Schedule } from "./Schedule";
import { Series } from "./Series";
import { Session } from "./Session";
@ObjectType()
export class Conference {
  @Field(_ => ID)
  public id!: string;

  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public year!: string;

  @Field(_ => UrlScalar)
  public websiteUrl!: Url;

  @Field(_ => [Location], { nullable: true })
  public locations?: Location[];

  @Field(_ => [Contact])
  public organizers!: Contact[];

  @Field(_ => [Contact], { nullable: true })
  public mcs?: Contact[];

  @Field(_ => [Contact], { nullable: true })
  public partners?: Contact[];

  @Field(_ => [Contact])
  public sponsors!: Contact[];

  @Field(_ => [Contact], { nullable: true })
  public goldSponsors?: Contact[];

  @Field(_ => [Contact], { nullable: true })
  public silverSponsors?: Contact[];

  @Field(_ => [Contact], { nullable: true })
  public bronzeSponsors?: Contact[];

  @Field(_ => [Schedule])
  public schedules!: Schedule[];

  @Field(_ => [Contact], { nullable: true })
  public speakers?: Contact[];

  @Field(_ => [Session])
  public talks!: Session[];

  @Field(_ => [Session])
  public workshops!: Session[];
}

@Resolver(_ => Conference)
export class ConferenceResolver {
  @Query(_ => Conference)
  public conference(@Arg("id", _ => ID) id: string) {
    return getConference(id);
  }

  @Query(_ => [Conference])
  public allConferences() {
    return Object.keys(conferences).map(id => conferences[id]);
  }

  @FieldResolver(_ => Series)
  public series(@Root() conference: Conference) {
    const id = conference.id;

    for (const seriesId of Object.keys(series)) {
      const oneSeries = series[seriesId];
      if (oneSeries.conferences.indexOf(id) !== -1) {
        return oneSeries;
      }
    }

    return;
  }

  @FieldResolver(_ => [Contact])
  public speakers(@Root() conference: Conference) {
    const talkSpeakers = getSpeakers(conference.talks);
    const workshopSpeakers = getSpeakers(conference.workshops);

    return uniq(talkSpeakers.concat(workshopSpeakers));
  }
}

export function getConference(id: string): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}

export function getSpeakers(sessions?: Session[]): Contact[] {
  return uniq(flatMap(sessions, session => session.people || []));
}
