import styled from "@emotion/styled";
import { Color } from "csstype";
import hexToRgba from "hex-to-rgba";
import * as React from "react";

interface TweetPageContainerProps {
  primaryColor: Color;
  secondaryColor: Color;
}

const TweetPageContainer = styled.div`
  background-image: ${({
    primaryColor,
    secondaryColor,
  }: TweetPageContainerProps) => `linear-gradient(
      ${primaryColor},
      ${hexToRgba(secondaryColor, 0.79)}
    ),
    url("/media/assets/wave.svg")`};
  background-size: cover;
  position: relative;
  margin: auto;
  padding: 0;
  width: 880px;
  height: 440px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  color: white;
`;

const TweetInfoContainer = styled.div`
  padding: 3em;
`;

const TweetRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const TweetLogo = styled.img`
  max-width: 10em;
  margin-left: -0.5em;
`;

const TweetConferenceDays = styled.h3``;

const TweetImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  clip-path: circle(10em at center);
`;

const TweetSpeakerName = styled.h1`
  padding-top: 1em;
  font-size: 300%;
`;

const TweetSpeakerTalk = styled.h2`
  padding-top: 2em;
  font-size: 200%;
`;

function SpeakerTweetPage({
  conferenceDays,
  speaker: { name, image, talks },
  theme,
}) {
  const firstDay = conferenceDays[0];
  const lastDay = conferenceDays[conferenceDays.length - 1];

  return (
    <TweetPageContainer
      primaryColor={theme.primaryColor}
      secondaryColor={theme.secondaryColor}
    >
      <TweetInfoContainer>
        <TweetRow>
          <TweetLogo src={theme.whiteLogoWithText.url} />
          <TweetConferenceDays>
            {firstDay}-{lastDay}
          </TweetConferenceDays>
        </TweetRow>
        <TweetSpeakerName>{name}</TweetSpeakerName>
        <TweetSpeakerTalk>{talks[0].title}</TweetSpeakerTalk>
      </TweetInfoContainer>
      <TweetImage src={image.url} />
    </TweetPageContainer>
  );
}

export default SpeakerTweetPage;
