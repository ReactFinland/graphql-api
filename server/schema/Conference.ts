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
import { ISession, SessionType, Talk, Workshop } from "./Session";
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

  // @Field(_ => Series)
  // public series!: Series;

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

  @Field(_ => [ISession])
  public sessions!: ISession[];

  @Field(_ => [Contact])
  public speakers?: Contact[];

  @Field(_ => [Talk])
  public talks?: Talk[];

  @Field(_ => [Workshop])
  public workshops?: Workshop[];

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

  @FieldResolver(_ => [Location])
  public locations(@Root() conference: Conference) {
    return conference.locations;
  }

  @FieldResolver(_ => [Contact])
  public organizers(@Root() conference: Conference) {
    return conference.organizers;
  }

  @FieldResolver(_ => [Contact])
  public mcs(@Root() conference: Conference) {
    return conference.mcs;
  }

  @FieldResolver(_ => [Contact])
  public partners(@Root() conference: Conference) {
    return conference.partners;
  }

  @FieldResolver(_ => [Contact])
  public sponsors(@Root() conference: Conference) {
    return conference.sponsors;
  }

  @FieldResolver(_ => [Contact])
  public goldSponsors(@Root() conference: Conference) {
    return conference.goldSponsors;
  }

  @FieldResolver(_ => [Contact])
  public silverSponsors(@Root() conference: Conference) {
    return conference.silverSponsors;
  }

  @FieldResolver(_ => [Contact])
  public bronzeSponsors(@Root() conference: Conference) {
    return conference.bronzeSponsors;
  }

  @FieldResolver(_ => [Contact])
  public speakers(@Root() conference: Conference) {
    return getSpeakers(conference.sessions).map(contact => ({
      ...contact,
      conference,
    }));
  }

  @FieldResolver(_ => [Talk])
  public talks(@Root() conference: Conference) {
    return conference.sessions.filter(
      ({ type }) =>
        type === SessionType.LIGHTNING_TALK ||
        type === SessionType.TALK ||
        type === SessionType.KEYNOTE
    );
  }

  @FieldResolver(_ => [Workshop])
  public workshops(@Root() conference: Conference) {
    return conference.sessions.filter(
      ({ type }) => type === SessionType.WORKSHOP
    );
  }
}

export function getConference(id): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}

export function getSpeakers(sessions) {
  return uniq(flatMap(sessions, session => get(session, "speakers")));
}
