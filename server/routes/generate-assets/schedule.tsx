import styled from "@emotion/styled";
import { graphql } from "graphql";
import * as React from "react";

const SchedulePageContainer = styled.div`
  background-image: linear-gradient(
      rgb(243, 153, 153),
      rgba(183, 37, 136, 0.79)
    ),
    url("/media/assets/wave.svg");
  background-size: cover;
  position: relative;
  margin: auto;
  padding: 0;
  width: 28.8cm;
  height: 20.4cm;
  overflow: hidden;
`;

const SchedulePageLogo = styled.img`
  position: relative;
  margin: 0.5cm 0.9cm 0cm;
  width: 5cm;
`;

const SchedulePageHeader = styled.h1`
  color: white;
  position: absolute;
  right: 1.2cm;
  top: 0cm;
  font-size: 420%;
  margin-top: 0.75cm;
`;

const SchedulePageContent = styled.div`
  position: relative;
  margin: 0;
  margin-left: 0.5cm;
  margin-right: 0.5cm;
  padding-left: 0.25cm;
  padding-top: 0.25cm;
  padding-right: 0cm;
  padding-bottom: 0.25cm;
  background-color: white;
  height: 13.5cm;
  clip-path: polygon(0 0, 100% 1cm, 100% 100%, 0 calc(100% - 1cm));
  z-index: 1;
`;

function SchedulePage({ intervals, conferenceLogo, conferenceName }) {
  if (!intervals) {
    return null;
  }

  return (
    <SchedulePageContainer>
      <SchedulePageLogo src={conferenceLogo} alt={conferenceName} />
      <SchedulePageHeader>{conferenceName} - Schedule</SchedulePageHeader>
      <SchedulePageContent>
        <Schedule intervals={intervals} />
      </SchedulePageContent>
      {/*<SponsorsContainer /> FIXME */}
    </SchedulePageContainer>
  );
}

const ScheduleContainer = styled.dl`
  margin-top: 1cm;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  height: 11.7cm;
`;

const ScheduleContainerItem = styled.div`
  width: 50%;
  margin-bottom: 0.25cm;
  display: grid;
  grid-template-columns: 0.55fr 1.9fr;
  font-size: 83%;
`;

const ScheduleTitle = styled.dt`
  display: inline;
  overflow: hidden;
  font-size: 150%;
  font-family: monospace;
`;

const ScheduleDefinition = styled.dd`
  display: inline;
  font-size: 99%;
  margin-left: 0cm;
  text-align: left;
  overflow: hidden;
  line-height: 1.45;
`;

function Schedule({ intervals }) {
  if (!intervals) {
    return null;
  }

  return (
    <ScheduleContainer>
      {intervals.map(({ begin, end, sessions }, i) => (
        <ScheduleContainerItem key={`schedule-container-${i}`}>
          <ScheduleTitle key={`dt-${i}`}>
            {begin}-{end}
          </ScheduleTitle>
          <ScheduleDefinition key={`dd-${i}`}>
            {sessions.map(({ title, type, people }, i) => (
              <SessionTitle key={i} title={title} type={type} people={people} />
            ))}
          </ScheduleDefinition>
        </ScheduleContainerItem>
      ))}
    </ScheduleContainer>
  );
}

// FIXME
// TODO: Port ScheduleIcon to the project
function SessionTitle({ title, type, people }) {
  return (
    <h3>
      {title} {people && `- ${people[0].name}`}
    </h3>
  );
  /*return (
    <h3 className={cx(className, styles.sessionIntervalTitle)}>
      {type === "COFFEE_BREAK" ||
      type === "PARTY" ||
      type === "LUNCH" ||
      type === "BREAKFAST" ? (
        <div className={styles.specialSession}>
          {title} <ScheduleIcon type={type} />
        </div>
      ) : (
        <>
          {title} {people && `- ${people[0].name}`} <ScheduleIcon type={type} />
        </>
      )}
    </h3>
  );*/
}

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

  const conferenceLogo = "TODO"; // FIXME
  const conferenceName = "TODO"; // FIXME
  return (
    <SchedulePage
      intervals={result.data && result.data.schedule.intervals}
      conferenceLogo={conferenceLogo}
      conferenceName={conferenceName}
    />
  );
}

export default GenerateSchedule;
