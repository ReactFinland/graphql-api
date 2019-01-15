import { Field, ObjectType, registerEnumType } from "type-graphql";
import { Contact } from "./Contact";
import { Location } from "./Location";

@ObjectType()
export class SessionUrls {
  @Field()
  public web?: string;

  @Field()
  public slides?: string;

  @Field()
  public video?: string;
}

@ObjectType()
export class Session {
  @Field(_ => SessionType)
  public type!: SessionType;

  @Field(_ => String)
  public title!: string;

  @Field(_ => String)
  public description?: string;

  @Field(_ => [String])
  public keywords?: string[];

  @Field(_ => Location)
  public location?: Location;

  @Field(_ => [Contact])
  public people?: Contact[];

  @Field(_ => SessionUrls)
  public urls?: SessionUrls;
}

export enum SessionType {
  TALK,
  LIGHTNING_TALK,
  KEYNOTE,
  WORKSHOP,
  PANEL,
  BREAKFAST,
  LUNCH,
  COFFEE_BREAK,
  ORGANIZATIONAL,
  PARTY,
}

registerEnumType(SessionType, {
  name: "SessionType",
  description: "Type of the session",
});
