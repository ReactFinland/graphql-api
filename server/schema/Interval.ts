import { Field, FieldResolver, ObjectType, Resolver, Root } from "type-graphql";
import { Session } from "./Session";

@ObjectType()
export class Interval {
  @Field(_ => String)
  public begin!: string;

  @Field(_ => String)
  public end!: string;

  @Field(_ => String, { nullable: true })
  public title?: string;

  @Field(_ => [Session])
  public sessions!: Session[];
}

@Resolver(_ => Interval)
export class IntervalResolver {
  @FieldResolver(_ => [Session])
  public sessions(@Root() interval: Interval) {
    return interval.sessions.map(session => ({
      ...session,
      interval,
    }));
  }
}
