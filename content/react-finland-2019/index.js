const people = require("../people");
const locations = require("../locations");

const allSponsors = require("../sponsors");
const partners = [allSponsors.reactindia];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

module.exports = {
  id: "react-finland-2019",
  name: "React Finland 2019",
  year: "2019",
  websiteUrl: "https://react-finland.fi/",
  locations: [locations.paasitorni],
  organizers: [
    people["aleksi-pousar"],
    people["harri-maatta"],
    people["juho-vepsalainen"],
    people["mikhail-novikov"],
    people["samuli-hakoniemi"],
    people["tuuli-tiilikainen"],
  ],
  schedules: require("./schedules"),
  sessions: require("./sessions"),
  tickets: require("./tickets"),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};
