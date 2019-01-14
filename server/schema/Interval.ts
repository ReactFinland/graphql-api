import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import { ISession } from "./Session";

@ObjectType()
export class Interval {
  @Field(_ => String)
  public begin?: string;

  @Field(_ => String)
  public end?: string;

  @Field(_ => String)
  public title?: string;

  @Field(_ => [ISession])
  public sessions!: [ISession];
}

@Resolver(_ => Interval)
export class IntervalResolver {
  @FieldResolver(_ => [ISession])
  public sessions(@Root() interval: Interval) {
    return interval.sessions.map(session => ({
      ...session,
      interval,
    }));
  }
}
