import { Url } from "@okgrow/graphql-scalars";
import { buildSchema, registerEnumType } from "type-graphql";
import { AttendeeType } from "./Attendee";
import { ContactType } from "./Contact";
import * as resolvers from "./resolvers";
import { UrlScalar } from "./scalars";
import { SessionType } from "./Session";

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
    resolvers: Object.values(resolvers),
    scalarsMap: [{ type: Url, scalar: UrlScalar }],
    // TODO: Emitting the schema could be useful for query checks.
    // emitSchemaFile: true, // use path for a specific location
  });
}
