import {
  Ctx,
  Field,
  FieldResolver,
  ObjectType,
  Resolver,
  Root,
} from "type-graphql";
import { IContext } from "./Context";
import { Country } from "./Country";
import { Image } from "./Image";
import { Social } from "./Social";

@ObjectType()
export class Location {
  @Field()
  public name!: string;

  @Field()
  public about!: string;

  @Field(_ => Image)
  public image?: Image;

  @Field(_ => Country)
  public country?: Country;

  @Field()
  public city?: string;

  @Field()
  public address?: string;

  @Field(_ => Social)
  public social?: Social;
}

@Resolver()
export class LocationResolver {
  @FieldResolver(_ => Image)
  public image(@Root() location: Location, @Ctx() ctx: IContext) {
    return {
      url: `${ctx.mediaUrl}/${location.image}`,
    };
  }
}
