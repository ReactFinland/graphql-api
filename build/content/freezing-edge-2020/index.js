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
const partners = [allSponsors.reactFinland, allSponsors.survivejs];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);
const conference = {
    id: "freezing-edge-2020",
    series: "Freezing Edge",
    name: "Freezing Edge 2020",
    organizer: allSponsors.reactFinland,
    slogan: "The edge isn't bleeding, it's freezing!",
    year: "2020",
    startDate: "2020-06-01",
    endDate: "2020-06-01",
    websiteUrl: "https://freezing-edge.fi/",
    locations: [locations.amanda],
    mcs: [],
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