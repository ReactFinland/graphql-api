"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("./Contact");
const resolvers = __importStar(require("./resolvers"));
const Session_1 = require("./Session");
type_graphql_1.registerEnumType(Contact_1.ContactType, {
    name: "ContactType",
    description: "Type of the contact",
});
type_graphql_1.registerEnumType(Session_1.SessionType, {
    name: "SessionType",
    description: "Type of the session",
});
type_graphql_1.registerEnumType(Session_1.Level, {
    name: "Level",
    description: "Level of the session",
});
async function generateSchema() {
    return await type_graphql_1.buildSchema({
        resolvers: Object.values(resolvers),
    });
}
exports.default = generateSchema;
//# sourceMappingURL=index.js.map