import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ConferenceResolver } from "./Conference";
import { ContactResolver, ContactType } from "./Contact";
import { IntervalResolver } from "./Interval";
import { LocationResolver } from "./Location";
import { ScheduleResolver } from "./Schedule";
import { SeriesResolver } from "./Series";

export { ContactType };

export default async function generateSchema() {
  return await buildSchema({
    resolvers: [
      ConferenceResolver,
      ContactResolver,
      IntervalResolver,
      LocationResolver,
      ScheduleResolver,
      SeriesResolver,
    ],
  });
}
