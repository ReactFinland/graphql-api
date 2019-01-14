import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Image {
  @Field()
  public url!: string;
}
