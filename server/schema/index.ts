import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ConferenceResolver } from "./Conference";
import { ContactResolver, ContactType } from "./Contact";
import { IntervalResolver } from "./Interval";
import { ScheduleResolver } from "./Schedule";
import { SeriesResolver } from "./Series";
import { SessionResolver, SessionType } from "./Session";

export { ContactType, SessionType };

export default async function generateSchema() {
  return await buildSchema({
    resolvers: [
      ConferenceResolver,
      ContactResolver,
      IntervalResolver,
      ScheduleResolver,
      SeriesResolver,
      SessionResolver,
    ],
  });
}
