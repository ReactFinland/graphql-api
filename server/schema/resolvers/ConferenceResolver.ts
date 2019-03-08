import kebabCase from "just-kebab-case";
import flatMap from "lodash/flatMap";
import uniq from "lodash/uniq";
import * as path from "path";
import {
  Arg,
  Ctx,
  FieldResolver,
  ID,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import conferences from "../../conferences";
import { Conference, getConference } from "../Conference";
import { Contact, getSessionSpeakers } from "../Contact";
import { IContext } from "../Context";
import { Schedule } from "../Schedule";
import { Series } from "../Series";
import { Session, SessionType } from "../Session";
import series from "./conferenceSeries";
import loadAttendees from "./load-attendees";

@Resolver(_ => Conference)
class ConferenceResolver {
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

  @FieldResolver(_ => [Contact])
  public attendees(@Root() conference: Conference, @Ctx() ctx: IContext) {
    const speakers = getSessionSpeakers(
      conference,
      resolveSessions(conference.schedules, [
        SessionType.LIGHTNING_TALK,
        SessionType.TALK,
        SessionType.WORKSHOP,
      ])
    );

    return conference.organizers.concat(
      speakers,
      loadAttendees(
        conference,
        `${path.join(
          ctx.projectRoot,
          "attendees",
          kebabCase(conference.name)
        )}.csv`
      )
    );
  }

  @FieldResolver(_ => [Session])
  public talks(@Root() conference: Conference) {
    return resolveSessions(conference.schedules, [
      SessionType.LIGHTNING_TALK,
      SessionType.TALK,
    ]);
  }

  @FieldResolver(_ => [Session])
  public workshops(@Root() conference: Conference) {
    return resolveSessions(conference.schedules, [SessionType.WORKSHOP]);
  }
}

function resolveSessions(schedules: Schedule[], sessionTypes: SessionType[]) {
  return flatMap(schedules, ({ intervals }) =>
    uniq(
      flatMap(intervals, ({ sessions }) =>
        sessions.filter(({ type }) => sessionTypes.includes(type))
      )
    )
  );
}

export default ConferenceResolver;
