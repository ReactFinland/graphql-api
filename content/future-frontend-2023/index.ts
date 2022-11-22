import { Conference } from "../../server/schema/Conference";
// import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  /*
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
  */
];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const platformSponsors = [];
const sponsors = partners.concat(
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors
);

const conference: Conference = {
  id: "future-frontend-2023",
  series: "Future Frontend", // TODO: Consider deprecating
  name: "Future Frontend",
  organizer: allSponsors.toska,
  slogan: "The future of frontend reimagined",
  year: "2023",
  startDate: "2023-06-05",
  endDate: "2023-06-09",
  websiteUrl: "https://future-frontend.com/",
  // TODO: Resolve locations based on data
  locations: [],
  mcs: [],
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
