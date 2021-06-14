import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
// import * as people from "../people";

// All times are given in GMT+0
const monday: Schedule = {
  day: "2021-08-30",
  description: "Monday",
  location: locations.internet,
  intervals: [
    {
      begin: "15:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Opening",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

const tuesday: Schedule = {
  day: "2021-08-31",
  description: "Tuesday",
  location: locations.internet,
  intervals: [
    {
      begin: "15:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Architecture",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

const wednesday: Schedule = {
  day: "2021-09-01",
  description: "Wednesday",
  location: locations.internet,
  intervals: [
    {
      begin: "07:00",
      end: "08:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Styling",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Design tools",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Design systems",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "15:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "State management",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

const thursday: Schedule = {
  day: "2021-09-02",
  description: "Thursday",
  location: locations.internet,
  intervals: [
    {
      begin: "07:00",
      end: "08:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Legacy",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Debugging",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Performance",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "15:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Future",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

const friday: Schedule = {
  day: "2021-09-03",
  description: "Friday",
  location: locations.internet,
  intervals: [
    {
      begin: "07:00",
      end: "08:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Jobs",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "CMSs",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "React Native",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "15:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Closing",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
