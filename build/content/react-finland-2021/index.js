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
    allSponsors.a11Yclub,
    allSponsors.agentconf,
    // allSponsors.bangalore,
    allSponsors.dna325,
    allSponsors.halfstack,
    allSponsors.jscamp,
    allSponsors.jskongress,
    allSponsors.koodiasuomesta,
    // allSponsors.reactindia,
    allSponsors.reactnewyork,
    allSponsors.reactnorway,
    allSponsors.survivejs,
    allSponsors.reactbrussels,
    // allSponsors.stickermule,
    allSponsors.reactjsgirls,
    allSponsors.reactnativeeu,
    allSponsors.reactjsday,
    allSponsors.reactsummit,
    allSponsors.webexpo,
    // allSponsors.techEvents,
    allSponsors.dynatrace,
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
    allSponsors.relex,
    allSponsors.vincit,
    allSponsors.wunder,
    allSponsors.knowit,
    allSponsors.netum,
    allSponsors.nitor,
];
const platformSponsors = [allSponsors.brella];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors, platformSponsors);
const conference = {
    id: "react-finland-2021",
    series: "React Finland",
    name: "React Finland 2021",
    organizer: allSponsors.reactFinland,
    slogan: "Learn More about React, Explore Finland",
    year: "2021",
    startDate: "2020-08-30",
    endDate: "2020-09-03",
    websiteUrl: "https://react-finland.fi/",
    // TODO: Resolve locations based on data
    locations: [],
    mcs: [people.juhoVepsalainen, people.saraVieira, people.manjula],
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