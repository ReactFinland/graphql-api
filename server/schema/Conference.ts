import conferences from "../conferences";
import { Contact, ContactType } from "./Contact";
import { Location } from "./Location";
import { Schedule } from "./Schedule";
import { Session } from "./Session";
import { Series } from "./Series";

export interface Conference {
  id: string;
  series: string | Series;
  name: string;
  organizer: Contact;
  year: string;
  startDate: string;
  endDate: string;
  slogan: string;
  websiteUrl: string;
  locations?: Location[];
  organizers: Contact[];
  mcs?: Contact[];
  partners?: Contact[];
  sponsors: Contact[];
  goldSponsors?: Contact[];
  silverSponsors?: Contact[];
  bronzeSponsors?: Contact[];
  platformSponsors?: Contact[];
  schedules: Schedule[];
  allSpeakers?: Contact[];
  speakers?: Contact[];
  keynoteSpeakers?: Contact[];
  fullTalkSpeakers?: Contact[];
  lightningTalkSpeakers?: Contact[];
  panelOnlySpeakers?: Contact[];
  workshopInstructors?: Contact[];
  talks?: Session[];
  workshops?: Session[];
}

export function getConference(id: string): Conference {
  if (!conferences[id]) {
    throw new Error("Unknown conference");
  }

  const conference = conferences[id];

  return {
    ...conference,
    sponsors: attachSponsorTypes(conference, conference.sponsors),
  };
}

function attachSponsorTypes(
  conference: Conference,
  sponsors: Conference["sponsors"]
) {
  const {
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    platformSponsors,
    partners,
  } = conference;

  return sponsors.map(({ name, type, ...rest }) => ({
    ...rest,
    name,
    type: [
      ...type,
        isSponsor(goldSponsors, name, ContactType.GOLD_SPONSOR),
        isSponsor(silverSponsors, name, ContactType.SILVER_SPONSOR),
        isSponsor(bronzeSponsors, name, ContactType.BRONZE_SPONSOR),
        isSponsor(platformSponsors, name, ContactType.PLATFORM_SPONSOR),
        isSponsor(partners, name, ContactType.PARTNER)
      ].filter((contactType): contactType is ContactType => Boolean(contactType)),
  }));
}

function isSponsor(
  sponsors: Conference["sponsors"] | undefined,
  sponsorName: string,
  contactType: ContactType
) {
  return sponsors?.find(({ name }) => sponsorName === name) ? contactType : null;
}
