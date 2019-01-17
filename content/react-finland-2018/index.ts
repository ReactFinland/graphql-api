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
  allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactfest,
  allSponsors.reactjsday,
  allSponsors.reactnativeeu,
  allSponsors.reasonconf,
  allSponsors.survivejs,
  allSponsors.webexpo,
  allSponsors.zapier,
];
const goldSponsors = [allSponsors.gofore, allSponsors.solita];
const silverSponsors = [
  allSponsors.elisa,
  allSponsors.motley,
  allSponsors.nitor,
];
const bronzeSponsors = [
  allSponsors.alma,
  allSponsors.geniem,
  allSponsors.rohea,
  allSponsors.verkkokauppa,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

const conference: Conference = {
  id: "react-finland-2018",
  name: "React Finland 2018",
  year: "2018",
  websiteUrl: "https://react-finland.fi/",
  locations: [locations.elisaAppelsiini, locations.valkoinenSali],
  organizers: [
    people.aarniKoskela,
    people.aleksiPousar,
    people.harriMaatta,
    people.joniNevalainen,
    people.juhoVepsalainen,
    people.mikhailNovikov,
    people.samuliHakoniemi,
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
