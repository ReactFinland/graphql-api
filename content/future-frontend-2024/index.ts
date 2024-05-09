import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  allSponsors.bejs,
  allSponsors.dojs,
  // allSponsors.halfstack,
  allSponsors.koodiasuomesta,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  // allSponsors.nodecongress,
  /*
  allSponsors.reactbrussels,
  allSponsors.reactindia,
  allSponsors.reactnativeeu,
  allSponsors.reactjsday,
  */
  // allSponsors.webexpo,
  // allSponsors.columbiaroad,
  // allSponsors.loihdefactor,
  // allSponsors.stickermule,
  allSponsors.glorium,
  allSponsors.grusp,
  allSponsors.kongres,
  allSponsors.reactparis,
  allSponsors.jsconfbp,
  allSponsors.jsday,
  allSponsors.frankenjs,
  allSponsors.friikit,
  allSponsors.yle,
  allSponsors.nitor,
  allSponsors.vihat,
];
const goldSponsors = [];
const silverSponsors = [
  allSponsors.evitec,
  // allSponsors.gofore,
  // allSponsors.elisa,
  // allSponsors.knowit,
];
const bronzeSponsors = [allSponsors.alma, allSponsors.knowit];
const platformSponsors = [];
const sponsors = partners.concat(
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors
);

const conference: Conference = {
  id: "future-frontend-2024",
  series: "Future Frontend", // TODO: Consider deprecating
  name: "Future Frontend 2024",
  organizer: allSponsors.toska,
  slogan: "The future of frontend reimagined",
  year: "2024",
  startDate: "2024-06-13",
  endDate: "2024-06-14",
  websiteUrl: "https://futurefrontend.com/",
  // TODO: Resolve locations based on data
  locations: [locations.paasitorni],
  mcs: [people.janiEvakallio, people.tuuliTiilikainen],
  organizers: [
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
