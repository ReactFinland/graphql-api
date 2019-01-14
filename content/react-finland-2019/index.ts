import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import * as schedules from "./schedules";
import * as sessions from "./sessions";

const partners = [
  allSponsors.agentconf,
  allSponsors.halfstack,
  allSponsors.jscamp,
  allSponsors.reasonconf,
  allSponsors.reactindia,
  allSponsors.reactnewyork,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  allSponsors.typeof,
  allSponsors.zapier,
  allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactnativeeu,
  allSponsors.webexpo,
];
const goldSponsors = [
  allSponsors.gofore,
  allSponsors.futurice,
  allSponsors.digia,
];
const silverSponsors = [
  allSponsors.alma,
  allSponsors.elisa,
  allSponsors.nightingale,
  allSponsors.reaktor,
  allSponsors.solita,
];
const bronzeSponsors = [
  allSponsors.columbiaroad,
  allSponsors.formidable,
  allSponsors.vincit,
  allSponsors.wunder,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

export default {
  id: "react-finland-2019",
  name: "React Finland 2019",
  year: "2019",
  websiteUrl: "https://react-finland.fi/",
  locations: [locations.paasitorni],
  mcs: [people.janiEvakallio, people.saraVieira],
  organizers: [
    people.aleksiPousar,
    people.harriMaatta,
    people.juhoVepsalainen,
    people.mikhailNovikov,
    people.samuliHakoniemi,
    people.toniRistola,
    people.tuuliTiilikainen,
  ],
  schedules,
  sessions,
  tickets: {},
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};
