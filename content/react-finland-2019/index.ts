import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";
import * as talks from "./talks";
import * as workshops from "./workshops";

const partners = [
  allSponsors.agentconf,
  allSponsors.halfstack,
  allSponsors.jscamp,
  allSponsors.jskongress,
  allSponsors.koodiasuomesta,
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
  allSponsors.codento,
  allSponsors.columbiaroad,
  allSponsors.fb,
  allSponsors.formidable,
  allSponsors.ginetta,
  allSponsors.netum,
  allSponsors.meiko,
  allSponsors.vincit,
  allSponsors.wunder,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

const conference: Conference = {
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
  talks: Object.values(talks),
  workshops: Object.values(workshops),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

export default conference;
