import { Url } from "@okgrow/graphql-scalars";
import { GraphQLScalarType, Kind } from "graphql";

// TODO: Url is GraphQLScalarType already so shouldn't we reuse it here as well?
const UrlScalar = new GraphQLScalarType({
  name: "Url",
  description: "Url scalar type",
  parseValue(value: string) {
    return new Url(value);
  },
  serialize(value: Url) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Url(ast.value);
    }
    return null;
  },
});

export { UrlScalar };
