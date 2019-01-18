import {
  Field,
  FieldResolver,
  ObjectType,
  registerEnumType,
  Resolver,
  Root,
} from "type-graphql";
import { Contact } from "./Contact";
import { Location } from "./Location";

@ObjectType()
export class SessionUrls {
  @Field(_ => String, { nullable: true })
  public web?: string;

  @Field(_ => String, { nullable: true })
  public slides?: string;

  @Field(_ => String, { nullable: true })
  public video?: string;
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
  public keywords?: string[];

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
