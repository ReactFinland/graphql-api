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
const React = __importStar(require("react"));
const react_copy_to_clipboard_1 = __importDefault(require("react-copy-to-clipboard"));
const to_title_case_1 = __importDefault(require("to-title-case"));
const Contact_1 = require("../../schema/Contact");
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
  grid-template-columns: 1.1fr 0.9fr;
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
  padding-top: 0.5em;
  font-size: 300%;
`;
const TweetDescription = styled_1.default.h2 `
  width: 120%;
  font-size: 200%;
  font-weight: 200;
  font-family: ${({ fontFamily }) => fontFamily};
`;
function SpeakerTweetTemplate({ conference, contact, theme, id, }) {
    if (!conference) {
        return null;
    }
    const days = getConferenceDays(conference);
    // TODO: Set up conference.hashtag (should not contain #)
    const tweetTextToCopy = `Learn more about the topic at #${conference.name
        .split(" ")
        .join("")} (${days})`;
    return (React.createElement(TweetTemplateContainer, null,
        React.createElement(TweetPageContainer, { id: id }, React.createElement(contact.type.includes(Contact_1.ContactType.SPONSOR)
            ? SponsorTweet
            : SpeakerTweet, {
            logo: theme.logos.white.withText.url,
            days,
            contact,
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
  padding: 3em 0 3em 3em;
  display: grid;
  justify-content: center;
`;
const TweetImageContainer = styled_1.default.div `
  padding: 3em;
`;
const TweetImage = styled_1.default.img `
  width: 100%;
  box-sizing: border-box;
  clip-path: ${({ isCircle }) => isCircle ? "circle(9em at center)" : ""};
`;
function SpeakerTweet({ days, contact, theme, conference }) {
    if (conference.name === "ReasonConf 2019") {
        return (React.createElement(ReasonSpeakerTweet, { days: days, contact: contact, theme: theme, conference: conference }));
    }
    const logo = theme.logos.white.withText.url;
    const { name, image, talks, workshops } = contact;
    return (React.createElement(TweetContainer, { primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url },
        React.createElement(TweetInfoContainer, null,
            React.createElement(TweetRow, null,
                React.createElement(TweetLogo, { src: logo }),
                React.createElement(TweetConferenceDays, null, days)),
            React.createElement(TweetText, null, name),
            Array.isArray(talks) && talks.length > 0 && (React.createElement(TweetDescription, { fontFamily: theme.fonts.secondary }, talks[0].title)),
            Array.isArray(talks) &&
                talks.length === 0 &&
                Array.isArray(workshops) &&
                workshops.length > 0 && (React.createElement(React.Fragment, null,
                React.createElement(TweetText, null, "Workshop"),
                React.createElement(TweetDescription, { fontFamily: theme.fonts.secondary }, workshops[0].title)))),
        React.createElement(TweetImageContainer, null,
            React.createElement(TweetImage, { isCircle: true, src: image.url }))));
}
const Reason = {
    TweetContainer: styled_1.default(TweetContainer) `
    grid-template-columns: 1fr 1fr;
    width: 600px;
    height: 440px;
  `,
    TweetImageContainer: styled_1.default(TweetImageContainer) `
    align-self: center;
  `,
    TweetInfoContainer: styled_1.default(TweetInfoContainer) `
    padding: 2em;
    display: grid;
    justify-items: right;
  `,
    TweetImage: styled_1.default(TweetImage) `
    clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);

    &::before {
      content: " ";
      clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
    }
  `,
    TweetRow: styled_1.default(TweetRow) `
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: right;
  `,
    TweetDescription: styled_1.default(TweetDescription) `
    padding-top: 0;
    justify-self: left;
    font-size: 150%;
    color: #97a5b1;
  `,
    TweetTalkTitle: styled_1.default.h3 `
    margin-top: 2em;
    color: #97a5b1;
  `,
    TweetName: styled_1.default(TweetText) `
    padding-top: 0;
  `,
};
function ReasonSpeakerTweet({ days, contact: { name, image, company, talks }, theme, conference, }) {
    const logo = theme.logos.colored.withText.url;
    return (React.createElement(Reason.TweetContainer, { primaryColor: theme.colors.secondary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url },
        React.createElement(Reason.TweetImageContainer, null,
            React.createElement(Reason.TweetImage, { src: image.url, color: theme.colors.primary })),
        React.createElement(Reason.TweetInfoContainer, null,
            React.createElement(Reason.TweetRow, null,
                React.createElement(TweetLogo, { src: logo })),
            React.createElement(Reason.TweetRow, null,
                React.createElement(TweetConferenceDays, null, days),
                conference.locations && (React.createElement(TweetConferenceDays, null, conference.locations[0].city))),
            talks && (React.createElement(Reason.TweetRow, null,
                React.createElement(Reason.TweetTalkTitle, null, talks[0].title))),
            React.createElement(Reason.TweetRow, null,
                React.createElement(Reason.TweetName, null, name)),
            company && (React.createElement(Reason.TweetDescription, { fontFamily: theme.fonts.secondary }, company)))));
}
const TweetSponsorContainer = styled_1.default.div `
  padding: 3em;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;
const TweetSponsorImage = styled_1.default(TweetImage) `
  margin-top: 3em;
  max-height: 6cm;
  max-width: 100%;
  width: auto;
`;
const TweetSponsorText = styled_1.default(TweetText) `
  padding-top: 0;
  text-align: center;
`;
function SponsorTweet({ days, contact: { about, image, type }, theme, }) {
    const logo = theme.logos.white.withText.url;
    return (React.createElement(TweetContainer, { primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url },
        React.createElement(TweetInfoContainer, null,
            React.createElement(TweetRow, null,
                React.createElement(TweetLogo, { src: logo }),
                React.createElement(TweetConferenceDays, null, days)),
            React.createElement(TweetSponsorImage, { src: image.url })),
        React.createElement(TweetSponsorContainer, null,
            React.createElement(TweetDescription, { fontFamily: theme.fonts.secondary }, about),
            React.createElement(TweetSponsorText, null, getSponsorType(type)))));
}
function getSponsorType(type) {
    return to_title_case_1.default(type.filter((t) => t !== Contact_1.ContactType.SPONSOR)[0]);
}
const ConnectedSpeakerTweetTemplate = connect_1.default("/graphql", `
query SpeakerTweetTemplateQuery($conferenceId: ID!, $contactName: String!) {
  contact(contactName: $contactName, conferenceId: $conferenceId) {
    name
    company
    about
    image {
      url
    }
    talks {
      title
    }
    workshops {
      title
    }
    type
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
  `, {}, ({ conferenceId, contactName }) => ({ conferenceId, contactName }))(SpeakerTweetTemplate);
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
        id: "contactName",
        query: `query SpeakerQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    allSpeakers {
      name
    }
    sponsors {
      name
    }
  }
}`,
        mapToCollection({ conference }) {
            return []
                .concat(get_1.default(conference, "allSpeakers"), get_1.default(conference, "sponsors"))
                .filter(Boolean);
        },
        mapToOption({ name }) {
            return {
                value: name,
                label: name,
            };
        },
    },
];
exports.default = ConnectedSpeakerTweetTemplate;
//# sourceMappingURL=TweetTemplate.js.map