"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_scalars_1 = require("@okgrow/graphql-scalars");
const graphql_1 = require("graphql");
// TODO: Url is GraphQLScalarType already so shouldn't we reuse it here as well?
const UrlScalar = new graphql_1.GraphQLScalarType({
    name: "Url",
    description: "Url scalar type",
    parseValue(value) {
        return new graphql_scalars_1.Url(value);
    },
    serialize(value) {
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return new graphql_scalars_1.Url(ast.value);
        }
        return null;
    },
});
exports.UrlScalar = UrlScalar;
//# sourceMappingURL=scalars.js.map