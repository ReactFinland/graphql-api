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
const people = __importStar(require("../people"));
const allSponsors = __importStar(require("../sponsors"));
const latestMeetupDate = "2019-06-22";
const schedule = {
    day: latestMeetupDate,
    description: "React meetup",
    location: locations.saeWien,
    intervals: [],
};
const conference = {
    id: "techmovienight",
    series: "techmovienight",
    name: "Tech Movie Night",
    organizer: allSponsors.survivejs,
    slogan: "Tech movies together",
    year: "2019",
    startDate: latestMeetupDate,
    endDate: latestMeetupDate,
    websiteUrl: "https://techmovienight.com/",
    locations: [locations.saeWien],
    mcs: [],
    organizers: [people.juhoVepsalainen],
    schedules: [schedule],
    sponsors: [],
    partners: [
        allSponsors.survivejs,
        allSponsors.halfstack,
        allSponsors.honeypot,
        allSponsors.sae,
    ],
    goldSponsors: [],
    silverSponsors: [],
    bronzeSponsors: [],
    platformSponsors: [],
};
exports.default = conference;
//# sourceMappingURL=index.js.map