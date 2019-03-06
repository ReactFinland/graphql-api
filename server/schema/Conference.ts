import { Url } from "@okgrow/graphql-scalars";
import kebabCase from "just-kebab-case";
import * as path from "path";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  ID,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import conferences from "../conferences";
import { Attendee } from "./Attendee";
import series from "./conferenceSeries";
import { Contact, getSessionSpeakers } from "./Contact";
import { IContext } from "./Context";
import loadAttendees from "./load-attendees";
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
  public series!: string;

  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public year!: string;

  @Field(_ => String)
  public slogan!: string;

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

  @Field(_ => [Attendee])
  public attendees?: Attendee[];
}

@Resolver(_ => Conference)
export class ConferenceResolver {
  @Query(_ => Conference)
  public conference(@Arg("id", _ => ID) id: string) {
    return getConference(id);
  }

  // TODO: Deprecate and rename as conferences()
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
    return getSessionSpeakers(conference, conference.talks);
  }

  // TODO: Resolve against CSV based on a convention
  @FieldResolver(_ => [Attendee])
  public attendees(@Root() conference: Conference, @Ctx() ctx: IContext) {
    return loadAttendees(
      conference,
      `${path.join(
        ctx.projectRoot,
        "attendees",
        kebabCase(conference.name)
      )}.csv`
    );
  }
}

export function getConference(id: string): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}
