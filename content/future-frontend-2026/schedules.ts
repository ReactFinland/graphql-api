import { Schedule } from "../../server/schema/Schedule";
//import Keyword from "../../server/schema/keywords";
//import { Level, SessionType } from "../../server/schema/Session";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
//import * as people from "../people";

// All times are given in GMT+0 (adjusted to GMT+3 at the frontend)
const monday: Schedule = {
  day: "2026-06-08",
  description: "Monday – Conference design day",
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
  description: "Tuesday – Conference development day",
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
