const people = require("./people");

const allSponsors = require("../sponsors");
const partners = [
  allSponsors.agentconf,
  allSponsors.halfstack,
  allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactjsday,
  allSponsors.reactnativeeu,
  allSponsors.survivejs,
  allSponsors.webexpo,
  allSponsors.yglfkyiv,
  allSponsors.zapier,
];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

module.exports = {
  id: "graphql-finland-2018",
  name: "GraphQL Finland 2018",
  year: "2018",
  websiteUrl: "https://graphql-finland.fi/",
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
