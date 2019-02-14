import * as React from "react";
import GlobalStyles from "./components/GlobalStyles";
import SchedulePage from "./pages/SchedulePage";

async function GenerateSchedule(connect) {
  const result = await connect(
    `
      query PageQuery($conferenceSeriesId: ID!, $conferenceId: ID!, $day: String!) {
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
        theme(conferenceId: $conferenceSeriesId) {
          primaryColor
          secondaryColor
          textColor
          backgroundColor
          whiteLogoWithText {
            url
          }
        }
      }
    `,
    {
      conferenceSeriesId: "graphql-finland",
      conferenceId: "graphql-finland-2018",
      day: "2018-10-19",
    }
  );

  const data = result.data || {};
  const theme = data.theme;
  return (
    <>
      <GlobalStyles theme={theme} />
      <SchedulePage
        intervals={data.schedule.intervals}
        conferenceLogo={theme.whiteLogoWithText.url}
        theme={theme}
      />
    </>
  );
}

export default GenerateSchedule;
