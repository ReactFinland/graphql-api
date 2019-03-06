import { FieldResolver, Resolver, Root } from "type-graphql";
import { Interval } from "../Interval";
import { Session } from "../Session";

@Resolver(_ => Interval)
class IntervalResolver {
  @FieldResolver(_ => [Session])
  public sessions(@Root() interval: Interval) {
    return interval.sessions.map(session => ({
      ...session,
      interval,
    }));
  }
}

export default IntervalResolver;
