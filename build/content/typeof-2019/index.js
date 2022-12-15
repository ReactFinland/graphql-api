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
const Contact_1 = require("../../server/schema/Contact");
const Session_1 = require("../../server/schema/Session");
const people = __importStar(require("../people"));
const allSponsors = __importStar(require("../sponsors"));
const data_json_1 = __importDefault(require("./data.json"));
const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const conference = {
    id: "typeof-2019",
    series: "typeof",
    name: "typeof 2019",
    organizer: allSponsors.typeof,
    slogan: "web craftsmanship conference",
    year: "2019",
    startDate: "2019-04-27",
    endDate: "2019-04-29",
    websiteUrl: "https://typeofconf.com/",
    locations: [],
    mcs: [],
    organizers: [],
    schedules: resolveSchedules(data_json_1.default),
    sponsors,
    partners,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    platformSponsors: [],
};
// TODO: Attach images from the site (needs improved data fetcher)
function resolveSchedules({ schedules, speakers }) {
    return schedules.map((schedule) => {
        return Object.assign(Object.assign({}, schedule), { intervals: schedule.intervals.map((interval) => {
                return Object.assign(Object.assign({}, interval), { sessions: interval.sessions.map((session) => {
                        return Object.assign(Object.assign({}, session), { 
                            // TODO: Not correct but good enough for a demo
                            type: Session_1.SessionType.TALK, people: session.people &&
                                session.people.map((person) => {
                                    const existingPerson = Object.values(people).find(({ name }) => {
                                        return name === person.name;
                                    }) ||
                                        speakers.find(({ name }) => {
                                            return name === person.name;
                                        });
                                    return Object.assign(Object.assign({ about: "", type: [Contact_1.ContactType.SPEAKER], social: {}, location: {} }, person), existingPerson);
                                }) });
                    }) });
            }) });
    });
}
exports.default = conference;
//# sourceMappingURL=index.js.map