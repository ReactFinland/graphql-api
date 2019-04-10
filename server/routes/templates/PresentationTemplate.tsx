import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import hexToRgba from "hex-to-rgba";
import get from "lodash/get";
import desaturate from "polished/lib/color/desaturate";
import * as React from "react";
import { Interval } from "../../schema/Interval";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import Presentation from "../components/Presentation";
import { dayToFinnishLocale } from "../date-utils";
import scheduleQuery from "../queries/scheduleQuery";
interface SchedulePageContainerProps {
  id: string;
  primaryColor: Color;
  secondaryColor: Color;
  texture: string;
  sideBarWidth: WidthProperty<string>;
}

const PresentationTemplateContainer = styled.article`
  background-image: ${({
    primaryColor,
    secondaryColor,
    texture,
  }: SchedulePageContainerProps) => `linear-gradient(
      ${primaryColor},
      ${desaturate(0.2, hexToRgba(secondaryColor, 0.79))}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  padding: 0;
  width: ${({ sideBarWidth }) => `calc(100vw - ${sideBarWidth})`};
  overflow: hidden;
` as React.FC<SchedulePageContainerProps>;

interface PresentationTemplateProps {
  intervals?: Interval[];
  theme: Theme;
  day: string;
  conferenceId: string;
  id: string;
  sideBarWidth: WidthProperty<string>;
}

function PresentationTemplate({
  intervals,
  theme,
  day,
  conferenceId,
  id,
  sideBarWidth,
}: PresentationTemplateProps) {
  return (
    <PresentationTemplateContainer
      id={id}
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
      texture={theme.textures[0].url}
      sideBarWidth={sideBarWidth}
    >
      <Presentation
        presentationID="schedule-presentation"
        slides={getSlides(theme, day, intervals)}
        theme={theme}
        features={{
          showSlideNumber: false,
          showSlideProgress: false,
        }}
      />
    </PresentationTemplateContainer>
  );
}

function getSlides(theme, day, intervals) {
  const titleSlide = [
    {
      layout: "TITLE",
      content: {
        title: <img src={theme.logos.white.withText.url} />,
        subtitle: day,
      },
    },
  ];
  const intervalSlides = intervalsToSlides(intervals);

  return titleSlide.concat(intervalSlides);
}

function intervalsToSlides(intervals) {
  if (!intervals) {
    return [];
  }

  console.log(intervals);

  return intervals.map(({ begin, end, sessions }) => {
    return {
      layout: "TITLE",
      content: {
        title: sessions[0].title, // TODO
        subtitle: `${begin}-${end}`,
      },
    };
  });
}

const ConnectedScheduleTemplate = connect(
  "/graphql",
  scheduleQuery,
  {},
  ({ conferenceId, day }) => ({ conferenceId, day })
)(({ schedule, theme, conferenceId, sideBarWidth, id }) => (
  <PresentationTemplate
    id={id}
    theme={theme}
    day={schedule && dayToFinnishLocale(schedule.day)}
    conferenceId={conferenceId}
    sideBarWidth={sideBarWidth}
    intervals={get(schedule, "intervals")}
  />
));

ConnectedScheduleTemplate.filename = "schedule";

// TODO: Better use enums here
ConnectedScheduleTemplate.variables = [
  {
    id: "conferenceId",
    query: `query ConferenceIdQuery {  
  conferences {
    id
    name
  }
}`,
    mapToCollection({ conferences }) {
      return conferences;
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
