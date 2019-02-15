import { Url } from "@okgrow/graphql-scalars";
import { buildSchema } from "type-graphql";
import { ConferenceResolver } from "./Conference";
import { ContactResolver } from "./Contact";
import { IntervalResolver } from "./Interval";
import { UrlScalar } from "./scalars";
import { ScheduleResolver } from "./Schedule";
import { SeriesResolver } from "./Series";
import { SessionResolver } from "./Session";
import { ThemeResolver } from "./Theme";

export default async function generateSchema() {
  return await buildSchema({
    resolvers: [
      ConferenceResolver,
      ContactResolver,
      IntervalResolver,
      ScheduleResolver,
      SeriesResolver,
      SessionResolver,
      ThemeResolver,
    ],
    scalarsMap: [{ type: Url, scalar: UrlScalar }],
    // TODO: Emitting the schema could be useful for query checks.
    // emitSchemaFile: true, // use path for a specific location
  });
}
