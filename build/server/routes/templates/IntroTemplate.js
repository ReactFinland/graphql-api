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
const desaturate_1 = __importDefault(require("polished/lib/color/desaturate"));
const React = __importStar(require("react"));
const connect_1 = __importDefault(require("../components/connect"));
const Contacts_1 = __importDefault(require("../components/Contacts"));
const Presentation_1 = __importDefault(require("../components/Presentation"));
const Sponsor_1 = __importDefault(require("../components/Sponsor"));
const sponsorQuery_1 = __importDefault(require("../queries/sponsorQuery"));
const IntroTemplateContainer = styled_1.default.article `
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
function IntroTemplate({ conferenceId, theme, id, sideBarWidth, }) {
    return (React.createElement(IntroTemplateContainer, { id: id, primaryColor: theme.colors.primary, secondaryColor: theme.colors.secondary, texture: theme.textures[0].url, sideBarWidth: sideBarWidth },
        React.createElement(Presentation_1.default, { conferenceId: conferenceId, presentationID: "intro-presentation", slides: getSlides(theme), theme: theme, features: {
                showSlideNumber: false,
                showSlideProgress: false,
            } })));
}
// TODO: Refactor so that `Sponsor` accepts a css parameter
const sponsorRules = {
    goldSponsors: {
        "max-height": "8cm",
        "max-width": "14cm",
        margin: "1cm",
    },
    silverSponsors: {
        "max-height": "3cm",
        "max-width": "5cm",
        margin: "1cm",
    },
    bronzeSponsors: {
        "max-height": "1.5cm",
        "max-width": "3.5cm",
        margin: "1cm",
    },
    partners: {
        "max-height": "3cm",
        "max-width": "5cm",
        margin: "1cm",
    },
};
const SponsorsContainer = styled_1.default.div `
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #ffffffba;
  justify-items: center;
  align-items: center;
`;
const SponsorContainer = styled_1.default.div `
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: #ffffffba;
  justify-items: center;
  align-items: center;
`;
const SilverSponsorsContainer = styled_1.default.div `
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #ffffffba;
  justify-items: center;
  align-items: center;
`;
const PartnersContainer = styled_1.default.div `
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  background-color: #ffffffba;
  justify-items: center;
  align-items: center;
`;
const connectSponsor = (type) => connect_1.default("/graphql", sponsorQuery_1.default, ({ conferenceId }) => ({ conferenceId }))(({ conference, index }) => (React.createElement(Contacts_1.default, { items: conference && conference[type] && [conference[type][index]], render: Sponsor_1.default, renderProps: { rules: sponsorRules, type } })));
const connectSponsors = (type) => connect_1.default("/graphql", sponsorQuery_1.default, ({ conferenceId }) => ({ conferenceId }))(({ conference }) => (React.createElement(Contacts_1.default, { items: conference && conference[type], render: Sponsor_1.default, renderProps: { rules: sponsorRules, type } })));
// const ConnectedGoldSponsors = connectSponsors("goldSponsors");
const ConnectedGoldSponsor = connectSponsor("goldSponsors");
const ConnectedSilverSponsors = connectSponsors("silverSponsors");
const ConnectedBronzeSponsors = connectSponsors("bronzeSponsors");
const ConnectedPartners = connectSponsors("partners");
function getSlides(theme) {
    const titleSlide = [
        {
            layout: "IMAGE",
            content: {
                url: theme.logos.white.withText.url,
            },
            css: {
                backgroundImage: `linear-gradient(${theme.colors.primary}, ${desaturate_1.default(0.2, hex_to_rgba_1.default(theme.colors.secondary, 0.79))}), url("${theme.textures[0].url}")`,
                backgroundSize: "cover",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: (React.createElement(React.Fragment, null,
                    "\"Professional\" MCs - ",
                    React.createElement("b", null, "@jevakallio"),
                    " and ",
                    React.createElement("b", null, "@NikkitaFTW"))),
            },
        },
        {
            layout: "IMAGE",
            content: {
                url: "https://imgoat.com/uploads/8baa56554f/141386.jpeg",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "~400 people",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "Six workshops",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "27 speakers",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "Two days",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "Single track",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "Themed sessions",
            },
        },
        {
            layout: "MARKDOWN",
            background: {
                url: "/media/assets/disco.jpg",
            },
            content: {
                title: "Two parties",
                markup: `
* #SMOOSH
* Afterparty
        `,
            },
        },
        {
            layout: "REACT",
            content: (React.createElement(SponsorContainer, null,
                React.createElement(ConnectedGoldSponsor, { conferenceId: "react-finland-2019", index: 0 }))),
        },
        {
            layout: "REACT",
            content: (React.createElement(SponsorContainer, null,
                React.createElement(ConnectedGoldSponsor, { conferenceId: "react-finland-2019", index: 1 }))),
        },
        {
            layout: "REACT",
            content: (React.createElement(SponsorContainer, null,
                React.createElement(ConnectedGoldSponsor, { conferenceId: "react-finland-2019", index: 2 }))),
        },
        {
            layout: "REACT",
            content: (React.createElement(SilverSponsorsContainer, null,
                React.createElement(ConnectedSilverSponsors, { conferenceId: "react-finland-2019" }))),
        },
        {
            layout: "REACT",
            content: (React.createElement(SponsorsContainer, null,
                React.createElement(ConnectedBronzeSponsors, { conferenceId: "react-finland-2019" }))),
        },
        {
            layout: "REACT",
            content: (React.createElement(PartnersContainer, null,
                React.createElement(ConnectedPartners, { conferenceId: "react-finland-2019" }))),
        },
        {
            layout: "TITLE",
            content: {
                title: "Remember to join the conference Slack",
            },
        },
        {
            layout: "MARKDOWN",
            content: {
                title: "Code of Conduct",
                markup: `
* Berlin Code of Conduct
* Report to info@react-finland.fi
* Or to any org with RF logo shirt`,
            },
        },
        {
            layout: "IMAGE",
            content: {
                url: "/media/assets/red-strings.jpg",
            },
        },
        {
            layout: "TITLE",
            content: {
                title: "#ReactFinland",
            },
        },
    ];
    return titleSlide;
}
exports.default = IntroTemplate;
//# sourceMappingURL=IntroTemplate.js.map