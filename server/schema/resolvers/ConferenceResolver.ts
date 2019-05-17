import kebabCase from "just-kebab-case";
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
import { resolveSessions } from "../Schedule";
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

  @Query(_ => [Conference])
  public conferences() {
    return Object.values(conferences);
  }

  @Query(_ => [Conference], { deprecationReason: "Use `conferences` instead" })
  public allConferences() {
    return Object.values(conferences);
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
    const talks = resolveSessions(conference.schedules, [
      SessionType.LIGHTNING_TALK,
      SessionType.TALK,
      SessionType.KEYNOTE,
    ]);

    return getSessionSpeakers(conference, talks);
  }

  @FieldResolver(_ => [Contact])
  public async attendees(@Root() conference: Conference, @Ctx() ctx: IContext) {
    const speakers = getSessionSpeakers(
      conference,
      resolveSessions(conference.schedules, [
        SessionType.KEYNOTE,
        SessionType.LIGHTNING_TALK,
        SessionType.TALK,
        SessionType.WORKSHOP,
      ])
    );

    return conference.organizers.concat(
      speakers,
      await loadAttendees(
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
      SessionType.KEYNOTE,
    ]);
  }

  @FieldResolver(_ => [Session])
  public workshops(@Root() conference: Conference) {
    return resolveSessions(conference.schedules, [SessionType.WORKSHOP]);
  }
}

export default ConferenceResolver;
