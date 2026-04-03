import { parse } from "csv-parse/sync"; // TODO: Use the async version instead?
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { Conference } from "../Conference";
import { Contact, ContactType } from "../Contact";

async function loadAttendees(conference: Conference, csvPath: string) {
  if (existsSync(csvPath)) {
    return convertData(
      getSponsors(conference),
      parse(await readFile(csvPath, { encoding: "utf8" }), {
        columns: true,
        skip_empty_lines: true,
      })
    );
  }

  return [];
}

function getSponsors(conference: Conference): Contact[] {
  return conference.sponsors.filter(
    sponsor => !sponsor.type.includes(ContactType.PARTNER)
  );
}

function convertData(sponsors: Contact[], tickets): Contact[] {
  return tickets
    .map(row => mapObjectValues(row, v => (v === "-" ? null : v)))
    .filter((ticket) => !ticket["Void Status"] && !ticket.Ticket.startsWith("Workshop only"))
    .map((row) => ({
      name: getName(row),
      firstName: getFirstName(row),
      lastName: getLastName(row),
      company: getCompany(row),
      about: "", // TODO
      image: { url: "" }, // TODO
      location: {}, // TODO
      type: [
        getType(
          sponsors,
          row.Ticket || row["Ticket Type"],
          getCompany(row),
          row.Email
        ),
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
  return upperFirst(row["Ticket First Name"] || row["First Name"]);
}

function getLastName(row) {
  return upperFirst(row["Ticket Last Name"] || row["Last Name"]);
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

function getType(
  sponsors: Contact[],
  type: string,
  company: string,
  email: string
) {
  if (isSponsor(sponsors, type, company, email)) {
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
function isSponsor(
  sponsors: Contact[],
  type: string,
  company: string,
  email: string
) {
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

function getTwitter(twitter): string {
  if (twitter && twitter.split(" ").length > 1) {
    return "";
  }

  return trimPrefix(twitter || "", "'@");
}

function mapObjectValues(row, mapValue) {
  return Object.fromEntries(
    Object.entries(row).map(([key, value]) => [key, mapValue(value)])
  );
}

function upperFirst(value = ""): string {
  if (!value) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function trimPrefix(value: string, characters: string): string {
  let index = 0;

  while (index < value.length && characters.includes(value[index])) {
    index += 1;
  }

  return value.slice(index);
}

export default loadAttendees;
