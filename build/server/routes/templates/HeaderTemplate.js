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
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
const map_1 = __importDefault(require("lodash/map"));
const React = __importStar(require("react"));
const connect_1 = __importDefault(require("../components/connect"));
const date_utils_1 = require("../date-utils");
const conferenceDaysQuery_1 = __importDefault(require("../queries/conferenceDaysQuery"));
// TODO: Allow alpha to be defined for both
const HeaderPageContainer = styled_1.default.div `
  display: grid;
  background-image: ${({ primaryColor, secondaryColor, texture, }) => `linear-gradient(
      ${primaryColor},
      ${hex_to_rgba_1.default(secondaryColor, 0.39)}
    ),
    url("${texture}")`};
  background-size: cover;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  color: white;
`;
const TwitterSafeUser = styled_1.default.div `
  position: absolute;
  bottom: 0;
  background-color: #ff00008f;
  width: 450px;
  height: 200px;
  z-index: 1;
`;
const TwitterSafeTop = styled_1.default.div `
  position: absolute;
  top: 0;
  background-color: #ff00008f;
  width: 100%;
  height: 40px;
  z-index: 1;
`;
const TwitterSafeBottom = styled_1.default.div `
  position: absolute;
  bottom: 0;
  left: 450px;
  background-color: #ff00008f;
  width: 100%;
  height: 40px;
  z-index: 1;
`;
function TwitterSafeOverlay() {
    return (core_1.jsx(React.Fragment, null,
        core_1.jsx(TwitterSafeTop, null),
        core_1.jsx(TwitterSafeBottom, null),
        core_1.jsx(TwitterSafeUser, null)));
}
const PrimaryRow = styled_1.default.div `
  display: grid;
  grid-template-columns: ${({ useTwitterHeader }) => useTwitterHeader ? "1fr 0.2fr" : "1fr 1fr"};
`;
const SecondaryRow = styled_1.default.div `
  display: grid;
  padding-left: ${({ useTwitterHeader }) => useTwitterHeader ? "30em" : "5em"};
`;
const HeaderInfoContainer = styled_1.default.div `
  text-align: right;
  padding-right: 50px;
`;
const HeaderLogo = styled_1.default.img `
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 1.8em;
  width: 100%;
  height: ${({ useTwitterHeader }) => useTwitterHeader ? "20em" : ""};
`;
const HeaderConferenceDays = styled_1.default.h1 `
  padding-top: 2em;
`;
const HeaderLocation = styled_1.default.h2 `
  padding-top: 1em;
`;
const HeaderSlogan = styled_1.default.h2 `
  padding-top: 1em;
`;
const HeaderCoupon = styled_1.default.h3 `
  padding-top: 2em;
  font-family: "Courier New", Courier, monospace;
`;
var HeaderType;
(function (HeaderType) {
    HeaderType["WEB"] = "web";
    HeaderType["TWITTER"] = "twitter";
    HeaderType["A4"] = "a4";
})(HeaderType || (HeaderType = {}));
function HeaderTemplate({ conference, theme, id, type, coupon, discountPercentage, showTwitterSafeArea, showDates, showLocation, }) {
    const { locations, schedules, slogan } = conference || {
        locations: [],
        schedules: [],
        slogan: "",
    };
    const location = locations && locations.length > 0 && locations[0]
        ? {
            city: locations[0].city,
            country: locations[0].country && locations[0].country.name,
        }
        : null;
    const conferenceDays = map_1.default(schedules, ({ day }) => date_utils_1.dayToFinnishLocale(day));
    const firstDay = conferenceDays[0];
    const lastDay = conferenceDays[conferenceDays.length - 1];
    return (core_1.jsx(HeaderPageContainer, { id: id, primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url, width: resolveWidth(type), height: resolveHeight(type), css: theme.textures[0].style ? theme.textures[0].style : {} },
        showTwitterSafeArea && core_1.jsx(TwitterSafeOverlay, null),
        core_1.jsx(PrimaryRow, { useTwitterHeader: type === HeaderType.TWITTER },
            core_1.jsx(HeaderLogo, { src: theme.logos.white.withText.url, useTwitterHeader: type === HeaderType.TWITTER }),
            core_1.jsx(HeaderInfoContainer, null,
                showDates && firstDay && lastDay && (core_1.jsx(HeaderConferenceDays, null,
                    firstDay,
                    "-",
                    lastDay)),
                showLocation && location && (core_1.jsx(HeaderLocation, null,
                    location.city,
                    ", ",
                    location.country)))),
        core_1.jsx(SecondaryRow, { useTwitterHeader: type === HeaderType.TWITTER },
            core_1.jsx(HeaderSlogan, null, slogan),
            coupon && (core_1.jsx(HeaderCoupon, null,
                "Use ",
                coupon,
                " for a ",
                discountPercentage,
                "% discount!")))));
}
function resolveWidth(type) {
    switch (type) {
        case HeaderType.TWITTER:
            return "1500px";
        case HeaderType.A4:
            return "297mm";
        case HeaderType.WEB:
        default:
            return "1024px";
    }
}
function resolveHeight(type) {
    switch (type) {
        case HeaderType.TWITTER:
            return "500px";
        case HeaderType.A4:
            return "210mm";
        case HeaderType.WEB:
        default:
            return "512px";
    }
}
const ConnectedHeaderTemplate = connect_1.default("/graphql", conferenceDaysQuery_1.default, {}, ({ conferenceId }) => ({ conferenceId }))(HeaderTemplate);
ConnectedHeaderTemplate.filename = "header";
// TODO: Better use enums here
ConnectedHeaderTemplate.variables = [
    {
        id: "type",
        /* TODO: Fix default value */
        validation: {
            type: "enum",
            values: [HeaderType.WEB, HeaderType.TWITTER, HeaderType.A4],
            default: HeaderType.WEB,
        },
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
        id: "coupon",
        validation: { type: String, default: "" },
    },
    {
        id: "discountPercentage",
        validation: { type: String, default: "" },
    },
    {
        id: "showTwitterSafeArea",
        validation: { type: Boolean, default: false },
    },
    {
        id: "showDates",
        validation: { type: Boolean, default: true },
    },
    {
        id: "showLocation",
        validation: { type: Boolean, default: true },
    },
];
exports.default = ConnectedHeaderTemplate;
//# sourceMappingURL=HeaderTemplate.js.map