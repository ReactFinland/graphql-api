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
import Sponsors from "../components/Sponsors";
import sponsorQuery from "../queries/sponsorQuery";
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
  conferenceId,
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
        conferenceId={conferenceId}
        presentationID="schedule-presentation"
        slides={getSlides(theme, day, intervals, conferenceId)}
        theme={theme}
        features={{
          showSlideNumber: false,
          showSlideProgress: false,
        }}
      />
    </PresentationTemplateContainer>
  );
}

const MainTitleContainer = styled.div`
  width: 100%;
  display: grid;
`;

interface MainTitleDayProps {
  color: Color;
}

const MainTitleDay = styled.h1`
  color: ${({ color }: MainTitleDayProps) => color};
  justify-self: right;
  margin-right: 2cm;
  font-size: 400%;
` as React.FC<MainTitleDayProps>;

function getSlides(theme: Theme, day, intervals, conferenceId) {
  const titleSlide = [
    {
      layout: "REACT",
      content: (
        <MainTitleContainer>
          <img src={theme.logos.white.withText.url} />
          <MainTitleDay color={theme.colors.text}>{day}</MainTitleDay>
        </MainTitleContainer>
      ),
      css: {
        backgroundImage: `linear-gradient(${theme.colors.primary}, ${desaturate(
          0.2,
          hexToRgba(theme.colors.secondary, 0.79)
        )}), url("${theme.textures[0].url}")`,
        backgroundSize: "cover",
      },
    },
  ];
  const intervalSlides = intervalsToSlides(intervals, conferenceId);

  return titleSlide.concat(intervalSlides);
}

const TitleContainer = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 1.5fr;
` as React.FC<{}>;

const TitleRowSingle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
` as React.FC<{}>;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
` as React.FC<{}>;

const SpeakerImage = styled.img`
  width: 75%;
  max-width: 8cm;
  justify-self: right;
  align-self: center;
  clip-path: polygon(0 0, 100% 0.5cm, 100% 100%, 0 calc(100% - 0.5cm));
` as React.FC<{ src: string }>;

const SpeakerTextContainer = styled.div``;

const SpeakerTitle = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 60%;
`;

const SpeakerName = styled.div`
  margin-top: 0.5em;
  font-size: 50%;
  opacity: 0.6;
`;

const SpeakerTime = styled.div`
  margin-top: 0.5em;
  font-size: 40%;
  opacity: 0.8;
`;

const sponsorRules = {
  gold: {
    "max-height": "2cm",
    "max-width": "6cm",
    width: "6cm",
    margin: "0 0.5cm 0.5cm 0.5cm",
    display: "block",
  },
  silver: {
    "max-height": "2.5cm",
    "max-width": "3cm",
    width: "3cm",
    margin: "0.5cm",
  },
  bronze: {
    "max-height": "1.25cm",
    "max-width": "1.75cm",
    width: "1.75cm",
    margin: "0.25cm 0.5cm 0cm 0.5cm",
  },
};

const ConnectedSponsors = connect(
  "/graphql",
  sponsorQuery,
  ({ conferenceId }: { conferenceId: string }) => ({ conferenceId })
)(({ conference }) => <Sponsors {...conference} rules={sponsorRules} />);

const SponsorsContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 4cm;
`;

function intervalsToSlides(intervals, conferenceId) {
  if (!intervals) {
    return [];
  }

  return flatMap(intervals, ({ title, begin, end, sessions }) => {
    // Adjust from gmt+0 to gmt+3
    const adjustedBegin =
      parseInt(begin.split(":")[0], 10) + 3 + ":" + begin.split(":")[1];
    const adjustedEnd =
      parseInt(end.split(":")[0], 10) + 3 + ":" + end.split(":")[1];

    const titleSlide = title
      ? {
          layout: "TITLE",
          content: {
            title: (
              <TitleContainer>
                <SpeakerTitle>{title}</SpeakerTitle>
                <SpeakerTime>
                  {adjustedBegin}-{adjustedEnd}
                </SpeakerTime>
              </TitleContainer>
            ),
          },
        }
      : null;
    const sessionSlides = sessions.map((session) => {
      const hasPerson = session.people && session.people[0];
      const RowContainer = hasPerson ? TitleRow : TitleRowSingle;

      return {
        layout: "TITLE",
        content: {
          title: (
            <TitleContainer>
              <SpeakerTitle>{session.title}</SpeakerTitle>
              <RowContainer>
                <SpeakerTextContainer>
                  <SpeakerName>
                    {hasPerson && session.people[0].name}
                  </SpeakerName>
                  {sessions.length === 1 && (
                    <SpeakerTime>
                      {adjustedBegin}-{adjustedEnd}
                    </SpeakerTime>
                  )}
                </SpeakerTextContainer>
                {hasPerson && session.people[0].image.url ? (
                  <SpeakerImage
                    src={hasPerson && session.people[0].image.url}
                  />
                ) : (
                  <SponsorsContainer>
                    <ConnectedSponsors conferenceId={conferenceId} />
                  </SponsorsContainer>
                )}
              </RowContainer>
            </TitleContainer>
          ),
        },
      };
    });

    return titleSlide ? [titleSlide].concat(sessionSlides) : sessionSlides;
  });
}

const ConnectedPresentationTemplate = connect(
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

ConnectedPresentationTemplate.filename = "presentation";

// TODO: Better use enums here
ConnectedPresentationTemplate.variables = [
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

export default ConnectedPresentationTemplate;
