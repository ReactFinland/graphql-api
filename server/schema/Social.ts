import { Url } from "@okgrow/graphql-scalars";
import { Field, ObjectType } from "type-graphql";
import { UrlScalar } from "./scalars";

@ObjectType()
export class Social {
  @Field(_ => UrlScalar, { nullable: true })
  public homepage?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public twitter?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public github?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public facebook?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public medium?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public instagram?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public linkedin?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public youtube?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public vk?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public pinterest?: Url;

  @Field(_ => UrlScalar, { nullable: true })
  public vimeo?: Url;
}
