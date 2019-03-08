import parse from "csv-parse/lib/sync"; // TODO: Use the async version instead?
import * as fs from "fs";
import endsWith from "lodash/endsWith";
import filter from "lodash/filter";
import map from "lodash/map";
import mapValues from "lodash/mapValues";
import trimStart from "lodash/trimStart";
import upperFirst from "lodash/upperFirst";
import { Conference } from "../Conference";
import { Contact, ContactType } from "../Contact";

function loadAttendees(conference: Conference, csvPath: string) {
  if (fs.statSync(csvPath)) {
    return convertData(
      getSponsorNames(conference),
      parse(fs.readFileSync(csvPath, { encoding: "utf8" }), {
        columns: true,
        skip_empty_lines: true,
      })
    );
  }

  return [];
}

function getSponsorNames(conference: Conference): string[] {
  return conference.sponsors.map(
    sponsor => new URL(sponsor.social.homepage).hostname
  );
}

function convertData(sponsorNames, tickets): Contact[] {
  return map(
    filter(
      map(tickets, row => mapValues(row, v => (v === "-" ? null : v))),
      t => !t["Void Status"]
    ),
    row => ({
      name: getName(row),
      company: getCompany(row),
      about: "", // TODO
      image: { url: "" }, // TODO
      location: {}, // TODO
      type: [
        getType(sponsorNames, row.Ticket || row["Ticket Type"], row.Email),
      ],
      social: {
        twitter: getTwitter(row.Twitter || row["What's your Twitter handle?"]),
      },
    })
  );
}

function getName(row) {
  const firstName = upperFirst(row["Ticket First Name"] || row["First Name"]);
  const lastName = upperFirst(row["Ticket Last Name"] || row["Last Name"]);

  return `${firstName} ${lastName}`;
}

function getCompany(row): string {
  const name = getName(row);
  const companyName = row["Ticket Company Name"] || row["Order Company Name"];

  // Remove company if it's same as the name
  if (name === companyName || !companyName) {
    return "";
  }

  return companyName.trim();
}

function getType(sponsorNames, type: string, email: string) {
  if (isSponsor(sponsorNames, email)) {
    return ContactType.SPONSOR;
  }

  switch (type) {
    case "Organizer": {
      return ContactType.ORGANIZER;
    }
    case "Volunteer": {
      return ContactType.ORGANIZER;
    }
    case "Sponsor": {
      return ContactType.SPONSOR;
    }
    case "Speaker": {
      return ContactType.SPEAKER;
    }
    default:
      return ContactType.ATTENDEE;
  }
}
function isSponsor(sponsorNames: string[], email: string) {
  return sponsorNames.some(pattern => endsWith(email, pattern));
}

function getTwitter(twitter): string {
  return trimStart(twitter, "'@") || "";
}

export default loadAttendees;
