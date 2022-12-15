"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locations = __importStar(require("../locations"));
// import * as people from "../people";
const allSponsors = __importStar(require("../sponsors"));
const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const conferenceDate = "2019-09-19";
const schedule = {
    day: conferenceDate,
    description: "Conference day",
    location: locations.ankerSaal,
    intervals: [],
};
const conference = {
    id: "halfstack-vienna-2019",
    series: "halfstack",
    name: "HalfStack 2019",
    organizer: allSponsors.halfstack,
    slogan: "One day, single track, fun with JavaScript",
    year: "2019",
    startDate: conferenceDate,
    endDate: conferenceDate,
    websiteUrl: "https://halfstackconf.com/vienna/",
    locations: [locations.ankerSaal],
    mcs: [],
    organizers: [],
    schedules: [schedule],
    sponsors,
    partners,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    platformSponsors: [],
};
exports.default = conference;
//# sourceMappingURL=index.js.map