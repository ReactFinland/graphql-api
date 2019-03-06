import flatMap from "lodash/flatMap";
import uniqBy from "lodash/uniqBy";
import { Field, ObjectType } from "type-graphql";
import { Conference } from "./Conference";
import { Image } from "./Image";
import Keyword from "./keywords";
import { Location } from "./Location";
import { Session } from "./Session";
import { Social } from "./Social";

export enum ContactType {
  SPEAKER = "SPEAKER",
  TALK = "TALK",
  LIGHTNING_TALK = "LIGHTNING_TALK",
  KEYNOTE = "KEYNOTE",
  WORKSHOP = "WORKSHOP",
  WORKSHOP_HOST = "WORKSHOP_HOST",
  ORGANIZER = "ORGANIZER",
  SPONSOR = "SPONSOR",
}

@ObjectType()
export class Contact {
  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public about!: string;

  @Field(_ => String)
  public aboutShort?: string;

  @Field(_ => Image)
  public image!: Image;

  @Field(_ => [ContactType])
  public type!: ContactType[];

  @Field(_ => Social)
  public social!: Social;

  @Field(_ => [String])
  public keywords?: Keyword[];

  @Field(_ => Location)
  public location!: Location;

  @Field(_ => [Session], { nullable: true })
  public talks?: Session[];

  @Field(_ => [Session], { nullable: true })
  public workshops?: Session[];
}

// TODO: Maybe this should become a static method of Conference
export function getSessionSpeakers(
  conference: Conference,
  sessions?: Session[]
): Contact[] {
  const speakers = uniqBy(
    flatMap(sessions, session => session.people || []),
    "name"
  );

  return speakers.map(speaker => ({
    ...speaker,
    talks: conference.talks.filter(
      ({ people }) =>
        people && people.find(person => person.name === speaker.name)
    ),
    workshops: conference.workshops.filter(
      ({ people }) =>
        people && people.find(person => person.name === speaker.name)
    ),
  }));
}
