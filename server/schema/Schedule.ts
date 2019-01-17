import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import { getConference } from "./Conference";
import { Interval } from "./Interval";

@ObjectType()
export class Schedule {
  @Field(_ => String)
  public day!: string;

  @Field(_ => String, { nullable: true })
  public description?: string;

  @Field(_ => [Interval])
  public intervals!: Interval[];
}

@Resolver(_ => Schedule)
export class ScheduleResolver {
  @Query(_ => Schedule)
  public schedule(
    @Arg("conferenceId", _ => ID) conferenceId: string,
    @Arg("day") day: string
  ) {
    return getSchedule(conferenceId, day);
  }
}
function getSchedule(id: string, day: string) {
  const conference = getConference(id);
  const schedule = conference.schedules.find(c => c.day === day);

  if (schedule) {
    return schedule;
  } else {
    throw new Error("Invalid date");
  }
}
