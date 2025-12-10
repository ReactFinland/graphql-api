import { Schedule } from "../../server/schema/Schedule";
import Keyword from "../../server/schema/keywords";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0 (adjusted to GMT+3 at the frontend)
const monday: Schedule = {
  day: "2026-06-08",
  description: "Monday – Design day",
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Conference registration",
          description: `Please show up early to meet other attendees.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the day.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "",
      sessions: [],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "",
      sessions: [],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "",
      sessions: [],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "",
      sessions: [],
    },
    {
      begin: "14:00",
      end: "14:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "Thanks for the coffee.",
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
  ],
};

const tuesday: Schedule = {
  day: "2026-06-09",
  description: "Tuesday – Development day",
  location: locations.dipoli,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Conference registration",
          description: `Please show up early to meet other attendees.`,
        },
      ],
    },
    {
      begin: "05:50",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Welcome",
          description: "Quick welcome to the day.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Simplicity",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.una],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The Platform and a Stylesheet",
          description: ``,
          people: [people.tonyEnnis],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT, Keyword.HTML],
        },
      ],
    },
    {
      begin: "07:30",
      end: "08:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink tasty Finnish coffee, live long and prosper.",
        },
      ],
    },
    {
      begin: "08:00",
      end: "09:30",
      title: "Hypermedia",
      sessions: [],
    },
    {
      begin: "09:30",
      end: "10:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Agents",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.alexBooker, people.tonyKovanen],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AGENTS, Keyword.AI, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The Headless Web",
          description: `As people spend more time using personal agents like ChatGPT and Claude, they spend less time using browsers and apps. But agents still source information from the Web and use tools like MCP servers to extend their abilities and access.

Here's the surprise: React developers might not be building websites in the future. They might be building streaming components.

MCP-UI lets your React components render directly inside agent interfaces—no browser required. Your design system doesn't just power your website anymore; it extends into every agent your users talk to. This talk shows you how to make content agentic web-first using MCP-UI, with a live demo surfing the speaker's award-winning web comic archive entirely through an agent.

What you'll learn:

* Why your React skills are more relevant than ever before
* How design systems teams can extend their component libraries through MCP-UI
* How to build an MCP server that streams interactive UI to agents`,
          people: [people.rachelNabors],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN],
        },
      ],
    },
    {
      begin: "12:00",
      end: "12:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "Pressure",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.georgios],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT, Keyword.PERSONAL_DEVELOPMENT],
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "Thanks for the fish again.",
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
  ],
};

const wednesday: Schedule = {
  day: "2026-06-10",
  description: "Wednesday - workshops",
  intervals: [],
};

const thursday: Schedule = {
  day: "2026-06-11",
  description: "Thursday - workshops",
  intervals: [],
};

const friday: Schedule = {
  day: "2026-06-12",
  description: "Friday - workshops",
  intervals: [],
};

export default [monday, tuesday, wednesday, thursday, friday];
