import ical from "ical-generator";
import { Schedule } from "./schema/Schedule";

function calendar({
  filename,
  title,
  schedules,
}: {
  filename: string;
  title: string;
  schedules: Schedule[];
}) {
  const timezone = "+03:00"; // EEST
  const domain = "https://react-finland.fi";
  const cal = ical({ domain, name: title });

  if (Array.isArray(schedules)) {
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
  }

  return (_, response) => {
    response.writeHead(200, {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    });
    response.end(cal.toString());
  };
}

function resolveLocation(location) {
  // TODO: Get the default from the current event!
  const defaultLocation =
    "Helsinki Congress Paasitorni, Paasivuorenkatu 5 A, 00530 Helsinki, Finland";

  return location
    ? `${location.name}, ${location.address}, ${location.city}, ${
        location.country.name
      }`
    : defaultLocation;
}

export default calendar;
