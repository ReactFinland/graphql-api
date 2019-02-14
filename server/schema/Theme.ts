import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import allSeries from "./conferenceSeries";
import { Image } from "./Image";

// TODO: Add fonts here (name + path)
@ObjectType()
export class Theme {
  @Field(_ => String)
  public primaryColor!: string;

  @Field(_ => String)
  public secondaryColor!: string;

  @Field(_ => String)
  public textColor!: string;

  @Field(_ => String)
  public backgroundColor!: string;

  @Field(_ => Image)
  public blackLogoWithoutText!: Image;

  @Field(_ => Image)
  public blackLogoWithText!: Image;

  @Field(_ => Image)
  public coloredLogoWithoutText!: Image;

  @Field(_ => Image)
  public coloredLogoWithText!: Image;

  @Field(_ => Image)
  public whiteLogoWithoutText!: Image;

  @Field(_ => Image)
  public whiteLogoWithText!: Image;
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
