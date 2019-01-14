import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Social {
  @Field()
  public homepage?: string;

  @Field()
  public twitter?: string;

  @Field()
  public github?: string;

  @Field()
  public facebook?: string;

  @Field()
  public medium?: string;

  @Field()
  public instagram?: string;

  @Field()
  public linkedin?: string;

  @Field()
  public youtube?: string;

  @Field()
  public vk?: string;
}
