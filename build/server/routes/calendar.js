"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ical_generator_1 = __importDefault(require("ical-generator"));
const conferences_1 = __importDefault(require("../conferences"));
function routeCalendar(router) {
    router.all("/calendar/:id", (req, res) => {
        const conference = conferences_1.default[req.params.id];
        if (conference) {
            calendar({
                filename: `calendar-${conference.id}`,
                title: conference.name,
                schedules: conference.schedules,
            })(req, res);
        }
        else {
            res.status(404).end("Not found");
        }
    });
    // TODO: Make a better abstraction for this
    const calendarFile = "calendar-2023.ics";
    router.all(`/${calendarFile}`, calendar({
        filename: calendarFile,
        title: "Future Frontend 2023",
        schedules: conferences_1.default["future-frontend-2023"].schedules,
    }));
}
function calendar({ filename, title, schedules, }) {
    const timezone = "+00:00"; // GMT+0
    const domain = "https://react-finland.fi";
    const cal = ical_generator_1.default({ domain, name: title });
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
    const defaultLocation = "Helsinki Congress Paasitorni, Paasivuorenkatu 5 A, 00530 Helsinki, Finland";
    return location
        ? `${location.name}, ${location.address}, ${location.city}, ${location.country.name}`
        : defaultLocation;
}
exports.default = routeCalendar;
//# sourceMappingURL=calendar.js.map