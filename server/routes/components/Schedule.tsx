import styled from "@emotion/styled";
import * as CSS from "csstype";
import * as React from "react";
import emoji from "react-easy-emoji";
import { SessionType } from "../../schema/Session";

const ScheduleContainer = styled.dl`
  margin-top: 1cm;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  height: 10cm;
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
      SessionType.ORGANIZATIONAL,
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

export default Schedule;
