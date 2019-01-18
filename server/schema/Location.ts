import { Field, ObjectType } from "type-graphql";
import { Country } from "./Country";
import { Image } from "./Image";
import { Social } from "./Social";

@ObjectType()
export class Location {
  @Field(_ => String)
  public name?: string;

  @Field(_ => String)
  public about?: string;

  @Field(_ => Image)
  public image?: Image;

  @Field(_ => Social)
  public social?: Social;

  @Field(_ => Country)
  public country?: Country;

  @Field(_ => String)
  public city?: string;

  @Field(_ => String)
  public address?: string;
}
