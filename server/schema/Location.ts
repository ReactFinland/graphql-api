import { Field, ObjectType } from "type-graphql";
import { Country } from "./Country";

@ObjectType()
export class Location {
  @Field(_ => Country)
  public country?: Country;

  @Field(_ => String)
  public city?: string;

  @Field(_ => String)
  public address?: string;
}
