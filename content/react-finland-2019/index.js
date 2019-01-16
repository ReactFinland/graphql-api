const people = require("../people");
const locations = require("../locations");

const allSponsors = require("../sponsors");
const partners = [
  allSponsors.halfstack,
  allSponsors.reasonconf,
  allSponsors.reactindia,
  allSponsors.survivejs,
  allSponsors.typeof,
  allSponsors.zapier,
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
    people["toni-ristola"],
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
