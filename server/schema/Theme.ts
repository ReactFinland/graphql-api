import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import allSeries from "./conferenceSeries";
import { Image } from "./Image";

@ObjectType()
export class Colors {
  @Field(_ => String)
  public primary!: string;

  @Field(_ => String)
  public secondary!: string;

  @Field(_ => String)
  public text!: string;

  @Field(_ => String)
  public background!: string;
}

@ObjectType()
export class Logos {
  @Field(_ => Image)
  public blackWithoutText!: Image;

  @Field(_ => Image)
  public blackWithText!: Image;

  @Field(_ => Image)
  public coloredWithoutText!: Image;

  @Field(_ => Image)
  public coloredWithText!: Image;

  @Field(_ => Image)
  public whiteWithoutText!: Image;

  @Field(_ => Image)
  public whiteWithText!: Image;
}

// TODO: Add fonts here (name + path)
@ObjectType()
export class Theme {
  @Field(_ => Colors)
  public colors!: Colors;

  @Field(_ => Logos)
  public logos!: Logos;
}

@Resolver(_ => Theme)
export class ThemeResolver {
  @Query(_ => Theme)
  public theme(@Arg("conferenceId", _ => ID) conferenceId: string) {
    const series = allSeries[conferenceId];

    if (series) {
      return series.theme;
    }

    throw new Error("Conference id did not match series");
  }
}
