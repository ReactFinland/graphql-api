const ical = require("ical-generator");

function calendar({ title, location, schedules }) {
  const timezone = "+03:00"; // EEST
  const domain = "https://react-finland.fi";
  const cal = ical({ domain, name: title });

  schedules.forEach(({ day, intervals }) => {
    intervals.forEach(({ begin, end, sessions }) => {
      sessions.forEach(({ title: summary, description }) => {
        cal.createEvent({
          start: new Date(`${day}T${begin}${timezone}`),
          end: new Date(`${day}T${end}${timezone}`),
          summary,
          description,
          location,
          url: domain,
        });
      });
    });
  });

  return (_, res) => res.send(cal.toString());
}

module.exports = calendar;
