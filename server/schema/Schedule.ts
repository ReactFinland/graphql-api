import { Field, ObjectType } from "type-graphql";
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
