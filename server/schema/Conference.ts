import { flatMap, get, uniq } from "lodash";
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
import { Schedule } from "./Schedule";
import { Series } from "./Series";
import { Session } from "./Session";
import { Ticket } from "./Ticket";

@ObjectType()
export class Conference {
  @Field(_ => ID)
  public id!: string;

  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public year!: string;

  @Field(_ => String)
  public websiteUrl!: string;

  @Field(_ => [Location])
  public locations?: Location[];

  @Field(_ => [Contact])
  public organizers!: Contact[];

  @Field(_ => [Contact])
  public mcs?: Contact[];

  @Field(_ => [Contact])
  public partners?: Contact[];

  @Field(_ => [Contact])
  public sponsors!: Contact[];

  @Field(_ => [Contact])
  public goldSponsors?: Contact[];

  @Field(_ => [Contact])
  public silverSponsors?: Contact[];

  @Field(_ => [Contact])
  public bronzeSponsors?: Contact[];

  @Field(_ => [Schedule])
  public schedules!: Schedule[];

  @Field(_ => [Contact])
  public speakers?: Contact[];

  @Field(_ => [Session])
  public talks?: Session[];

  @Field(_ => [Session])
  public workshops?: Session[];

  @Field(_ => [Ticket])
  public tickets?: Ticket[];
}

@Resolver(_ => Conference)
export class ConferenceResolver {
  @Query(_ => Conference)
  public conference(@Arg("id") id: string) {
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
  }

  @FieldResolver(_ => [Contact])
  public speakers(@Root() conference: Conference) {
    const talkSpeakers = getSpeakers(conference.talks);
    const workshopSpeakers = getSpeakers(conference.workshops);

    return talkSpeakers.concat(workshopSpeakers).map(contact => ({
      ...contact,
      conference,
    }));
  }
}

export function getConference(id): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}

export function getSpeakers(sessions?: Session[]) {
  return uniq(flatMap(sessions, session => get(session, "speakers")));
}
