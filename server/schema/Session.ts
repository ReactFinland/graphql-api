import {
  Field,
  InterfaceType,
  ObjectType,
  registerEnumType,
} from "type-graphql";
import { Contact } from "./Contact";
import { Location } from "./Location";
import { Ticket } from "./Ticket";

@InterfaceType()
export abstract class ISession {
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
}

export interface ISessions {
  [key: string]: ISession;
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

@ObjectType()
export class TalkUrls {
  @Field()
  public web?: string;

  @Field()
  public slides?: string;

  @Field()
  public video?: string;
}

@ObjectType({ implements: ISession })
export class Talk implements ISession {
  public type!: SessionType;
  public title!: string;
  public description?: string;
  public keywords?: string[];
  public location?: Location;

  @Field(_ => [Contact])
  public speakers?: Contact[];

  @Field(_ => TalkUrls)
  public urls?: TalkUrls;
}

@ObjectType({ implements: ISession })
export class Workshop implements ISession {
  public type!: SessionType;
  public title!: string;
  public description?: string;
  public keywords?: string[];
  public location?: Location;

  @Field(_ => [Contact])
  public speakers?: Contact[];

  @Field(_ => [Ticket])
  public tickets?: [Ticket];
}

@ObjectType({ implements: ISession })
export class Break implements ISession {
  public type!: SessionType;
  public title!: string;
  public description?: string;
  public keywords?: string[];
  public location?: Location;
}
