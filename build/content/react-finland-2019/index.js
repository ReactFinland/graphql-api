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
    allSponsors.agentconf,
    allSponsors.halfstack,
    allSponsors.jscamp,
    allSponsors.jskongress,
    allSponsors.koodiasuomesta,
    allSponsors.reasonconf,
    allSponsors.reactindia,
    allSponsors.reactnewyork,
    allSponsors.reactnorway,
    allSponsors.survivejs,
    allSponsors.typeof,
    allSponsors.zapier,
    allSponsors.stickermule,
    allSponsors.reactalicante,
    allSponsors.reactdayberlin,
    allSponsors.reactjsgirls,
    allSponsors.reactnativeeu,
    allSponsors.reactjsday,
    allSponsors.webexpo,
    allSponsors.techEvents,
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
    allSponsors.fb,
    allSponsors.formidable,
    allSponsors.gatsby,
    allSponsors.ginetta,
    allSponsors.netum,
    allSponsors.meiko,
    allSponsors.vincit,
    allSponsors.verkkokauppa,
    allSponsors.wunder,
    allSponsors.zeroplusx,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "react-finland-2019",
    series: "React Finland",
    name: "React Finland 2019",
    organizer: allSponsors.reactFinland,
    slogan: "Learn More about React, Explore Finland.",
    year: "2019",
    startDate: "2019-04-24",
    endDate: "2019-04-26",
    websiteUrl: "https://react-finland.fi/",
    // TODO: Resolve locations based on data
    locations: [locations.paasitorni, locations.tiivistamo],
    mcs: [people.janiEvakallio, people.saraVieira],
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
    platformSponsors: [],
};
exports.default = conference;
//# sourceMappingURL=index.js.map