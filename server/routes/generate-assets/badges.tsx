// import { graphql } from "graphql";
import * as React from "react";

async function GenerateBadges(schema) {
  // TODO: Add a private API for fetching tickets. Port the initial
  // solution from the old asset generator
  /*
  const result = await graphql(
    schema,
    `
      {
        tickets {
          firstName
          lastName
          company
          type
          twitter
        }
      }
    `
  );
  */

  return <div>generate badges</div>;
}

export default GenerateBadges;
