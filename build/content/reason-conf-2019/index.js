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
const Session_1 = require("../../server/schema/Session");
const locations = __importStar(require("../locations"));
const people = __importStar(require("../people"));
const allSponsors = __importStar(require("../sponsors"));
const data_json_1 = __importDefault(require("./data.json"));
const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const conference = {
    id: "reason-conf-2019",
    series: "ReasonConf",
    name: "ReasonConf 2019",
    organizer: allSponsors.reasonconf,
    slogan: "The ReasonML conference for web developers & OCaml enthusiasts",
    year: "2019",
    startDate: "2019-04-11",
    endDate: "2019-04-13",
    websiteUrl: "https://www.reason-conf.com/",
    locations: [locations.wuWien],
    mcs: [],
    organizers: [people.andreyOkonetchnikov, people.nikGraf, people.patrickEcker],
    schedules: resolveSchedules(data_json_1.default),
    sponsors,
    partners,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    platformSponsors: [],
};
function resolveSchedules({ schedules, speakers }) {
    return schedules.map((schedule) => {
        return Object.assign(Object.assign({}, schedule), { intervals: schedule.intervals.map((interval) => {
                return Object.assign(Object.assign({}, interval), { sessions: interval.sessions.map((session) => {
                        return Object.assign(Object.assign({}, session), { type: resolveSessionType(session.type), people: resolveSessionPeople(speakers, session.people) });
                    }) });
            }) });
    });
}
// TODO: Likely there's a smarter way to do this mapping
function resolveSessionType(type) {
    switch (type) {
        case Session_1.SessionType.BREAKFAST:
            return Session_1.SessionType.BREAKFAST;
        case Session_1.SessionType.COFFEE_BREAK:
            return Session_1.SessionType.COFFEE_BREAK;
        case Session_1.SessionType.KEYNOTE:
            return Session_1.SessionType.KEYNOTE;
        case Session_1.SessionType.LIGHTNING_TALK:
            return Session_1.SessionType.LIGHTNING_TALK;
        case Session_1.SessionType.LUNCH:
            return Session_1.SessionType.LUNCH;
        case Session_1.SessionType.ORGANIZATIONAL:
            return Session_1.SessionType.ORGANIZATIONAL;
        case Session_1.SessionType.PANEL:
            return Session_1.SessionType.PANEL;
        case Session_1.SessionType.PARTY:
            return Session_1.SessionType.PARTY;
        case Session_1.SessionType.TALK:
            return Session_1.SessionType.TALK;
        case Session_1.SessionType.WORKSHOP:
            return Session_1.SessionType.WORKSHOP;
        default:
            return Session_1.SessionType.ORGANIZATIONAL;
    }
}
function resolveSessionPeople(people, sessionPeople) {
    if (!sessionPeople) {
        return undefined;
    }
    const ret = sessionPeople
        .map((name) => {
        return people.find((person) => person.name === name);
    })
        .filter(Boolean);
    return ret.length > 0 ? ret : undefined;
}
exports.default = conference;
//# sourceMappingURL=index.js.map