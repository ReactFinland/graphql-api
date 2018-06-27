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

module.exports = resolveSessions;
