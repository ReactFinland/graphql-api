import { Conference } from "./Conference";
import { Image } from "./Image";
import Keyword from "./keywords";
import { Location } from "./Location";
import { resolveSessions } from "./Schedule";
import { Session, SessionType } from "./Session";
import { Social } from "./Social";

export enum ContactType {
  PRESS = "PRESS",
  SPEAKER = "SPEAKER",
  TALK = "TALK",
  LIGHTNING_TALK = "LIGHTNING_TALK",
  KEYNOTE = "KEYNOTE",
  WORKSHOP = "WORKSHOP",
  WORKSHOP_HOST = "WORKSHOP_HOST",
  ORGANIZER = "ORGANIZER",
  SPONSOR = "SPONSOR",
  GOLD_SPONSOR = "GOLD_SPONSOR",
  SILVER_SPONSOR = "SILVER_SPONSOR",
  BRONZE_SPONSOR = "BRONZE_SPONSOR",
  PLATFORM_SPONSOR = "PLATFORM_SPONSOR",
  PARTNER = "PARTNER",
  ATTENDEE = "ATTENDEE",
}

export interface Contact {
  firstName?: string;
  lastName?: string;
  name: string;
  about: string;
  aboutShort?: string;
  company?: string;
  tagline?: string;
  image: Image;
  type: ContactType[];
  social: Social;
  keywords?: Keyword[];
  location: Location;
  talks?: Session[];
  workshops?: Session[];
  noPhotography?: boolean;
}

export function getSessionSpeakers(
  conference: Conference,
  sessions: Session[]
): Contact[] {
  const talks = resolveSessions(conference.schedules, [
    SessionType.LIGHTNING_TALK,
    SessionType.PANEL,
    SessionType.TALK,
    SessionType.KEYNOTE,
  ]);
  const workshops = resolveSessions(conference.schedules, [
    SessionType.WORKSHOP,
  ]);
  const speakers = uniqByName(
    sessions.flatMap((session) =>
      (session.people || []).concat(
        session.sessions
          ? session.sessions.flatMap((childSession) => childSession.people || [])
          : []
      )
    )
  );

  return speakers.map((speaker) => ({
    ...speaker,
    talks: talks
      ? talks.filter(
          ({ people }) =>
            people && people.find((person) => person.name === speaker.name)
        )
      : [],
    workshops: workshops
      ? workshops.filter(
          ({ people }) =>
            people && people.find((person) => person.name === speaker.name)
        )
      : [],
  }));
}

function uniqByName(contacts: Contact[]) {
  const names = new Set<string>();

  return contacts.filter(({ name }) => {
    if (names.has(name)) {
      return false;
    }

    names.add(name);

    return true;
  });
}
