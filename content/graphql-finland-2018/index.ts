import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import * as schedules from "./schedules";
import * as sessions from "./sessions";
import * as tickets from "./tickets";

const partners = [
  allSponsors.agentconf,
  allSponsors.apiops,
  allSponsors.designsystemslondon,
  allSponsors.elisa,
  allSponsors.halfstack,
  allSponsors.osaango,
  allSponsors.postgraphile,
  allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactjsday,
  allSponsors.reactnativeeu,
  allSponsors.survivejs,
  allSponsors.webexpo,
  allSponsors.yglfkyiv,
  allSponsors.zapier,
];
const goldSponsors = [allSponsors.digia, allSponsors.gofore];
const silverSponsors = [allSponsors.alma];
const bronzeSponsors = [
  allSponsors.amazon,
  allSponsors.apollo,
  allSponsors.codento,
  allSponsors.gatsby,
  allSponsors.hasura,
  allSponsors.prisma,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

export default {
  id: "graphql-finland-2018",
  name: "GraphQL Finland 2018",
  year: "2018",
  websiteUrl: "https://graphql-finland.fi/",
  locations: [locations],
  organizers: [
    people["aleksi-pousar"],
    people["harri-maatta"],
    people["juho-vepsalainen"],
    people["mikhail-novikov"],
    people["samuli-hakoniemi"],
    people["tuuli-tiilikainen"],
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
