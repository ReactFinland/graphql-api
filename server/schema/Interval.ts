import { Field, ObjectType } from "type-graphql";
import { Location } from "./Location";
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

  @Field(_ => Location, { nullable: true })
  public location?: Location;
}
