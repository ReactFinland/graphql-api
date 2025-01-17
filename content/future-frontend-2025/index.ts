import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  // allSponsors.bejs,
  // allSponsors.dojs,
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
  // allSponsors.glorium,
  // allSponsors.grusp,
  // allSponsors.kongres,
  // allSponsors.reactparis,
  // allSponsors.jsconfbp,
  allSponsors.jsday,
  // allSponsors.frankenjs,
  // allSponsors.friikit,
  // allSponsors.yle,
  // allSponsors.nitor,
  // allSponsors.vihat,
];
const goldSponsors = [
  // allSponsors.digia
];
const silverSponsors = [
  // allSponsors.evitec,
  // allSponsors.upcloud,
  // allSponsors.gofore,
  // allSponsors.elisa,
  // allSponsors.knowit,
];
const bronzeSponsors = [
  allSponsors.smartly,
  // allSponsors.alma,
  // allSponsors.knowit,
  // allSponsors.toddle,
  // allSponsors.columbiaroad,
];
const platformSponsors = [];
const sponsors = partners.concat(
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors
);

const conference: Conference = {
  id: "future-frontend-2025",
  series: "Future Frontend", // TODO: Consider deprecating
  name: "Future Frontend 2025",
  organizer: allSponsors.toska,
  slogan: "The future of frontend reimagined",
  year: "2025",
  startDate: "2025-05-27",
  endDate: "2025-05-28",
  websiteUrl: "https://futurefrontend.com/",
  // TODO: Resolve locations based on data
  locations: [locations.dipoli],
  mcs: [people.janiEvakallio, people.tuuliTiilikainen],
  organizers: [
    people.juhoVepsalainen,
    people.eemeliAro,
    people.harriMaatta,
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
