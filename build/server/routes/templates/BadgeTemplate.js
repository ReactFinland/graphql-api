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
const chunk_1 = __importDefault(require("lodash/chunk"));
const flatten_1 = __importDefault(require("lodash/flatten"));
const get_1 = __importDefault(require("lodash/get"));
const map_1 = __importDefault(require("lodash/map"));
const React = __importStar(require("react"));
const Contact_1 = require("../../schema/Contact");
const Badge_1 = __importDefault(require("../components/Badge"));
const connect_1 = __importDefault(require("../components/connect"));
const BadgeTemplateContainer = styled_1.default.section ``;
const defaultAttendees = [
    {
        type: [Contact_1.ContactType.ATTENDEE],
        name: "John Longsurname-Anotherlongone",
        social: {
            twitter: "johndoe",
        },
        company: "John Doe Enterprises",
        about: "",
        image: { url: "" },
        location: {},
    },
    {
        type: [Contact_1.ContactType.ORGANIZER],
        name: "Jane Doe",
        social: {
            twitter: "johndoe",
        },
        company: "John Doe Enterprises",
        about: "",
        image: { url: "" },
        location: {},
    },
    {
        type: [Contact_1.ContactType.PRESS],
        name: "Janette Doe",
        social: {
            twitter: "janettedoe",
        },
        company: "News Corp",
        about: "",
        image: { url: "" },
        location: {},
    },
    {
        type: [Contact_1.ContactType.SPEAKER],
        name: "John Doedoedoedoedoedoedoe",
        social: {
            twitter: "johndoe",
        },
        company: "John Doe Enterprises",
        about: "",
        image: { url: "" },
        location: {},
    },
    {
        type: [Contact_1.ContactType.SPONSOR],
        name: "John-Jack-Jim-Joe-Joel-Jeff Doe",
        social: {
            twitter: "johndoe",
        },
        company: "John & Son Doe Enterprises & Co.",
        about: "",
        image: { url: "" },
        location: {},
    },
];
function BadgeTemplate({ id, theme, attendees = defaultAttendees, showOnlyTemplates, emptyAttendees = 0, emptyOrganizers = 0, emptyPress = 0, emptySpeakers = 0, emptySponsors = 0, }) {
    const badgesPerPage = 4;
    let pages;
    if (showOnlyTemplates) {
        pages = chunk_1.default(getBadgeData([
            { type: [Contact_1.ContactType.ATTENDEE] },
            { type: [Contact_1.ContactType.ORGANIZER] },
            { type: [Contact_1.ContactType.PRESS] },
            { type: [Contact_1.ContactType.SPEAKER] },
            { type: [Contact_1.ContactType.SPONSOR] },
        ], {
            [Contact_1.ContactType.ATTENDEE]: 0,
            [Contact_1.ContactType.ORGANIZER]: 0,
            [Contact_1.ContactType.PRESS]: 0,
            [Contact_1.ContactType.SPEAKER]: 0,
            [Contact_1.ContactType.SPONSOR]: 0,
        }), badgesPerPage);
    }
    else {
        pages = chunk_1.default(fillWithEmpties(getBadgeData(attendees, {
            [Contact_1.ContactType.ATTENDEE]: emptyAttendees,
            [Contact_1.ContactType.ORGANIZER]: emptyOrganizers,
            [Contact_1.ContactType.PRESS]: emptyPress,
            [Contact_1.ContactType.SPEAKER]: emptySpeakers,
            [Contact_1.ContactType.SPONSOR]: emptySponsors,
        }), badgesPerPage), badgesPerPage);
    }
    return (React.createElement(BadgeTemplateContainer, { id: id }, map_1.default(pages, (tickets, i) => (React.createElement(Page, { key: i, defaultColor: theme.colors.primary, logo: theme.logos.white.withText.url, texture: theme.textures[0].url, tickets: tickets, showBackside: !showOnlyTemplates })))));
}
const ConnectedBadgeTemplate = connect_1.default("/graphql", `query AttendeeQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    attendees {
      name
      company
      type
      social {
        twitter
      }
    }
  }
}`, {}, ({ conferenceId }) => ({ conferenceId }))(({ conference, id, theme, showOnlyTemplates, emptyAttendees, emptyOrganizers, emptyPress, emptySpeakers, emptySponsors, }) => (React.createElement(BadgeTemplate, { attendees: get_1.default(conference, "attendees"), id: id, theme: theme, showOnlyTemplates: showOnlyTemplates, emptyAttendees: emptyAttendees, emptyOrganizers: emptyOrganizers, emptyPress: emptyPress, emptySpeakers: emptySpeakers, emptySponsors: emptySponsors })));
ConnectedBadgeTemplate.filename = "badge";
ConnectedBadgeTemplate.variables = [
    {
        id: "showOnlyTemplates",
        validation: {
            type: Boolean,
            default: true,
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
    // TODO
    /*{
      id: 'attendees',
      validation: {
        type: Array,
        of: Attendee,
        default: defaultAttendees
      }
    }*/
    // TODO: Figure out how to model this case.
    // Ideally this would be abstracted further so it's
    // not worth solving yet.
    /*{
      id: "emptyAmounts",
      validation: {
        type: Object,
        default: {
          attendees: 0,
          organizers: 0,
          speakers: 0,
          sponsors: 0,
        },
      },
    },*/
    {
        id: "emptyAttendees",
        validation: {
            type: Number,
            default: 0,
        },
    },
    {
        id: "emptyOrganizers",
        validation: {
            type: Number,
            default: 0,
        },
    },
    {
        id: "emptyPress",
        validation: {
            type: Number,
            default: 0,
        },
    },
    {
        id: "emptySpeakers",
        validation: {
            type: Number,
            default: 0,
        },
    },
    {
        id: "emptySponsors",
        validation: {
            type: Number,
            default: 0,
        },
    },
];
// TODO: Is the Safari fix needed anymore?
const PageSheet = styled_1.default.section `
  text-align: center;
  width: ${({ width }) => width};
  display: flex;
  flex-wrap: wrap;

  @media print {
    height: 11.5in !important; /* Adjust for Safari print mode */
  }
`;
const PageBadgeContainer = styled_1.default.div `
  display: inline-block;
`;
function Page({ defaultColor, logo, texture, tickets = [], showBackside, }) {
    const pairs = chunk_1.default(tickets, 2);
    const reverse = flatten_1.default(pairs.map(pair => [pair[1], pair[0]]));
    const width = "105mm"; // A6
    const height = "148mm"; // A6
    // TODO: Figure out how to deal withpage width properly
    // TODO: Implement separate layouts for front/back. Now we just
    // use the same.
    return (React.createElement(React.Fragment, null,
        React.createElement(PageSheet, { width: "210mm" }, tickets.map((attendee, i) => (React.createElement(PageBadgeContainer, { key: `front-${i}` },
            React.createElement(Badge_1.default, { attendee: attendee, defaultColor: defaultColor, logo: logo, texture: texture, width: width, height: height }))))),
        showBackside && (React.createElement(PageSheet, { width: "210mm" }, reverse.map((attendee, i) => (React.createElement(PageBadgeContainer, { key: `back-${i}` },
            React.createElement(Badge_1.default, { attendee: attendee, defaultColor: defaultColor, logo: logo, texture: texture, width: width, height: height }))))))));
}
function getBadgeData(tickets, emptyAmounts = {
    [Contact_1.ContactType.ATTENDEE]: 0,
    [Contact_1.ContactType.ORGANIZER]: 0,
    [Contact_1.ContactType.PRESS]: 0,
    [Contact_1.ContactType.SPEAKER]: 0,
    [Contact_1.ContactType.SPONSOR]: 0,
}) {
    const ret = tickets.concat(flatten_1.default(map_1.default(emptyAmounts, (amount, type) => 
    //  TODO: See if it's possible to eliminate "as" from here
    Array(amount).fill(getEmptyData(type)))));
    return ret;
}
function fillWithEmpties(badges, badgesPerPage, type = Contact_1.ContactType.ATTENDEE) {
    return badges.concat(Array(badges.length % badgesPerPage).fill(getEmptyData(type)));
}
function getEmptyData(type) {
    return {
        type: [type],
        name: "",
        company: "",
        about: "",
        image: { url: "" },
        social: {
            twitter: "",
        },
        location: {},
    };
}
// TODO: Connect to ticket API
exports.default = ConnectedBadgeTemplate;
//# sourceMappingURL=BadgeTemplate.js.map