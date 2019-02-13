import { graphql } from "graphql";
import * as React from "react";

async function GenerateSchedule(schema) {
  const result = await graphql(
    schema,
    `
      query PageQuery($conferenceId: ID!, $day: String!) {
        schedule(conferenceId: $conferenceId, day: $day) {
          day
          description
          intervals {
            begin
            end
            sessions {
              type
              title
              people {
                name
              }
            }
          }
        }
      }
    `,
    null,
    null,
    {
      conferenceId: "graphql-finland-2018",
      day: "2018-10-19",
    }
  );

  console.log(result);

  return <div>generate schedule</div>;
}

export default GenerateSchedule;
