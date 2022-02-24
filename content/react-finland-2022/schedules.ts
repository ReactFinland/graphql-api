import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0
const monday: Schedule = {
  day: "2022-09-12",
  description: "Monday – workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "06:00",
      end: "07:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
  ],
};

const tuesday: Schedule = {
  day: "2022-09-13",
  description: "Tuesday – workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "06:00",
      end: "07:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
  ],
};

const wednesday: Schedule = {
  day: "2022-09-14",
  description: "Wednesday – workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "06:00",
      end: "07:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
  ],
};

const thursday: Schedule = {
  day: "2022-09-15",
  description: "Thursday – conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "06:00",
      end: "07:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "07:00",
      end: "08:45",
      title: "Opening",
      sessions: [],
    },
    {
      begin: "08:45",
      end: "09:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee, live long and prosper. Play foosball at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:45",
      title: "Next.js",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.davidC],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "10:45",
      end: "12:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at previous React Finland",
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "Statecharts",
      sessions: [],
    },
    {
      begin: "13:30",
      end: "14:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Take a massage at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "14:00",
      end: "15:30",
      title: "Techniques",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Zorm - Type-safe <form> for React using Zod",
          description: "",
          people: [people.esaMatti],
          urls: {
            video: "",
          },
        },
      ],
    },
  ],
};

const friday: Schedule = {
  day: "2022-09-16",
  description: "Friday – conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "06:00",
      end: "07:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "07:00",
      end: "08:45",
      title: "Working in Finland",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.saku],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "08:45",
      end: "09:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee, live long and prosper. Play foosball at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:45",
      title: "Web components",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.matias],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.m4Dz],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "10:45",
      end: "12:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at previous React Finland",
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "Design systems",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "The complete design system: what and how we could learn from the others",
          description:
            "Benchmarking is one of the recommended practices when you are looking for what could be the next steps for your design system. But there are so many design systems, and they are very much different — it is confusing what should be the standard to benchmark with. Varya has studied dozens of design systems and committed reversive analysis on their features and attributes. This talk sheds light on the method and the results that help make strategic product decisions and suggest specific implementation approaches.",
          people: [people.varyaStepanova],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.norbert],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Take a massage at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "14:00",
      end: "15:30",
      title: "Accessibility",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.eevis],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.marianna],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.roosa],
          urls: {
            video: "",
          },
        },
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
