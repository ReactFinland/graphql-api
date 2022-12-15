"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sync_1 = __importDefault(require("csv-parse/lib/sync")); // TODO: Use the async version instead?
const fs = __importStar(require("fs-extra"));
const filter_1 = __importDefault(require("lodash/filter"));
const map_1 = __importDefault(require("lodash/map"));
const mapValues_1 = __importDefault(require("lodash/mapValues"));
const trimStart_1 = __importDefault(require("lodash/trimStart"));
const upperFirst_1 = __importDefault(require("lodash/upperFirst"));
const Contact_1 = require("../Contact");
async function loadAttendees(conference, csvPath) {
    if (fs.existsSync(csvPath)) {
        return convertData(getSponsors(conference), sync_1.default(await fs.readFile(csvPath, { encoding: "utf8" }), {
            columns: true,
            skip_empty_lines: true,
        }));
    }
    return [];
}
function getSponsors(conference) {
    return conference.sponsors.filter(sponsor => !sponsor.type.includes(Contact_1.ContactType.PARTNER));
}
function convertData(sponsors, tickets) {
    return map_1.default(filter_1.default(map_1.default(tickets, row => mapValues_1.default(row, v => (v === "-" ? null : v))), t => !t["Void Status"] && !t.Ticket.startsWith("Workshop only")), row => ({
        name: getName(row),
        firstName: getFirstName(row),
        lastName: getLastName(row),
        company: getCompany(row),
        about: "",
        image: { url: "" },
        location: {},
        type: [
            getType(sponsors, row.Ticket || row["Ticket Type"], getCompany(row), row.Email),
        ],
        social: {
            twitter: getTwitter(row.Twitter || row["What's your Twitter handle?"]),
        },
    }));
}
function getName(row) {
    return `${getFirstName(row)} ${getLastName(row)}`;
}
function getFirstName(row) {
    return upperFirst_1.default(row["Ticket First Name"] || row["First Name"]);
}
function getLastName(row) {
    return upperFirst_1.default(row["Ticket Last Name"] || row["Last Name"]);
}
function getCompany(row) {
    const name = getName(row);
    const companyName = row["Ticket Company Name"] || row["Order Company Name"];
    // Remove company if it's same as the name
    if (name === companyName || !companyName) {
        return "";
    }
    return companyName
        .split(". z o.o.")[0]
        .replace(/[ ]+/g, " ")
        .trim();
}
function getType(sponsors, type, company, email) {
    if (isSponsor(sponsors, type, company, email)) {
        return Contact_1.ContactType.SPONSOR;
    }
    switch (type) {
        case "Press": {
            return Contact_1.ContactType.PRESS;
        }
        case "Organizer": {
            return Contact_1.ContactType.ORGANIZER;
        }
        case "Volunteer": {
            return Contact_1.ContactType.ORGANIZER;
        }
        case "Sponsor": {
            return Contact_1.ContactType.SPONSOR;
        }
        case "Speaker": {
            return Contact_1.ContactType.SPEAKER;
        }
        default:
            return Contact_1.ContactType.ATTENDEE;
    }
}
function isSponsor(sponsors, type, company, email) {
    return sponsors.some(({ name, social: { homepage } }) => {
        if (name === company.split(" ")[0]) {
            return true;
        }
        if (email && homepage && homepage.includes(email.split("@")[1])) {
            return true;
        }
        if (company && type.includes(company.split(" ")[0])) {
            return true;
        }
        return type.includes(name);
    });
}
function getTwitter(twitter) {
    if (twitter && twitter.split(" ").length > 1) {
        return "";
    }
    return trimStart_1.default(twitter, "'@") || "";
}
exports.default = loadAttendees;
//# sourceMappingURL=load-attendees.js.map