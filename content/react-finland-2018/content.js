const people = require("./people");

const allSponsors = require("../sponsors");
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

module.exports = {
  id: "react-finland-2018",
  name: "React Finland 2018",
  year: "2018",
  websiteUrl: "https://react-finland.fi/",
  locations: require("./locations"),
  contacts: people.concat(sponsors),
  schedules: require("./schedules"),
  sessions: require("./sessions"),
  tickets: require("./tickets"),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};
