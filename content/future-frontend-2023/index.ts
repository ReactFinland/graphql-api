import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  allSponsors.bejs,
  // allSponsors.halfstack,
  allSponsors.koodiasuomesta,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  allSponsors.nodecongress,
  /*
  allSponsors.reactbrussels,
  allSponsors.reactindia,
  allSponsors.reactnativeeu,
  allSponsors.reactjsday,
  */
  allSponsors.webexpo,
  allSponsors.nitor,
  allSponsors.stickermule
];
const goldSponsors = [];
const silverSponsors = [
  allSponsors.gofore,
  allSponsors.elisa,
  allSponsors.knowit,
];
const bronzeSponsors = [allSponsors.alma];
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
  name: "Future Frontend 2023",
  organizer: allSponsors.toska,
  slogan: "The future of frontend reimagined",
  year: "2023",
  startDate: "2023-06-06",
  endDate: "2023-06-09",
  websiteUrl: "https://futurefrontend.com/",
  // TODO: Resolve locations based on data
  locations: [locations.porssitalo],
  mcs: [people.janiEvakallio, people.tuuliTiilikainen],
  organizers: [
    people.aleksiPousar,
    people.eemeliAro,
    people.harriMaatta,
    people.juhoVepsalainen,
    people.toniRistola,
    people.tuuliTiilikainen,
    people.juhis,
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
