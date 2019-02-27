import { Url } from "@okgrow/graphql-scalars";
import { buildSchema, registerEnumType } from "type-graphql";
import { AttendeeType } from "./Attendee";
import { ConferenceResolver } from "./Conference";
import { ContactResolver, ContactType } from "./Contact";
import { IntervalResolver } from "./Interval";
import { UrlScalar } from "./scalars";
import { ScheduleResolver } from "./Schedule";
import { SeriesResolver } from "./Series";
import { SessionResolver, SessionType } from "./Session";
import { ThemeResolver } from "./Theme";

registerEnumType(AttendeeType, {
  name: "AttendeeType",
  description: "Type of the attendee",
});

registerEnumType(ContactType, {
  name: "ContactType",
  description: "Type of the contact",
});

registerEnumType(SessionType, {
  name: "SessionType",
  description: "Type of the session",
});

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
