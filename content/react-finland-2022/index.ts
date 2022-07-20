import { Conference } from "../../server/schema/Conference";
import { Contact } from "../../server/schema/Contact";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  allSponsors.divriots,
  allSponsors.bejs,
  allSponsors.halfstack,
  allSponsors.koodiasuomesta,
  allSponsors.reactnewyork,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  allSponsors.reactbrussels,
  allSponsors.reactindia,
  allSponsors.reactnativeeu,
  allSponsors.reactjsday,
  allSponsors.webexpo,
];
const goldSponsors = [allSponsors.relex];
const silverSponsors = [
  allSponsors.elisa,
  allSponsors.nitor,
  allSponsors.gofore,
  allSponsors.supermetrics,
];
const bronzeSponsors = [
  allSponsors.moonhighway,
  allSponsors.solita,
  allSponsors.huuva,
  allSponsors.knowit,
  allSponsors.utopia,
];
const platformSponsors: Contact[] = [];
const sponsors = partners.concat(
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors
);

const conference: Conference = {
  id: "react-finland-2022",
  series: "React Finland",
  name: "React Finland 2022",
  organizer: allSponsors.reactFinland,
  slogan: "Learn More about React, Explore Finland",
  year: "2022",
  startDate: "2022-09-12",
  endDate: "2022-09-16",
  websiteUrl: "https://react-finland.fi/",
  // TODO: Resolve locations based on data
  locations: [locations.paasitorni],
  mcs: [people.janiEvakallio, people.saraVieira],
  organizers: [
    people.aleksiPousar,
    people.eemeliAro,
    people.harriMaatta,
    people.juhoVepsalainen,
    people.toniRistola,
    people.tuuliTiilikainen,
  ],
  schedules,
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors,
};

export default conference;
