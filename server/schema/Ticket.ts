import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Ticket {
  @Field()
  public name!: string;

  @Field()
  public amount!: string;

  @Field()
  public currency!: string;

  @Field()
  public link?: string;
}
