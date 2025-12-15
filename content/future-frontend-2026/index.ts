import { Conference } from "../../server/schema/Conference";
import { Contact } from "../../server/schema/Contact";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners: Contact[] = [
  // allSponsors.bejs,
  // allSponsors.dojs,
  // allSponsors.halfstack,
  // allSponsors.digitalExpert,
  // allSponsors.koodiasuomesta,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  // allSponsors.reactsummit,
  // allSponsors.jsn,
  // allSponsors.rp,
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
  allSponsors.reactparis,
  // allSponsors.jsconfbp,
  // allSponsors.jsday,
  // allSponsors.frankenjs,
  // allSponsors.friikit,
  // allSponsors.yle,
  // allSponsors.nitor,
  // allSponsors.vihat,
  // allSponsors.twir,
  // allSponsors.hbc,
];
const goldSponsors: Contact[] = [
  // allSponsors.digia
];
const silverSponsors: Contact[] = [
  // allSponsors.smartly,
  // allSponsors.wunderdog,
  // allSponsors.alma,
  // allSponsors.backscreen,
  // allSponsors.evitec,
  // allSponsors.upcloud,
  // allSponsors.gofore,
  // allSponsors.elisa,
  // allSponsors.knowit,
  allSponsors.ohjelmistofriikit,
];
const bronzeSponsors: Contact[] = [
  // allSponsors.knowit,
  // allSponsors.toddle,
  // allSponsors.columbiaroad,
  // allSponsors.wonna,
];
const platformSponsors: Contact[] = [];
const sponsors: Contact[] = partners.concat(
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  platformSponsors
);

const conference: Conference = {
  id: "future-frontend-2026",
  series: "Future Frontend", // TODO: Consider deprecating
  name: "Future Frontend 2026",
  organizer: allSponsors.toska,
  slogan: "The future of frontend reimagined",
  year: "2026",
  startDate: "2026-06-08",
  endDate: "2026-06-09",
  websiteUrl: "https://futurefrontend.com/",
  // TODO: Resolve locations based on data
  locations: [locations.dipoli],
  mcs: [people.henrik, people.tuuliTiilikainen],
  organizers: [
    people.juhoVepsalainen,
    people.eemeliAro,
    people.harriMaatta,
    people.toniRistola,
    people.tuuliTiilikainen,
    people.juhis,
    people.emilia,
    people.jussi,
    people.juhoLehtinen,
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
