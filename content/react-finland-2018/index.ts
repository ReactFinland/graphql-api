import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import * as schedules from "./schedules";
import * as sessions from "./sessions";
import * as tickets from "./tickets";

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

export default {
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
  sessions,
  tickets,
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};
