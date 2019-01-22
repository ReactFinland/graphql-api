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
    allSponsors.jscamp,
    allSponsors.jskongress,
    allSponsors.reasonconf,
    allSponsors.reactindia,
    allSponsors.reactnewyork,
    allSponsors.reactnorway,
    allSponsors.survivejs,
    allSponsors.typeof,
    allSponsors.zapier,
    allSponsors.reactalicante,
    allSponsors.reactdayberlin,
    allSponsors.reactnativeeu,
    allSponsors.webexpo,
];
const goldSponsors = [
    allSponsors.gofore,
    allSponsors.futurice,
    allSponsors.digia,
];
const silverSponsors = [
    allSponsors.alma,
    allSponsors.elisa,
    allSponsors.nightingale,
    allSponsors.reaktor,
    allSponsors.solita,
];
const bronzeSponsors = [
    allSponsors.codento,
    allSponsors.columbiaroad,
    allSponsors.formidable,
    allSponsors.vincit,
    allSponsors.wunder,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "react-finland-2019",
    name: "React Finland 2019",
    year: "2019",
    websiteUrl: "https://react-finland.fi/",
    locations: [locations.paasitorni],
    mcs: [people.janiEvakallio, people.saraVieira],
    organizers: [
        people.aleksiPousar,
        people.harriMaatta,
        people.juhoVepsalainen,
        people.mikhailNovikov,
        people.samuliHakoniemi,
        people.toniRistola,
        people.tuuliTiilikainen,
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