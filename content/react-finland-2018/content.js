const resolve = require("../resolve");
const schedules = require("./schedules");
const talks = resolve.slideUrls(require("./talks"), schedules);
const people = require("./people");
const enums = require("./enums");

const speakers = people.filter(({ type }) => type.some(equals(enums.SPEAKER)));
const organizers = people.filter(({ type }) =>
  type.some(equals(enums.ORGANIZER))
);

const workshops = require("./workshops");

const keynotes = talks.filter(({ type }) => type === enums.KEYNOTE);
const lightningTalks = talks.filter(
  ({ type }) => type === enums.LIGHTNING_TALK
);
const presentations = talks.filter(({ type }) => type === enums.PRESENTATION);

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

  contacts: people.concat(sponsors),
  sessions: require("./sessions"),

  // Backwards compat
  _locations: require("./locations"),

  // LEGACY
  breakfasts: require("./breakfasts"),
  coffeeBreaks: require("./coffee-breaks"),
  locations: require("./locations"),
  keynotes,
  lightningTalks,
  lunches: require("./lunches"),
  organizers,
  panels: require("./panels"),
  pages: require("./pages"),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  presentations,
  schedules,
  speakers: associate(speakers, [
    {
      field: "keynotes",
      sourceData: keynotes,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "lightningTalks",
      sourceData: lightningTalks,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "presentations",
      sourceData: presentations,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "talks",
      sourceData: talks,
      condition: speakersContainSpeakerByName,
    },
    {
      field: "workshops",
      sourceData: workshops,
      condition: speakersContainSpeakerByName,
    },
  ]),
  talks,
  tickets: require("./tickets"),
  workshops,
};

function associate(data, rules) {
  return data.map(target => {
    const associations = {};

    rules.forEach(({ field, sourceData, condition }) => {
      sourceData.forEach(source => {
        if (condition({ source, target })) {
          if (!associations[field]) {
            associations[field] = [];
          }

          associations[field].push(source);
        }
      });
    });

    return Object.assign({}, target, associations);
  });
}

function equals(expected) {
  return value => value === expected;
}

function speakersContainSpeakerByName({
  source: { speakers },
  target: { name },
}) {
  return speakers.map(({ name }) => name).indexOf(name) >= 0;
}
