import ical from "ical-generator";
import conferences from "../conferences";
import { Schedule } from "../schema/Schedule";

function handleCalendarRequest(pathname: string) {
  if (pathname === "/calendar-2026.ics") {
    return calendar({
      filename: "calendar-2026.ics",
      title: "Future Frontend 2026",
      schedules: conferences["future-frontend-2026"].schedules,
    });
  }

  if (!pathname.startsWith("/calendar/")) {
    return null;
  }

  const conferenceId = decodeURIComponent(pathname.replace("/calendar/", ""));
  const conference = conferences[conferenceId];

  if (!conference) {
    return new Response("Not found", { status: 404 });
  }

  return calendar({
    filename: `calendar-${conference.id}`,
    title: conference.name,
    schedules: conference.schedules,
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
  const domain = "https://futurefrontend.com";
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
