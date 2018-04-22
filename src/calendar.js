const ical = require("ical-generator");

function calendar({ filename, title, schedules }) {
  const timezone = "+03:00"; // EEST
  const domain = "https://react-finland.fi";
  const cal = ical({ domain, name: title });

  schedules.forEach(({ day, intervals }) => {
    intervals.forEach(({ begin, end, sessions }) => {
      sessions.forEach(({ title: summary, description, location }) => {
        cal.createEvent({
          start: new Date(`${day}T${begin}${timezone}`),
          end: new Date(`${day}T${end}${timezone}`),
          summary,
          description,
          location: resolveLocation(location),
          url: domain,
        });
      });
    });
  });

  return (_, response) => {
    response.writeHead(200, {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    });
    response.end(cal.toString());
  };
}

function resolveLocation(location) {
  const defaultLocation = "Valkoinen Sali, Aleksanterinkatu 16, Helsinki, Finland";

  return location ? `${location.name}, ${location.address}, ${location.city}, ${location.country.name}` : defaultLocation;
}

module.exports = calendar;
