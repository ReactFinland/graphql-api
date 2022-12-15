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
const trimStart_1 = __importDefault(require("lodash/trimStart"));
const React = __importStar(require("react"));
const Contact_1 = require("../../schema/Contact");
const Card_1 = __importDefault(require("../components/Card"));
// TODO: Expose dimensions?
// TODO: Use Card.Container
const BadgeContainer = styled_1.default.section `
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  /* Animation */
  perspective: 100%;
  transform-style: preserve-3d;
  transition-duration: 500ms;

  margin: 0;
  padding: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  /* Hole for lanyard */
  &::after {
    position: relative;
    top: -14.2cm;
    left: 50%;
    width: 1mm;
    height: 1mm;
    background: rgba(151, 54, 54, 1);
    border-radius: 50%;
    content: "";
    z-index: 5;
  }
`;
const BadgeFront = styled_1.default(Card_1.default.Front) `
  border-radius: 0.5cm;
  background-image: ${resolveBackground};
  background-size: cover;
`;
/*const BadgeBack = styled(Card.Back)`
  border-radius: 0.5cm;
  background-image: ${resolveBackground};
  background-size: cover;
` as React.FC<BadgeBaseProps>;*/
function resolveBackground({ defaultColor = "#000", type, texture, opacity = {
    upper: 1.0,
    lower: 0.6,
}, }) {
    const colors = {
        [Contact_1.ContactType.ATTENDEE]: defaultColor,
        [Contact_1.ContactType.ORGANIZER]: "#6d0b4d",
        [Contact_1.ContactType.PRESS]: "#e5ce3b",
        [Contact_1.ContactType.SPEAKER]: "#d01a1a",
        [Contact_1.ContactType.WORKSHOP_HOST]: "#d01a1a",
        [Contact_1.ContactType.SPONSOR]: "#67d67b",
    };
    const color = colors[type];
    if (!color) {
        console.log(`Badge - Missing color for ${type}`);
        return defaultColor;
    }
    return `linear-gradient(${hex_to_rgba_1.default(color, opacity.upper)}, ${hex_to_rgba_1.default(color, opacity.lower)}), url("${texture}")`;
}
const BadgeContent = styled_1.default.div `
  margin-left: 0.2cm;
  margin-right: 0.2cm;
  padding: 2cm 0.5cm;
  height: 8.5cm;
  clip-path: polygon(0 0, 100% 0.5cm, 100% 100%, 0 calc(100% - 0.5cm));
  background: ${hex_to_rgba_1.default("#fff", 0.8)};
  z-index: 1;
`;
const BadgeLogo = styled_1.default.img `
  margin-top: 0.5em;
`;
const BadgeName = styled_1.default.h2 `
  display: block;
  font-size: 135%;
`;
const BadgeTwitter = styled_1.default.h3 `
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 125%;
`;
const BadgeCompany = styled_1.default.p `
  font-weight: bold;
`;
const BadgeFooter = styled_1.default.footer `
  padding-left: 1cm;
  justify-self: start;
`;
const BadgeType = styled_1.default.h3 `
  text-transform: capitalize;
  text-align: initial;
  color: white;
`;
// TODO: Use Image type for logo, not url (string)
function Badge({ defaultColor, logo, texture, attendee, width, height, }) {
    if (!attendee) {
        return React.createElement(React.Fragment, null, "No attendee!");
    }
    const { type, name, social, company } = attendee;
    const twitter = get_1.default(social, "twitter", "");
    // TODO: Drop the trimStart bit -> Needs a schema change
    const frontContent = (React.createElement(React.Fragment, null,
        React.createElement(BadgeLogo, { src: logo }),
        React.createElement(BadgeContent, null,
            React.createElement(BadgeName, null, name),
            trimStart_1.default(twitter, "https://twitter.com/") && (React.createElement(BadgeTwitter, null,
                "@",
                trimStart_1.default(twitter, "https://twitter.com/"))),
            company && React.createElement(BadgeCompany, null, company)),
        type && (React.createElement(BadgeFooter, null,
            React.createElement(BadgeType, null, type[0])))));
    // TODO: Expose
    // const backContent = frontContent;
    // TODO: Eliminate BadgeContainer?
    // TODO: What if an attendee has multiple types at once?
    return (React.createElement(BadgeContainer, { width: width, height: height },
        React.createElement(BadgeFront, { defaultColor: defaultColor, texture: texture, type: type[0] }, frontContent)));
}
// TODO: Generate Badge.propTypes based on this structure?
Badge.variables = [
    {
        id: "defaultColor",
        validation: { type: String, default: "#002fa9" },
    },
    {
        id: "logo",
        validation: {
            type: String,
            default: "/media/react-finland/logo/v2/logo-white-with-text.svg",
        },
    },
    {
        id: "attendee",
        validation: {
            type: Contact_1.Contact,
            default: {
                type: [Contact_1.ContactType.ATTENDEE],
                name: "John Doe",
                twitter: "johndoe",
                company: "John Doe Co.",
                noPhotography: false,
            },
        },
    },
    {
        id: "texture",
        validation: { type: String, default: "/media/assets/wave.svg" },
    },
];
exports.default = Badge;
//# sourceMappingURL=Badge.js.map