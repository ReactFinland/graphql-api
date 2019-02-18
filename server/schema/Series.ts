import {
  Arg,
  Field,
  FieldResolver,
  ID,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import conferences from "../conferences";
import { Conference } from "./Conference";
import series from "./conferenceSeries";

@ObjectType()
export class Series {
  @Field(_ => ID)
  public id!: string;

  @Field(_ => String)
  public name!: string;

  @Field(_ => [Conference])
  public conferences!: [Conference];
}

@Resolver(_ => Series)
export class SeriesResolver {
  @Query(_ => Series)
  public series(@Arg("id") id: string) {
    if (series[id]) {
      return series[id];
    } else {
      throw new Error("Unknown conference");
    }
  }

  @Query(_ => [Series])
  public allSeries() {
    return Object.keys(series).map(id => series[id]);
  }

  @FieldResolver(_ => [Conference])
  public conferences(@Root() series: Series) {
    return Object.values(conferences).filter(
      conference => series.name === conference.series
    );
  }
}
