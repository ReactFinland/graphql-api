const schedules = require("./schedules");
const talks = resolveSlideUrls(require("./talks"), schedules);
const people = resolveSocialLinks(require("./people"));
const enums = require("./enums");

const speakers = people.filter(({ type }) => type.some(equals(enums.SPEAKER)));
const organizers = people.filter(({ type }) =>
  type.some(equals(enums.ORGANIZER))
);

// const sponsors = resolveSocialLinks(require("./sponsors"));
const workshops = require("./workshops");

const keynotes = talks.filter(({ type }) => type === enums.KEYNOTE);
const lightningTalks = talks.filter(
  ({ type }) => type === enums.LIGHTNING_TALK
);
const presentations = talks.filter(({ type }) => type === enums.PRESENTATION);

const allSponsors = require("../sponsors");
const partners = resolveSocialLinks([
  allSponsors.agentconf,
  allSponsors.halfstack,
  allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactfest,
  allSponsors.reactnativeeu,
  allSponsors.reasonconf,
  allSponsors.survivejs,
  allSponsors.webexpo,
]);
const goldSponsors = resolveSocialLinks([
  allSponsors.gofore,
  allSponsors.solita,
]);
const silverSponsors = resolveSocialLinks([
  allSponsors.elisa,
  allSponsors.motley,
  allSponsors.nitor,
]);
const bronzeSponsors = resolveSocialLinks([
  allSponsors.alma,
  allSponsors.geniem,
  allSponsors.rohea,
  allSponsors.verkkokauppa,
]);
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
  locations: resolveSocialLinks(require("./locations")),
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

function resolveSocialLinks(data) {
  function resolve(social, o) {
    const rules = {
      homepage: social.homepage,
      facebook: `https://facebook.com/${social.facebook}`,
      github: `https://github.com/${social.github}`,
      linkedin: `https://linkedin.com/${social.linkedin}`,
      medium: `https://medium.com/${social.medium}`,
      instagram: `https://instagram.com/${social.instagram}`,
      twitter: `https://twitter.com/${social.twitter}`,
      youtube: `https://www.youtube.com/${social.youtube}`,
      vk: `https://vk.com/${social.vk}`,
    };
    const ret = {};

    Object.keys(social).forEach(media => {
      ret[media] = rules[media];
    });

    return ret;
  }

  return data.map(o => ({
    ...o,
    social: resolve(o.social, o),
  }));
}

function resolveSlideUrls(talks, schedules) {
  const talksArray = Object.values(talks);
  const sessions = resolveSessions(schedules).filter(
    s => talksArray.indexOf(s) >= 0
  );

  return Object.keys(talks).map(slug => {
    const talk = talks[slug];
    const index = sessions.findIndex(t => t === talk);

    return {
      ...talk,
      urls: {
        ...talk.urls,
        slides: resolveSlideUrl(index + 1, slug),
      },
    };
  });
}

function resolveSessions(schedules) {
  return flatten(
    schedules.map(({ intervals }) => {
      return flatten(intervals.map(({ sessions }) => sessions));
    })
  );
}

// https://gist.github.com/Integralist/749153aa53fea7168e7e
function flatten(list) {
  return list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}

function resolveSlideUrl(index, slug) {
  return `https://slides.react-finland.fi/2018/${leftFill({
    amount: 2,
    character: 0,
    input: index,
  })}-${slug}.pdf`;
}

function leftFill({ amount, character, input }) {
  const realAmount = amount - input.toString().length;

  if (realAmount < 1) {
    return input;
  }

  const characters = new Array(realAmount).fill(character).join("");

  return characters + input;
}
