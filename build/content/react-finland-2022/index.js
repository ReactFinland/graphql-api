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
const partners = [
    allSponsors.divriots,
    allSponsors.bejs,
    allSponsors.halfstack,
    allSponsors.koodiasuomesta,
    allSponsors.reactnewyork,
    allSponsors.reactnorway,
    allSponsors.survivejs,
    allSponsors.reactbrussels,
    allSponsors.reactindia,
    allSponsors.reactnativeeu,
    allSponsors.reactjsday,
    allSponsors.webexpo,
];
const goldSponsors = [allSponsors.relex];
const silverSponsors = [
    allSponsors.elisa,
    allSponsors.nitor,
    allSponsors.gofore,
    allSponsors.supermetrics,
];
const bronzeSponsors = [
    allSponsors.moonhighway,
    allSponsors.solita,
    allSponsors.huuva,
    allSponsors.knowit,
    allSponsors.utopia,
    allSponsors.alma,
];
const platformSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors, platformSponsors);
const conference = {
    id: "react-finland-2022",
    series: "React Finland",
    name: "React Finland 2022",
    organizer: allSponsors.reactFinland,
    slogan: "Learn More about React, Explore Finland",
    year: "2022",
    startDate: "2022-09-12",
    endDate: "2022-09-16",
    websiteUrl: "https://react-finland.fi/",
    // TODO: Resolve locations based on data
    locations: [locations.paasitorni, locations.babylonHelsinki],
    mcs: [people.janiEvakallio, people.saraVieira],
    organizers: [
        people.aleksiPousar,
        people.eemeliAro,
        people.harriMaatta,
        people.juhoVepsalainen,
        people.toniRistola,
        people.tuuliTiilikainen,
    ],
    schedules: schedules_1.default,
    sponsors,
    partners,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    platformSponsors,
};
exports.default = conference;
//# sourceMappingURL=index.js.map