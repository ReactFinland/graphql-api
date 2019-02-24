import styled from "@emotion/styled";
import { Color } from "csstype";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import { Schedule as ISchedule } from "../../schema/Schedule";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import scheduleQuery from "../queries/scheduleQuery";
import sponsorQuery from "../queries/sponsorQuery";
interface SchedulePageContainerProps {
  primaryColor: Color;
  secondaryColor: Color;
}

const ScheduleTemplateContainer = styled.div`
  background-image: ${({
    primaryColor,
    secondaryColor,
  }: SchedulePageContainerProps) => `linear-gradient(
      ${primaryColor},
      ${hexToRgba(secondaryColor, 0.79)}
    ),
    url("/media/assets/wave.svg")`};
  background-size: cover;
  position: relative;
  margin: auto;
  padding: 0;
  width: 28.8cm;
  height: 20.4cm;
  overflow: hidden;
`;

const ScheduleTemplateLogo = styled.img`
  position: relative;
  margin: 0.5cm 0.9cm 0cm;
  width: 5cm;
`;

const ScheduleTemplateHeader = styled.h1`
  color: white;
  position: absolute;
  right: 1.2cm;
  top: 0cm;
  font-size: 420%;
  margin-top: 0.75cm;
`;

const ScheduleTemplateContent = styled.div`
  position: relative;
  margin: 0;
  margin-left: 0.5cm;
  margin-right: 0.5cm;
  padding: 0.25cm;
  background-color: white;
  height: 11.5cm;
  clip-path: polygon(0 0, 100% 1cm, 100% 100%, 0 calc(100% - 1cm));
  z-index: 1;
`;

interface ScheduleTemplateProps {
  intervals?: ISchedule[];
  theme: Theme;
  day: string;
  conferenceId: string;
}

const ConnectedSponsors = connect(
  "/graphql",
  sponsorQuery,
  ({ conferenceId }) => ({ conferenceId })
)(({ conference }) => <Sponsors {...conference} />);

function ScheduleTemplate({
  intervals,
  theme,
  day,
  conferenceId,
}: ScheduleTemplateProps) {
  return (
    <ScheduleTemplateContainer
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
    >
      <ScheduleTemplateLogo src={theme.logos.white.withText.url} />
      <ScheduleTemplateHeader>
        Schedule{day ? ` ― ${day}` : ""}
      </ScheduleTemplateHeader>
      <ScheduleTemplateContent>
        {intervals && <Schedule theme={theme} intervals={intervals} />}
      </ScheduleTemplateContent>
      <ConnectedSponsors conferenceId={conferenceId} />
    </ScheduleTemplateContainer>
  );
}

// TODO: Drop as ISchedule cast
export default connect(
  "/graphql",
  scheduleQuery,
  {},
  ({ selected }) => ({ ...selected })
)(({ schedule, theme, day, selected }) => (
  <ScheduleTemplate
    theme={theme}
    day={day}
    conferenceId={selected.conferenceId}
    intervals={schedule && (schedule.intervals as ISchedule[])}
  />
));
