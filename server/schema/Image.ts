import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Image {
  @Field(_ => String)
  public url!: string;
}
