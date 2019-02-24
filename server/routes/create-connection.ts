import { graphql } from "graphql";

function createConnection(schema) {
  return async function connection(queries: string[], parameters: {}) {
    try {
      return [null, await createConnect(schema, queries, parameters)];
    } catch (err) {
      return [err, null];
    }
  };
}

// Cache query results so connect can be used in a synchronous way
// later in the code.
async function createConnect(schema, queries: string[], context) {
  const results = {};

  await Promise.all(
    queries.map(query =>
      graphql(schema, query, null, null, context).then(({ data, errors }) => {
        if (errors) {
          throw new Error(errors && errors.toString());
        }

        return {
          query,
          data,
        };
      })
    )
  ).then(values => {
    values.forEach(({ query, data }) => {
      results[query] = data;
    });
  });

  await Object.values(queries).forEach(async query => {
    const result = await graphql(schema, query, null, null, context);

    results[query] = result.data;
  });

  return query => results[query];
}

export default createConnection;
