import parse from "csv-parse/lib/sync"; // TODO: Use the async version instead?
import * as fs from "fs-extra";
import endsWith from "lodash/endsWith";
import filter from "lodash/filter";
import map from "lodash/map";
import mapValues from "lodash/mapValues";
import trimStart from "lodash/trimStart";
import upperFirst from "lodash/upperFirst";
import toTitleCase from "to-title-case";
import { Conference } from "../Conference";
import { Contact, ContactType } from "../Contact";

async function loadAttendees(conference: Conference, csvPath: string) {
  if (fs.existsSync(csvPath)) {
    return convertData(
      getSponsorNames(conference),
      parse(await fs.readFile(csvPath, { encoding: "utf8" }), {
        columns: true,
        skip_empty_lines: true,
      })
    );
  }

  return [];
}

function getSponsorNames(conference: Conference): string[] {
  return conference.sponsors.map(
    sponsor => new URL(sponsor.social.homepage || "").hostname
  );
}

function convertData(sponsorNames, tickets): Contact[] {
  return map(
    filter(
      map(tickets, row => mapValues(row, v => (v === "-" ? null : v))),
      t => !t["Void Status"] && !t.Ticket.startsWith("Workshop only")
    ),
    row => ({
      name: getName(row),
      firstName: getFirstName(row),
      lastName: getLastName(row),
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
  return `${getFirstName(row)} ${getLastName(row)}`;
}

function getFirstName(row) {
  return toTitleCase(upperFirst(row["Ticket First Name"] || row["First Name"]));
}

function getLastName(row) {
  return toTitleCase(upperFirst(row["Ticket Last Name"] || row["Last Name"]));
}

function getCompany(row): string {
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

function getType(sponsorNames, type: string, email: string) {
  if (isSponsor(sponsorNames, email)) {
    return ContactType.SPONSOR;
  }

  switch (type) {
    case "Press": {
      return ContactType.PRESS;
    }
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
  if (twitter && twitter.split(" ").length > 1) {
    return "";
  }

  return trimStart(twitter, "'@") || "";
}

export default loadAttendees;
