"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
const get_1 = __importDefault(require("lodash/get"));
const map_1 = __importDefault(require("lodash/map"));
const flatten_1 = __importDefault(require("lodash/flatten"));
const React = __importStar(require("react"));
const react_copy_to_clipboard_1 = __importDefault(require("react-copy-to-clipboard"));
const connect_1 = __importDefault(require("../components/connect"));
const date_utils_1 = require("../date-utils");
const TweetTemplateContainer = styled_1.default.div ``;
const TweetPageContainer = styled_1.default.div ``;
const TweetContainer = styled_1.default.div `
  background-image: ${({ primaryColor, secondaryColor, texture, }) => `linear-gradient(
      ${primaryColor},
      ${hex_to_rgba_1.default(secondaryColor, 0.79)}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  width: 880px;
  height: 440px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
`;
const TweetTextContainer = styled_1.default.div `
  position: relative;
  margin-top: 2em;
  padding: 0.25em;
  max-width: 880px;
  background-color: #fff6c8;
`;
const TweetTextToCopy = styled_1.default.span `
  margin-right: 0.5em;
`;
const TweetCopyButton = styled_1.default.button `
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;
const TweetRow = styled_1.default.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const TweetLogo = styled_1.default.img `
  max-width: 10em;
  margin-left: -0.5em;
`;
const TweetConferenceDays = styled_1.default.h3 ``;
const TweetText = styled_1.default.h2 `
  text-align: center;
  padding-top: 0.5em;
  font-size: 300%;
`;
const TweetDescription = styled_1.default.h2 `
  text-align: center;
  line-height: 1.5;
  width: 100%;
  font-size: 150%;
  font-weight: 200;
  font-family: ${({ fontFamily }) => fontFamily};
`;
function SpeakerTweetTemplate({ conference, interval, theme, id, }) {
    if (!conference) {
        return null;
    }
    const days = getConferenceDays(conference);
    // TODO: Set up conference.hashtag (should not contain #)
    const tweetTextToCopy = `Learn more about the topic at #${conference.name
        .split(" ")
        .join("")} (${days})`;
    return (React.createElement(TweetTemplateContainer, null,
        React.createElement(TweetPageContainer, { id: id }, React.createElement(SpeakerTweet, {
            logo: theme.logos.white.withText.url,
            days,
            interval,
            theme,
            conference,
        })),
        React.createElement(TweetTextContainer, null,
            React.createElement(TweetTextToCopy, null, tweetTextToCopy),
            React.createElement(react_copy_to_clipboard_1.default, { text: tweetTextToCopy, onCopy: () => alert("Copied to clipboard") },
                React.createElement(TweetCopyButton, null, "\u2398")))));
}
function getConferenceDays(conference) {
    const { schedules } = conference;
    const conferenceDays = map_1.default(schedules, ({ day }) => date_utils_1.dayToFinnishLocale(day));
    const firstDay = conferenceDays[0];
    const lastDay = conferenceDays[conferenceDays.length - 1];
    return `${firstDay}-${lastDay}`;
}
const TweetInfoContainer = styled_1.default.div `
  padding: 3em;
  display: grid;
  justify-content: center;
`;
const TweetImageContainer = styled_1.default.div `
  background: white;
  padding: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const TweetImage = styled_1.default.img `
  width: 100%;
  box-sizing: border-box;
  border: 0.25em solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
`;
const Centered = styled_1.default.div `
  position: absolute;
  margin: auto;
  width: 150px;
  left: 16%;
  top: 50%;
  margin-top: -75px;
`;
function SpeakerTweet({ days, interval, theme }) {
    if (!interval) {
        return null;
    }
    const logo = theme.logos.white.withText.url;
    const { title } = interval;
    const speakers = flatten_1.default((interval.sessions || []).map(({ people }) => people || []));
    const people = interval.mc
        ? [interval.mc].concat(speakers)
        : speakers;
    return (React.createElement(TweetContainer, { primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url },
        React.createElement(TweetImageContainer, null,
            (people.length > 4 ? people.slice(1, 5) : people).map(({ name, image }) => (React.createElement(TweetImage, { key: name, src: image.url, borderColor: theme.colors.background }))),
            people.length > 4 && (React.createElement(Centered, null,
                React.createElement(TweetImage, { src: people[0].image.url, borderColor: theme.colors.background })))),
        React.createElement(TweetInfoContainer, null,
            React.createElement(TweetRow, null,
                React.createElement(TweetLogo, { src: logo }),
                React.createElement(TweetConferenceDays, null, days)),
            React.createElement(TweetText, null, title),
            React.createElement(TweetDescription, { fontFamily: theme.fonts.primary }, people.map(({ name }, i) => (React.createElement("span", { key: name },
                React.createElement("span", { style: { whiteSpace: "nowrap" } }, name),
                i < people.length - 1 && React.createElement("span", null, ", "))))))));
}
const ConnectedSpeakerTweetTemplate = connect_1.default("/graphql", `
query SpeakerTweetTemplateQuery($conferenceId: ID!, $intervalTitle: String!) {
  interval(conferenceId: $conferenceId, intervalTitle: $intervalTitle) {
    begin
    end
    title
    mc {
      name
      image {
        url
      }
    }
    sessions {
      title
      description
      people {
        name
        image {
          url
        }
      }
    }
  }
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
  `, {}, ({ conferenceId, intervalTitle }) => ({ conferenceId, intervalTitle }))(SpeakerTweetTemplate);
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
                .concat(...get_1.default(conference, "schedules", []).map(({ intervals }) => intervals))
                .filter(({ title }) => title);
        },
        mapToOption({ title }) {
            return { value: title, label: title };
        },
    },
];
exports.default = ConnectedSpeakerTweetTemplate;
//# sourceMappingURL=SessionTweetTemplate.js.map