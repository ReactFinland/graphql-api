const resolve = require("../resolve");
const people = require("./people");

const allSponsors = require("../sponsors");
const partners = resolve.socialLinks([
  allSponsors.reactdayberlin,
  allSponsors.reactjsday,
  allSponsors.reactnativeeu,
  allSponsors.survivejs,
]);
const goldSponsors = resolve.socialLinks([]);
const silverSponsors = resolve.socialLinks([]);
const bronzeSponsors = resolve.socialLinks([]);
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
