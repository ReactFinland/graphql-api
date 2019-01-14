import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Country {
  @Field()
  public name?: string;

  @Field()
  public code?: string;
}
