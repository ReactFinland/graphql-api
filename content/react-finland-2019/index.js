const people = require("../people");
const locations = require("../locations");

const allSponsors = require("../sponsors");
const partners = [
  allSponsors.halfstack,
  allSponsors.reasonconf,
  allSponsors.reactindia,
  allSponsors.zapier,
];
const goldSponsors = [
  allSponsors.gofore,
  allSponsors.futurice,
  allSponsors.digia,
];
const silverSponsors = [allSponsors.alma];
const bronzeSponsors = [allSponsors.columbiaroad, allSponsors.formidable];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

module.exports = {
  id: "react-finland-2019",
  name: "React Finland 2019",
  year: "2019",
  websiteUrl: "https://react-finland.fi/",
  locations: [locations.paasitorni],
  mcs: [people["jani-evakallio"], people["sara-vieira"]],
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
