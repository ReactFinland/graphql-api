import { Field, ObjectType } from "type-graphql";

export enum AttendeeType {
  ATTENDEE = "ATTENDEE",
  SPONSOR = "SPONSOR",
  SPEAKER = "SPEAKER",
  ORGANIZER = "ORGANIZER",
}

@ObjectType()
export class Attendee {
  @Field(_ => AttendeeType)
  public type!: AttendeeType;

  // TODO: Derive from first and last name
  @Field(_ => String)
  public name!: string;

  @Field(_ => String)
  public twitter?: string;

  @Field(_ => String)
  public company?: string;

  @Field(_ => Boolean)
  public noPhotography?: boolean;
}
