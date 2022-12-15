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
/*
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
*/
];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const platformSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors, platformSponsors);
const conference = {
    id: "future-frontend-2023",
    series: "Future Frontend",
    name: "Future Frontend",
    organizer: allSponsors.toska,
    slogan: "The future of frontend reimagined",
    year: "2023",
    startDate: "2023-06-05",
    endDate: "2023-06-09",
    websiteUrl: "https://future-frontend.com/",
    // TODO: Resolve locations based on data
    locations: [],
    mcs: [],
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