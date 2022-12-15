"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const flatMap_1 = __importDefault(require("lodash/flatMap"));
const desaturate_1 = __importDefault(require("polished/lib/color/desaturate"));
const React = __importStar(require("react"));
const connect_1 = __importDefault(require("../components/connect"));
const Schedule_1 = __importDefault(require("../components/Schedule"));
const Sponsors_1 = __importDefault(require("../components/Sponsors"));
const date_utils_1 = require("../date-utils");
const scheduleQuery_1 = __importDefault(require("../queries/scheduleQuery"));
const sponsorQuery_1 = __importDefault(require("../queries/sponsorQuery"));
const ScheduleTemplateContainer = styled_1.default.article `
  display: grid;
  background-image: ${({ primaryColor, secondaryColor, texture, }) => `linear-gradient(
      ${primaryColor},
      ${desaturate_1.default(0.8, hex_to_rgba_1.default(secondaryColor, 0.89))}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  padding: 0;
  width: 29.7cm;
  height: 21cm;
  overflow: hidden;
`;
const ScheduleTemplateLogo = styled_1.default.img `
  position: relative;
  margin: 0cm 0.9cm 0cm;
  width: 5cm;
`;
const ScheduleHeaderContainer = styled_1.default.section ``;
const ScheduleTemplateTitle = styled_1.default.h1 `
  color: white;
  position: absolute;
  right: 1.2cm;
  top: 0cm;
  font-size: 420%;
  margin-top: 0.25cm;
`;
const ScheduleContentContainer = styled_1.default.div `
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  margin: 0;
  margin-top: -0.2cm;
  padding: 0.25cm 0 0.25cm 0.25cm;
  opacity: 0.9;
  background-color: white;
  height: 13.4cm;
  clip-path: polygon(0 0, 100% 1cm, 100% 100%, 0 calc(100% - 1cm));
  z-index: 1;
`;
const PlaceholderContainer = styled_1.default.h1 `
  font-size: 1000%;
`;
const ScheduleFooterContainer = styled_1.default.section `
  margin-top: -0.3cm;
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
function ScheduleTemplate({ intervals, theme, day, conferenceId, id, placeholder, }) {
    return (React.createElement(ScheduleTemplateContainer, { id: id, primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url },
        React.createElement(ScheduleHeaderContainer, null,
            React.createElement(ScheduleTemplateLogo, { src: theme.logos.white.withText.url }),
            React.createElement(ScheduleTemplateTitle, null, day ? day : "")),
        React.createElement(ScheduleContentContainer, null, placeholder ? (React.createElement(PlaceholderContainer, null, placeholder)) : (intervals && React.createElement(Schedule_1.default, { theme: theme, intervals: intervals }))),
        React.createElement(ScheduleFooterContainer, null,
            React.createElement(ConnectedSponsors, { conferenceId: conferenceId }))));
}
const ConnectedScheduleTemplate = connect_1.default("/graphql", scheduleQuery_1.default, {}, ({ conferenceId, day }) => ({ conferenceId, day }))(({ schedule, theme, conferenceId, id, placeholder }) => (React.createElement(ScheduleTemplate, { id: id, placeholder: placeholder, theme: theme, day: schedule && date_utils_1.dayToFinnishLocale(schedule.day), conferenceId: conferenceId, intervals: adjustTimezone(get_1.default(schedule, "intervals")) })));
function adjustTimezone(intervals) {
    if (!intervals) {
        return [];
    }
    return flatMap_1.default(intervals, (_a) => {
        var { begin, end } = _a, rest = __rest(_a, ["begin", "end"]);
        // Adjust from gmt+0 to gmt+3
        const adjustedBegin = parseInt(begin.split(":")[0], 10) + 3 + ":" + begin.split(":")[1];
        const adjustedEnd = parseInt(end.split(":")[0], 10) + 3 + ":" + end.split(":")[1];
        return Object.assign(Object.assign({}, rest), { begin: adjustedBegin, end: adjustedEnd });
    });
}
ConnectedScheduleTemplate.filename = "schedule";
// TODO: Better use enums here
ConnectedScheduleTemplate.variables = [
    {
        id: "placeholder",
        validation: { type: String, default: "" },
    },
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
exports.default = ConnectedScheduleTemplate;
//# sourceMappingURL=ScheduleTemplate.js.map