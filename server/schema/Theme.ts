import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import allSeries from "./conferenceSeries";

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
