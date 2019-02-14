import { graphql } from "graphql";
import * as React from "react";
import GlobalStyles from "./components/GlobalStyles";
import SchedulePage from "./pages/SchedulePage";

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

  // FIXME: Load theme from the API
  // TODO: Move fonts to theme
  const theme = {
    primaryColor: "#e10098",
    secondaryColor: "#e10098",
    textColor: "#233239",
    backgroundColor: "#eee",
  };
  const conferenceLogo = "TODO"; // FIXME
  const conferenceName = "TODO"; // FIXME
  return (
    <>
      <GlobalStyles theme={theme} />
      <SchedulePage
        intervals={result.data && result.data.schedule.intervals}
        conferenceLogo={conferenceLogo}
        conferenceName={conferenceName}
        theme={theme}
      />
    </>
  );
}

export default GenerateSchedule;
