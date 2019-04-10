import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import hexToRgba from "hex-to-rgba";
import flatMap from "lodash/flatMap";
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
  width: ${({ sideBarWidth }) =>
    sideBarWidth ? `calc(100vw - ${sideBarWidth})` : "100vw"};
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

const TitleContainer = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 1.5fr;
`;

const TitleRow = styled.div`
  margin-top: 0.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SpeakerImage = styled.img`
  width: 75%;
  justify-self: right;
  align-self: center;
  clip-path: polygon(0 0, 100% 0.5cm, 100% 100%, 0 calc(100% - 0.5cm));
`;

const SpeakerTitle = styled.div`
  margin-top: 0.5em;
  font-size: 60%;
`;

const SpeakerName = styled.div`
  font-size: 50%;
  opacity: 0.6;
`;

function intervalsToSlides(intervals) {
  if (!intervals) {
    return [];
  }

  return flatMap(intervals, ({ title, begin, end, sessions }) => {
    const titleSlide = title
      ? {
          layout: "TITLE",
          content: {
            title,
          },
        }
      : null;
    const sessionSlides = sessions.map(session => {
      return {
        layout: "TITLE",
        content: {
          title: (
            <TitleContainer>
              <SpeakerTitle>{session.title}</SpeakerTitle>
              <TitleRow>
                <SpeakerName>
                  {session.people &&
                    session.people[0] &&
                    session.people[0].name}
                </SpeakerName>
                <SpeakerImage
                  src={
                    session.people &&
                    session.people[0] &&
                    session.people[0].image.url
                  }
                />
              </TitleRow>
            </TitleContainer>
          ),
          subtitle: `${begin}-${end}`,
        },
      };
    });

    return titleSlide ? [titleSlide].concat(sessionSlides) : sessionSlides;
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
