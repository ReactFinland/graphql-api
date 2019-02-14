import { Url } from "@okgrow/graphql-scalars";
import {
  Field,
  FieldResolver,
  ObjectType,
  registerEnumType,
  Resolver,
  Root,
} from "type-graphql";
import { Contact } from "./Contact";
import Keyword from "./keywords";
import { Location } from "./Location";
import { UrlScalar } from "./scalars";

@ObjectType()
export class SessionUrls {
  @Field(_ => UrlScalar, { nullable: true })
  public web?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public slides?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public video?: Url;
}

@ObjectType()
export class Session {
  @Field(_ => SessionType)
  public type!: SessionType;

  @Field(_ => String)
  public title!: string;

  @Field(_ => String, { nullable: true })
  public description?: string;

  @Field(_ => [String], { nullable: true })
  public keywords?: Keyword[];

  @Field(_ => Location, { nullable: true })
  public location?: Location;

  @Field(_ => [Contact], { nullable: true })
  public people?: Contact[];

  @Field(_ => SessionUrls, { nullable: true })
  public urls?: SessionUrls;
}

@Resolver(_ => Session)
export class SessionResolver {
  @FieldResolver(_ => [Contact], { deprecationReason: "Use `people` instead" })
  public speakers(@Root() session: Session) {
    return session.people || [];
  }
}

export enum SessionType {
  TALK = "TALK",
  LIGHTNING_TALK = "LIGHTNING_TALK",
  KEYNOTE = "KEYNOTE",
  WORKSHOP = "WORKSHOP",
  PANEL = "PANEL",
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  COFFEE_BREAK = "COFFEE_BREAK",
  ORGANIZATIONAL = "ORGANIZATIONAL",
  PARTY = "PARTY",
}

registerEnumType(SessionType, {
  name: "SessionType",
  description: "Type of the session",
});
