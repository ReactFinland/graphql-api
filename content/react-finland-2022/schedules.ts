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
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "We have Finnish food in store for you.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [],
    },
  ],
};

const tuesday: Schedule = {
  day: "2022-09-13",
  description: "Tuesday – workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "We have Finnish food in store for you.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [],
    },
  ],
};

const wednesday: Schedule = {
  day: "2022-09-14",
  description: "Wednesday – workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [],
    },
    {
      begin: "09:00",
      end: "10:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "We have Finnish food in store for you.",
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, tea, or water.",
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [],
    },
  ],
};

const thursday: Schedule = {
  day: "2022-09-15",
  description: "Thursday – conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:45",
      title: "Opening",
      sessions: [],
    },
    {
      begin: "07:45",
      end: "08:00",
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
      begin: "08:00",
      end: "09:45",
      title: "Mob programming",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description:
            "In this session we'll mob program a web application together",
          people: [people.davidC],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:45",
      end: "11:00",
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
      begin: "11:00",
      end: "12:30",
      title: "Statecharts",
      sessions: [],
    },
    {
      begin: "12:30",
      end: "13:00",
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
      begin: "13:00",
      end: "14:30",
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.kadiKraman],
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
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:45",
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.kirsi],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "07:45",
      end: "08:00",
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
      begin: "08:00",
      end: "09:45",
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.thomas],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "09:45",
      end: "11:00",
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
      begin: "11:00",
      end: "12:30",
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Breaking changes in Design system",
          description: "",
          people: [people.rami],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "12:30",
      end: "13:00",
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
      begin: "13:00",
      end: "14:30",
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
