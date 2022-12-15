"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../server/schema/Session");
const locations = __importStar(require("../locations"));
// import * as people from "../people";
const talks = __importStar(require("./talks"));
const presentationDay = {
    day: "2020-06-01",
    description: "Conference day",
    location: locations.amanda,
    intervals: [
        {
            begin: "08:00",
            end: "09:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and breakfast",
                    description: "You can register later too. There's light breakfast (pastry and coffee) available.",
                },
            ],
        },
        {
            begin: "09:00",
            end: "09:15",
            sessions: [
                {
                    people: [],
                    title: "Opening",
                    description: "Opening the day with Sec Ret, our MC of the day",
                    type: Session_1.SessionType.ORGANIZATIONAL,
                },
            ],
        },
        {
            begin: "09:15",
            end: "10:45",
            title: "Secret",
            sessions: [talks.georgeMandis, talks.kristaJantti],
        },
        {
            begin: "10:45",
            end: "11:15",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee, live long and prosper. Play foosball at the sponsors' lounge.",
                },
            ],
        },
        {
            begin: "11:15",
            end: "12:15",
            title: "Secret",
            sessions: [],
        },
        {
            begin: "12:15",
            end: "13:15",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "Hopefully it's as disappointing as the one you had at previous React Finland",
                },
            ],
        },
        {
            begin: "13:15",
            end: "15:00",
            title: "Let's code an app!",
            sessions: [
                talks.nataliaTepluhina,
                talks.patrickStapfer,
                talks.kenWheeler,
            ],
        },
        {
            begin: "15:00",
            end: "15:30",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee. Again. Take a massage at the sponsors' lounge.",
                },
            ],
        },
        {
            begin: "15:30",
            end: "16:30",
            title: "Secret",
            sessions: [talks.teroParviainen, talks.bodil],
        },
        {
            begin: "16:30",
            end: "17:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Closing ceremonies",
                },
            ],
        },
        {
            begin: "18:00",
            end: "22:00",
            sessions: [
                {
                    type: Session_1.SessionType.PARTY,
                    title: "Afterparty",
                },
            ],
        },
    ],
};
exports.default = [presentationDay];
//# sourceMappingURL=schedules.js.map