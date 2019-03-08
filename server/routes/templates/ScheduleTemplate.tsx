import styled from "@emotion/styled";
import { Color } from "csstype";
import hexToRgba from "hex-to-rgba";
import get from "lodash/get";
import desaturate from "polished/lib/color/desaturate";
import * as React from "react";
import { Interval } from "../../schema/Interval";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import { dayToFinnishLocale } from "../date-utils";
import scheduleQuery from "../queries/scheduleQuery";
import sponsorQuery from "../queries/sponsorQuery";
interface SchedulePageContainerProps {
  id: string;
  primaryColor: Color;
  secondaryColor: Color;
  texture: string;
}

const ScheduleTemplateContainer = styled.div`
  background-image: ${({
    primaryColor,
    secondaryColor,
    texture,
  }: SchedulePageContainerProps) => `linear-gradient(
      ${primaryColor},
      ${desaturate(0.8, hexToRgba(secondaryColor, 0.79))}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  padding: 0;
  width: 28.8cm;
  height: 20.4cm;
  overflow: hidden;
` as React.FC<SchedulePageContainerProps>;

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
  margin-top: -0.2cm;
  margin-left: 0.5cm;
  margin-right: 0.5cm;
  padding: 0.25cm;
  background-color: white;
  height: 12.8cm;
  clip-path: polygon(0 0, 100% 1cm, 100% 100%, 0 calc(100% - 1cm));
  z-index: 1;
`;

interface ScheduleTemplateProps {
  intervals?: Interval[];
  theme: Theme;
  day: string;
  conferenceId: string;
  id: string;
}

const ScheduleContainer = styled.section`
  margin-top: -0.5cm;
`;

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
  id,
}: ScheduleTemplateProps) {
  return (
    <ScheduleTemplateContainer
      id={id}
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
      texture={theme.textures[0].url}
    >
      <ScheduleTemplateLogo src={theme.logos.white.withText.url} />
      <ScheduleTemplateHeader>
        Schedule{day ? ` ― ${day}` : ""}
      </ScheduleTemplateHeader>
      <ScheduleTemplateContent>
        {intervals && <Schedule theme={theme} intervals={intervals} />}
      </ScheduleTemplateContent>
      <ScheduleContainer>
        <ConnectedSponsors conferenceId={conferenceId} />
      </ScheduleContainer>
    </ScheduleTemplateContainer>
  );
}

const ConnectedScheduleTemplate = connect(
  "/graphql",
  scheduleQuery,
  {},
  ({ conferenceId, day }) => ({ conferenceId, day })
)(({ schedule, theme, conferenceId, id }) => (
  <ScheduleTemplate
    id={id}
    theme={theme}
    day={schedule && dayToFinnishLocale(schedule.day)}
    conferenceId={conferenceId}
    intervals={get(schedule, "intervals")}
  />
));

ConnectedScheduleTemplate.filename = "schedule";

// TODO: Better use enums here
ConnectedScheduleTemplate.variables = [
  {
    id: "conferenceId",
    query: `query ConferenceIdQuery {  
  allConferences {
    id
    name
  }
}`,
    mapToCollection({ allConferences }) {
      return allConferences;
    },
    mapToOption({ id, name }) {
      return {
        value: id,
        label: name,
      };
    },
  },
  {
    id: "day",
    query: `query DayQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    schedules {
      day
    }
  }
}`,
    mapToCollection({ conference }) {
      return get(conference, "schedules", []);
    },
    mapToOption({ day }) {
      return {
        value: day,
        label: day,
      };
    },
  },
];

export default ConnectedScheduleTemplate;
