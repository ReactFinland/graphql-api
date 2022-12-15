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
// import * as locations from "../locations";
const people = __importStar(require("../people"));
const allSponsors = __importStar(require("../sponsors"));
const schedules_1 = __importDefault(require("./schedules"));
const partners = [
    allSponsors.agentconf,
    allSponsors.bangalore,
    allSponsors.geekle,
    allSponsors.halfstack,
    allSponsors.jscamp,
    allSponsors.jskongress,
    // allSponsors.koodiasuomesta,
    // allSponsors.reactindia,
    allSponsors.reactnewyork,
    allSponsors.reactnorway,
    allSponsors.survivejs,
    // allSponsors.typeof,
    // allSponsors.stickermule,
    // allSponsors.reactalicante,
    allSponsors.reactdayberlin,
    allSponsors.reactjsgirls,
    allSponsors.reactnativeeu,
    allSponsors.reactjsday,
    allSponsors.reactsummit,
    allSponsors.rlc,
    allSponsors.webexpo,
];
const goldSponsors = [
    allSponsors.gofore,
    allSponsors.futurice,
    allSponsors.smartly,
];
const silverSponsors = [
    allSponsors.digia,
    allSponsors.elisa,
    allSponsors.alma,
    allSponsors.columbiaroad,
];
const bronzeSponsors = [
    allSponsors.quentic,
    allSponsors.vincit,
    allSponsors.wunder,
    allSponsors.knowit,
    allSponsors.netum,
];
const platformSponsors = [allSponsors.brella];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors, platformSponsors);
const conference = {
    id: "react-finland-2020",
    series: "React Finland",
    name: "React Finland 2020",
    organizer: allSponsors.reactFinland,
    slogan: "Learn More about React, Explore Finland",
    year: "2020",
    startDate: "2020-05-25",
    endDate: "2020-05-28",
    websiteUrl: "https://react-finland.fi/",
    // TODO: Resolve locations based on data
    locations: [],
    // mcs: [people.janiEvakallio, people.saraVieira],
    organizers: [
        people.aleksiPousar,
        people.eemeliAro,
        people.harriMaatta,
        people.juhoVepsalainen,
        people.mikhailNovikov,
        people.samuliHakoniemi,
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