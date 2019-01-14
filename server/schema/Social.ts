import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Social {
  @Field(_ => String)
  public homepage?: string;

  @Field(_ => String)
  public twitter?: string;

  @Field(_ => String)
  public github?: string;

  @Field(_ => String)
  public facebook?: string;

  @Field(_ => String)
  public medium?: string;

  @Field(_ => String)
  public instagram?: string;

  @Field(_ => String)
  public linkedin?: string;

  @Field(_ => String)
  public youtube?: string;

  @Field(_ => String)
  public vk?: string;
}
