import styled from "@emotion/styled";
import { Color, FontFamilyProperty } from "csstype";
import hexToRgba from "hex-to-rgba";
import get from "lodash/get";
import map from "lodash/map";
import * as React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Conference } from "../../schema/Conference";
import { Contact } from "../../schema/Contact";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import { dayToFinnishLocale } from "../date-utils";

const TweetTemplateContainer = styled.div``;
const TweetPageContainer = styled.div``;

interface TweetContainerProps {
  primaryColor: Color;
  secondaryColor: Color;
  texture: string;
}

const TweetContainer = styled.div`
  background-image: ${({
    primaryColor,
    secondaryColor,
    texture,
  }: TweetContainerProps) => `linear-gradient(
      ${primaryColor},
      ${hexToRgba(secondaryColor, 0.79)}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  width: 880px;
  height: 440px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  color: white;
` as React.FC<TweetContainerProps>;

const TweetTextContainer = styled.div`
  position: relative;
  margin-top: 2em;
  padding: 0.25em;
  max-width: 880px;
  background-color: #fff6c8;
`;
const TweetTextToCopy = styled.span`
  margin-right: 0.5em;
`;
const TweetCopyButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
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

const TweetText = styled.h2`
  padding-top: 0.5em;
  font-size: 300%;
`;

interface TweetDescriptionProps {
  fontFamily: FontFamilyProperty;
}

const TweetDescription = styled.h2`
  width: 120%;
  font-size: 200%;
  font-weight: 200;
  font-family: ${({ fontFamily }: TweetDescriptionProps) => fontFamily};
` as React.FC<TweetDescriptionProps>;

interface SpeakerTweetTemplateProps {
  conference?: Conference;
  contact: Contact;
  theme: Theme;
  id: string;
}

function SpeakerTweetTemplate({
  conference,
  contact,
  theme,
  id,
}: SpeakerTweetTemplateProps) {
  if (!conference) {
    return null;
  }

  const days = getConferenceDays(conference);
  // TODO: Set up conference.hashtag (should not contain #)
  const tweetTextToCopy = `Learn more about the topic at #${conference.name
    .split(" ")
    .join("")} (${days})`;

  return (
    <TweetTemplateContainer>
      <TweetPageContainer id={id}>
        {React.createElement(SpeakerTweet, {
          logo: theme.logos.white.withText.url,
          days,
          contact,
          theme,
          conference,
        })}
      </TweetPageContainer>
      <TweetTextContainer>
        <TweetTextToCopy>{tweetTextToCopy}</TweetTextToCopy>
        <CopyToClipboard
          text={tweetTextToCopy}
          onCopy={() => alert("Copied to clipboard")}
        >
          <TweetCopyButton>&#x2398;</TweetCopyButton>
        </CopyToClipboard>
      </TweetTextContainer>
    </TweetTemplateContainer>
  );
}

function getConferenceDays(conference): string {
  const { schedules } = conference;
  const conferenceDays = map(schedules, ({ day }) => dayToFinnishLocale(day));
  const firstDay = conferenceDays[0];
  const lastDay = conferenceDays[conferenceDays.length - 1];

  return `${firstDay}-${lastDay}`;
}

interface TweetProps {
  days: string;
  contact: Contact;
  theme: Theme;
  conference: Conference;
}

const TweetInfoContainer = styled.div`
  padding: 3em 0 3em 3em;
  display: grid;
  justify-content: center;
`;

const TweetImageContainer = styled.div`
  padding: 3em;
`;

interface TweetImageProps {
  color?: Color;
  isCircle?: boolean;
  src: HTMLImageElement["src"];
}

const TweetImage = styled.img`
  width: 100%;
  box-sizing: border-box;
  clip-path: ${({ isCircle }: TweetImageProps) =>
    isCircle ? "circle(9em at center)" : ""};
` as React.FC<TweetImageProps>;

function SpeakerTweet({ days, contact, theme, conference }: TweetProps) {
  if (!contact) {
    return null;
  }

  const logo = theme.logos.white.withText.url;
  const { name, image, talks, workshops } = contact;

  return (
    <TweetContainer
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
      texture={theme.textures[0].url}
    >
      <TweetInfoContainer>
        <TweetRow>
          <TweetLogo src={logo} />
          <TweetConferenceDays>{days}</TweetConferenceDays>
        </TweetRow>
        <TweetText>{name}</TweetText>
        {Array.isArray(talks) && talks.length > 0 && (
          <TweetDescription fontFamily={theme.fonts.secondary}>
            {talks[0].title}
          </TweetDescription>
        )}
        {Array.isArray(talks) &&
          talks.length === 0 &&
          Array.isArray(workshops) &&
          workshops.length > 0 && (
            <>
              <TweetText>Workshop</TweetText>
              <TweetDescription fontFamily={theme.fonts.secondary}>
                {workshops[0].title}
              </TweetDescription>
            </>
          )}
      </TweetInfoContainer>
      <TweetImageContainer>
        <TweetImage isCircle src={image.url} />
      </TweetImageContainer>
    </TweetContainer>
  );
}

const ConnectedSpeakerTweetTemplate = connect(
  "/graphql",
  `
query SpeakerTweetTemplateQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    name
    slogan
    schedules {
      day
    }
    locations {
      city
      country {
        name
      }
    }
  }
}
  `,
  {},
  ({ conferenceId }) => ({ conferenceId })
)(SpeakerTweetTemplate);

ConnectedSpeakerTweetTemplate.filename = "speaker-tweet";

// TODO: Better use enums here
ConnectedSpeakerTweetTemplate.variables = [
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
    id: "intervalTitle",
    query: `query SessionQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    schedules {
      intervals {
        title
      }
    }
  }
}`,
    mapToCollection({ conference }) {
      return []
        .concat(
          ...get(conference, "schedules", []).map(({ intervals }) => intervals)
        )
        .filter(({ title }) => title);
    },
    mapToOption({ title }) {
      return { value: title, label: title };
    },
  },
];

export default ConnectedSpeakerTweetTemplate;
