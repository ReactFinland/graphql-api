import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0
const monday: Schedule = {
  day: "2022-09-12",
  description: "Monday workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
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
  description: "Tuesday workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
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
  description: "Wednesday workshops",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
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
  description: "Thursday conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:45",
      title: "Opening",
      sessions: [],
    },
    {
      begin: "10:45",
      end: "11:00",
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
      begin: "11:00",
      end: "12:45",
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
      begin: "12:45",
      end: "14:00",
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
      begin: "14:00",
      end: "15:30",
      title: "Statecharts",
      sessions: [],
    },
    {
      begin: "15:30",
      end: "16:00",
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
      begin: "16:00",
      end: "17:30",
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
  description: "Friday conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "10:45",
      title: "Recruiting",
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
      begin: "10:45",
      end: "11:00",
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
      begin: "11:00",
      end: "12:45",
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
      begin: "12:45",
      end: "14:00",
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
      begin: "14:00",
      end: "15:30",
      title: "Design systems",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.varyaStepanova],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "15:30",
      end: "16:00",
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
      begin: "16:00",
      end: "17:30",
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
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];