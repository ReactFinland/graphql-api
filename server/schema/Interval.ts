import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import { ISession } from "./Session";

@ObjectType()
export class Interval {
  @Field()
  public begin?: string;

  @Field()
  public end?: string;

  @Field()
  public title?: string;

  @Field(_ => [ISession])
  public sessions!: [ISession];
}

@Resolver()
export class IntervalResolver {
  @FieldResolver(_ => [ISession])
  public sessions(@Root() interval: Interval) {
    return interval.sessions.map(session => ({
      ...session,
      interval,
    }));
  }
}
