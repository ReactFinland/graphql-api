import { Url } from "@okgrow/graphql-scalars";
import { Field, ID, ObjectType } from "type-graphql";
import conferences from "../conferences";
import { Attendee } from "./Attendee";
import { Contact } from "./Contact";
import { Location } from "./Location";
import { UrlScalar } from "./scalars";
import { Schedule } from "./Schedule";
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

// TODO: Maybe this should become a static method of Conference
export function getConference(id: string): Conference {
  if (conferences[id]) {
    return conferences[id];
  } else {
    throw new Error("Unknown conference");
  }
}
