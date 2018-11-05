const resolveSessions = require("./sessions");

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

module.exports = resolveSlideUrls;
