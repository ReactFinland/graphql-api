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
    allSponsors.gqlhongkong,
];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "graphql-finland-2020",
    series: "GraphQL Finland",
    name: "GraphQL Finland 2020",
    organizer: allSponsors.graphqlFinland,
    slogan: "Learn More about GraphQL, Explore Finland.",
    year: "2018",
    startDate: "2020-09-24",
    endDate: "2020-09-25",
    websiteUrl: "https://graphql-finland.fi/",
    locations: [locations.paasitorni],
    organizers: [
        people.aleksiPousar,
        people.harriMaatta,
        people.juhoVepsalainen,
        people.mikhailNovikov,
        people.samuliHakoniemi,
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