import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as CSS from "csstype";
import { graphql } from "graphql";
import * as React from "react";
import emoji from "react-easy-emoji";
import { SessionType } from "../../schema/Session";

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
  margin-top: 1.8cm;
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

function SchedulePage({ intervals, conferenceLogo, conferenceName, theme }) {
  if (!intervals) {
    return null;
  }

  return (
    <SchedulePageContainer>
      <SchedulePageLogo src={conferenceLogo} alt={conferenceName} />
      <SchedulePageHeader>{conferenceName} - Schedule</SchedulePageHeader>
      <SchedulePageContent>
        <Schedule theme={theme} intervals={intervals} />
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

interface ScheduleTitleProps {
  color: CSS.Color;
  type: SessionType;
}

const ScheduleTitle = styled.dt`
  display: inline;
  overflow: hidden;
  font-size: 150%;
  font-family: monospace;
  color: ${({ color, type }: ScheduleTitleProps) =>
    [
      SessionType.BREAKFAST,
      SessionType.COFFEE_BREAK,
      SessionType.PARTY,
      SessionType.LUNCH,
    ].includes(type)
      ? color
      : "inherit"};
`;

const ScheduleDefinition = styled.dd`
  display: inline;
  font-size: 99%;
  margin-left: 0cm;
  text-align: left;
  overflow: hidden;
  line-height: 1.45;
`;

function Schedule({ theme, intervals }) {
  if (!intervals) {
    return null;
  }

  // TODO: How to handle multiple sessions at once?
  return (
    <ScheduleContainer>
      {intervals.map(({ begin, end, sessions }, i) => (
        <ScheduleContainerItem key={`schedule-container-${i}`}>
          <ScheduleTitle
            key={`dt-${i}`}
            color={theme.secondaryColor}
            type={sessions[0].type}
          >
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

function SessionTitle({ title, type, people }) {
  return (
    <h3>
      {title} {people && `- ${people[0].name}`} <ScheduleIcon type={type} />
    </h3>
  );
}

function ScheduleIcon({ type }) {
  const scheduleTypes = {
    KEYNOTE: { icon: "🗝", title: "Keynote" },
    LIGHTNING_TALK: { icon: "⚡️", title: "Lightning talk" },
    TALK: { icon: "🎙", title: "Presentation" },
    PANEL: { icon: "🙋", title: "Panel" },
    WORKSHOP: { icon: "👩‍💻", title: "Workshop" },
    COFFEE_BREAK: { icon: "☕", title: "Coffee break" },
    BREAKFAST: { icon: "🥐", title: "Breakfast" },
    LUNCH: { icon: "🍕", title: "Lunch" },
    ORGANIZATIONAL: { icon: "💤", title: "Organizational" },
    PARTY: { icon: "🎉", title: "Party at Gofore office" },
  };

  return (
    <span title={scheduleTypes[type].title}>
      {emoji(scheduleTypes[type].icon)}
    </span>
  );
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
      <Global
        styles={css`
          @font-face {
            font-family: "Finlandica";
            src: url("/media/fonts/finlandica-regular.eot");
            src: url("/media/fonts/finlandica-regular.eot?#iefix")
                format("embedded-opentype"),
              url("/media/fonts/finlandica-regular.woff2") format("woff2"),
              url("/media/fonts/finlandica-regular.woff") format("woff"),
              url("/media/fonts/finlandica-regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: "Finlandica Bold";
            src: url("/media/fonts/finlandica-bold.eot");
            src: url("/media/fonts/finlandica-bold.eot?#iefix")
                format("embedded-opentype"),
              url("/media/fonts/finlandica-bold.woff2") format("woff2"),
              url("/media/fonts/finlandica-bold.woff") format("woff"),
              url("/media/fonts/finlandica-bold.ttf") format("truetype");
            font-weight: bold;
            font-style: normal;
          }

          body {
            font-family: "Finlandica", sans-serif;
            background: ${theme.backgroundColor};
          }

          h1,
          h2,
          h3,
          h4,
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
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
