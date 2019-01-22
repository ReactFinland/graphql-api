"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locations = __importStar(require("../locations"));
const people = __importStar(require("../people"));
const allSponsors = __importStar(require("../sponsors"));
const schedules_1 = __importDefault(require("./schedules"));
const talks = __importStar(require("./talks"));
const workshops = __importStar(require("./workshops"));
const partners = [
    allSponsors.agentconf,
    allSponsors.halfstack,
    allSponsors.reactalicante,
    allSponsors.reactdayberlin,
    allSponsors.reactfest,
    allSponsors.reactjsday,
    allSponsors.reactnativeeu,
    allSponsors.reasonconf,
    allSponsors.survivejs,
    allSponsors.webexpo,
    allSponsors.zapier,
];
const goldSponsors = [allSponsors.gofore, allSponsors.solita];
const silverSponsors = [
    allSponsors.elisa,
    allSponsors.motley,
    allSponsors.nitor,
];
const bronzeSponsors = [
    allSponsors.alma,
    allSponsors.geniem,
    allSponsors.rohea,
    allSponsors.verkkokauppa,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "react-finland-2018",
    name: "React Finland 2018",
    year: "2018",
    websiteUrl: "https://react-finland.fi/",
    locations: [locations.elisaAppelsiini, locations.valkoinenSali],
    organizers: [
        people.aarniKoskela,
        people.aleksiPousar,
        people.harriMaatta,
        people.joniNevalainen,
        people.juhoVepsalainen,
        people.mikhailNovikov,
        people.samuliHakoniemi,
    ],
    schedules: schedules_1.default,
    talks: Object.values(talks),
    workshops: Object.values(workshops),
    sponsors,
    partners,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
};
exports.default = conference;
//# sourceMappingURL=index.js.map