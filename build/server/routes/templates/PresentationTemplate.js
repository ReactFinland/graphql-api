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
const flatMap_1 = __importDefault(require("lodash/flatMap"));
const get_1 = __importDefault(require("lodash/get"));
const desaturate_1 = __importDefault(require("polished/lib/color/desaturate"));
const React = __importStar(require("react"));
const connect_1 = __importDefault(require("../components/connect"));
const Presentation_1 = __importDefault(require("../components/Presentation"));
const date_utils_1 = require("../date-utils");
const Sponsors_1 = __importDefault(require("../components/Sponsors"));
const sponsorQuery_1 = __importDefault(require("../queries/sponsorQuery"));
const scheduleQuery_1 = __importDefault(require("../queries/scheduleQuery"));
const PresentationTemplateContainer = styled_1.default.article `
  background-image: ${({ primaryColor, secondaryColor, texture, }) => `linear-gradient(
      ${primaryColor},
      ${desaturate_1.default(0.2, hex_to_rgba_1.default(secondaryColor, 0.79))}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  padding: 0;
  width: ${({ sideBarWidth }) => sideBarWidth ? `calc(100vw - ${sideBarWidth})` : "100vw"};
  overflow: hidden;
`;
function PresentationTemplate({ intervals, conferenceId, theme, day, id, sideBarWidth, }) {
    return (React.createElement(PresentationTemplateContainer, { id: id, primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url, sideBarWidth: sideBarWidth },
        React.createElement(Presentation_1.default, { conferenceId: conferenceId, presentationID: "schedule-presentation", slides: getSlides(theme, day, intervals, conferenceId), theme: theme, features: {
                showSlideNumber: false,
                showSlideProgress: false,
            } })));
}
const MainTitleContainer = styled_1.default.div `
  width: 100%;
  display: grid;
`;
const MainTitleDay = styled_1.default.h1 `
  color: ${({ color }) => color};
  justify-self: right;
  margin-right: 2cm;
  font-size: 400%;
`;
function getSlides(theme, day, intervals, conferenceId) {
    const titleSlide = [
        {
            layout: "REACT",
            content: (React.createElement(MainTitleContainer, null,
                React.createElement("img", { src: theme.logos.white.withText.url }),
                React.createElement(MainTitleDay, { color: theme.colors.text }, day))),
            css: {
                backgroundImage: `linear-gradient(${theme.colors.primary}, ${desaturate_1.default(0.2, hex_to_rgba_1.default(theme.colors.secondary, 0.79))}), url("${theme.textures[0].url}")`,
                backgroundSize: "cover",
            },
        },
    ];
    const intervalSlides = intervalsToSlides(intervals, conferenceId);
    return titleSlide.concat(intervalSlides);
}
const TitleContainer = styled_1.default.section `
  display: grid;
  grid-template-rows: 0.5fr 1.5fr;
`;
const TitleRowSingle = styled_1.default.div `
  display: grid;
  grid-template-columns: 1fr;
`;
const TitleRow = styled_1.default.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const SpeakerImage = styled_1.default.img `
  width: 75%;
  max-width: 8cm;
  justify-self: right;
  align-self: center;
  clip-path: polygon(0 0, 100% 0.5cm, 100% 100%, 0 calc(100% - 0.5cm));
`;
const SpeakerTextContainer = styled_1.default.div ``;
const SpeakerTitle = styled_1.default.div `
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 60%;
`;
const SpeakerName = styled_1.default.div `
  margin-top: 0.5em;
  font-size: 50%;
  opacity: 0.6;
`;
const SpeakerTime = styled_1.default.div `
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
const ConnectedSponsors = connect_1.default("/graphql", sponsorQuery_1.default, ({ conferenceId }) => ({ conferenceId }))(({ conference }) => React.createElement(Sponsors_1.default, Object.assign({}, conference, { rules: sponsorRules })));
const SponsorsContainer = styled_1.default.div `
  width: 100%;
  background-color: white;
  margin-top: 4cm;
`;
function intervalsToSlides(intervals, conferenceId) {
    if (!intervals) {
        return [];
    }
    return flatMap_1.default(intervals, ({ title, begin, end, sessions }) => {
        // Adjust from gmt+0 to gmt+3
        const adjustedBegin = parseInt(begin.split(":")[0], 10) + 3 + ":" + begin.split(":")[1];
        const adjustedEnd = parseInt(end.split(":")[0], 10) + 3 + ":" + end.split(":")[1];
        const titleSlide = title
            ? {
                layout: "TITLE",
                content: {
                    title: (React.createElement(TitleContainer, null,
                        React.createElement(SpeakerTitle, null, title),
                        React.createElement(SpeakerTime, null,
                            adjustedBegin,
                            "-",
                            adjustedEnd))),
                },
            }
            : null;
        const sessionSlides = sessions.map((session) => {
            const hasPerson = session.people && session.people[0];
            const RowContainer = hasPerson ? TitleRow : TitleRowSingle;
            return {
                layout: "TITLE",
                content: {
                    title: (React.createElement(TitleContainer, null,
                        React.createElement(SpeakerTitle, null, session.title),
                        React.createElement(RowContainer, null,
                            React.createElement(SpeakerTextContainer, null,
                                React.createElement(SpeakerName, null, hasPerson && session.people[0].name),
                                sessions.length === 1 && (React.createElement(SpeakerTime, null,
                                    adjustedBegin,
                                    "-",
                                    adjustedEnd))),
                            hasPerson && session.people[0].image.url ? (React.createElement(SpeakerImage, { src: hasPerson && session.people[0].image.url })) : (React.createElement(SponsorsContainer, null,
                                React.createElement(ConnectedSponsors, { conferenceId: conferenceId })))))),
                },
            };
        });
        return titleSlide ? [titleSlide].concat(sessionSlides) : sessionSlides;
    });
}
const ConnectedPresentationTemplate = connect_1.default("/graphql", scheduleQuery_1.default, {}, ({ conferenceId, day }) => ({ conferenceId, day }))(({ schedule, theme, conferenceId, sideBarWidth, id }) => (React.createElement(PresentationTemplate, { id: id, theme: theme, day: schedule && date_utils_1.dayToFinnishLocale(schedule.day), conferenceId: conferenceId, sideBarWidth: sideBarWidth, intervals: get_1.default(schedule, "intervals") })));
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
            return get_1.default(conference, "schedules", []);
        },
        mapToOption({ day }) {
            return {
                value: day,
                label: day,
            };
        },
    },
];
exports.default = ConnectedPresentationTemplate;
//# sourceMappingURL=PresentationTemplate.js.map