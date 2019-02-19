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
  grid-template-columns: 1.5fr 1.5fr;
`;

const TweetInfoContainer = styled.div`
  padding: 3em;
`;

const TweetLogo = styled.img`
  max-width: 10em;
  margin-left: -0.5em;
`;

const TweetImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  clip-path: circle(10.5em at center);
`;

const TweetSpeakerName = styled.h1`
  padding-top: 1em;
  color: white;
  font-size: 300%;
`;

const TweetSpeakerTalk = styled.h2`
  padding-top: 2em;
  color: white;
  font-size: 200%;
`;

function SpeakerTweetPage({ speaker: { name, image, talks }, theme }) {
  return (
    <TweetPageContainer
      primaryColor={theme.primaryColor}
      secondaryColor={theme.secondaryColor}
    >
      <TweetInfoContainer>
        <TweetLogo src={theme.whiteLogoWithText.url} />
        <TweetSpeakerName>{name}</TweetSpeakerName>
        <TweetSpeakerTalk>{talks[0].title}</TweetSpeakerTalk>
      </TweetInfoContainer>
      <TweetImage src={image.url} />
    </TweetPageContainer>
  );
}

export default SpeakerTweetPage;
