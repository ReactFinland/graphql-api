"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_scalars_1 = require("@okgrow/graphql-scalars");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const Conference_1 = require("./Conference");
const Contact_1 = require("./Contact");
exports.ContactType = Contact_1.ContactType;
const Interval_1 = require("./Interval");
const scalars_1 = require("./scalars");
const Schedule_1 = require("./Schedule");
const Series_1 = require("./Series");
const Session_1 = require("./Session");
exports.SessionType = Session_1.SessionType;
async function generateSchema() {
    return await type_graphql_1.buildSchema({
        resolvers: [
            Conference_1.ConferenceResolver,
            Contact_1.ContactResolver,
            Interval_1.IntervalResolver,
            Schedule_1.ScheduleResolver,
            Series_1.SeriesResolver,
            Session_1.SessionResolver,
        ],
        scalarsMap: [{ type: graphql_scalars_1.Url, scalar: scalars_1.UrlScalar }],
    });
}
exports.default = generateSchema;
//# sourceMappingURL=index.js.map