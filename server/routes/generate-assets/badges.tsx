// import { graphql } from "graphql";
import styled from "@emotion/styled";
import * as React from "react";

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 1em;
`;

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

  return <Button>generate badges</Button>;
}

export default GenerateBadges;
