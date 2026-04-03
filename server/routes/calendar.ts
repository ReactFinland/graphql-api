import ical from "ical-generator";
import conferences from "../conferences";
import { Schedule } from "../schema/Schedule";

function handleCalendarRequest() {
  return calendar({
    filename: "calendar-2026.ics",
    title: "Future Frontend 2026",
    schedules: conferences["future-frontend-2026"].schedules,
  });
}

function calendar({
  filename,
  title,
  schedules,
}: {
  filename: string;
  title: string;
  schedules: Schedule[];
}) {
  const timezone = "+00:00"; // GMT+0
  const domain = "futurefrontend.com";
  const siteUrl = `https://${domain}`;
  const cal = ical({
    name: title,
    prodId: {
      company: domain,
      product: title,
    },
  });

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
            url: siteUrl,
          });
        });
      });
    });
  }

  return new Response(cal.toString(), {
    headers: {
      "content-disposition": `attachment; filename="${filename}"`,
      "content-type": "text/calendar; charset=utf-8",
    },
    status: 200,
  });
}

function resolveLocation(location) {
  // TODO: Get the default from the current event!
  const defaultLocation = "Dipoli, Otakaari 24, Espoo, Finland";

  return location
    ? `${location.name}, ${location.address}, ${location.city}, ${location.country.name}`
    : defaultLocation;
}

export default handleCalendarRequest;
