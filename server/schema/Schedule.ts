import { Field, ObjectType } from "type-graphql";
import { Interval } from "./Interval";
import { Location } from "./Location";
import SessionType from "./SessionType";

@ObjectType()
export class Schedule {
  @Field((_) => String)
  public day!: string;

  @Field((_) => Location, { nullable: true })
  public location?: Location;

  @Field((_) => String, { nullable: true })
  public description?: string;

  @Field((_) => [Interval])
  public intervals!: Interval[];
}

export function resolveSessions(
  schedules: Schedule[],
  sessionTypes: SessionType[]
) {
  const sessions = schedules.flatMap(({ intervals }) =>
    intervals.flatMap(({ sessions }) =>
      sessions
        .flatMap((session) => [session].concat(session.sessions || []))
        .filter(({ type }) => sessionTypes.includes(type))
    )
  );

  return Array.from(new Set(sessions));
}
