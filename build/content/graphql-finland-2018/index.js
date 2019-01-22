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
    allSponsors.apiops,
    allSponsors.designsystemslondon,
    allSponsors.elisa,
    allSponsors.halfstack,
    allSponsors.osaango,
    allSponsors.postgraphile,
    allSponsors.reactalicante,
    allSponsors.reactdayberlin,
    allSponsors.reactjsday,
    allSponsors.reactnativeeu,
    allSponsors.survivejs,
    allSponsors.webexpo,
    allSponsors.yglfkyiv,
    allSponsors.zapier,
];
const goldSponsors = [allSponsors.digia, allSponsors.gofore];
const silverSponsors = [allSponsors.alma];
const bronzeSponsors = [
    allSponsors.amazon,
    allSponsors.apollo,
    allSponsors.codento,
    allSponsors.gatsby,
    allSponsors.hasura,
    allSponsors.prisma,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "graphql-finland-2018",
    name: "GraphQL Finland 2018",
    year: "2018",
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