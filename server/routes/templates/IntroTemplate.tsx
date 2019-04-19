import styled from "@emotion/styled";
import { Color, WidthProperty } from "csstype";
import hexToRgba from "hex-to-rgba";
import desaturate from "polished/lib/color/desaturate";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import Presentation from "../components/Presentation";
import Sponsors from "../components/Sponsors";
import sponsorQuery from "../queries/sponsorQuery";

interface SchedulePageContainerProps {
  id: string;
  primaryColor: Color;
  secondaryColor: Color;
  texture: string;
  sideBarWidth: WidthProperty<string>;
}

const IntroTemplateContainer = styled.article`
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

interface IntroTemplateProps {
  theme: Theme;
  conferenceId: string;
  id: string;
  sideBarWidth: WidthProperty<string>;
}

function IntroTemplate({ theme, id, sideBarWidth }: IntroTemplateProps) {
  return (
    <IntroTemplateContainer
      id={id}
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
      texture={theme.textures[0].url}
      sideBarWidth={sideBarWidth}
    >
      <Presentation
        presentationID="intro-presentation"
        slides={getSlides(theme)}
        theme={theme}
        features={{
          showSlideNumber: false,
          showSlideProgress: false,
        }}
      />
    </IntroTemplateContainer>
  );
}

const ConnectedSponsors = connect(
  "/graphql",
  sponsorQuery,
  ({ conferenceId }) => ({ conferenceId })
)(({ conference }) => <Sponsors {...conference} />);

function getSlides(theme) {
  const titleSlide = [
    {
      layout: "IMAGE",
      content: {
        url: theme.logos.white.withText.url
      },
    },
    {
      layout: "IMAGE",
      content: {
        url: "/media/assets/pineapple.jpg",
      },
    },
    {
      layout: "IMAGE",
      content: {
        url: "https://imgoat.com/uploads/8baa56554f/141386.jpeg",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "6 workshops",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "~400 people",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "27 speakers",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "Two days",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "Single track",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "Themed sessions",
      },
    },
    {
      layout: "TITLE",
      content: {
        title: "Professional MCs",
      },
    },
    {
      layout: "IMAGE",
      content: {
        url: "/media/assets/disco.jpg",
      },
    },
    {
      layout: "REACT",
      // TODO: Make sponsor images bigger
      content: <ConnectedSponsors conferenceId="react-finland-2019" />,
    },
  ];

  return titleSlide;
}

export default IntroTemplate;
