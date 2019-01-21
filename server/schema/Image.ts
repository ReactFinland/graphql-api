import { Url } from "@okgrow/graphql-scalars";
import { Field, ObjectType } from "type-graphql";
import { UrlScalar } from "./scalars";

@ObjectType()
export class Image {
  @Field(_ => UrlScalar)
  public url!: Url;
}
