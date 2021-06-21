import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0
const monday: Schedule = {
  day: "2021-08-30",
  description: "Monday",
  location: locations.internet,
  intervals: [
    {
      begin: "15:00",
      end: "16:30",
      mc: people.juhoVepsalainen,
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
      end: "16:30",
      title: "Architecture",
      mc: people.saraVieira,
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
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
      title: "Styling",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Design tools",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "Design systems",
      mc: people.saraVieira,
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      title: "GraphQL",
      mc: people.saraVieira,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "How to cache GraphQL queries at the edge",
          description:
            "A demo and deep dive into GraphCDN, the edge caching GraphQL CDN.",
          people: [people.max],
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
      title: "Legacy",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Debugging",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "Performance",
      mc: people.saraVieira,
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "15:00",
      end: "16:30",
      title: "ReScript",
      mc: people.saraVieira,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "A glimpse of ReScript",
          description: `ReScript is a fully typed, almost zero-config language for React development with one of the fastest JS compiler and build system you can find today. Even though it's a different (JS like) language, it integrates seamlessly in existing JS / React codebases and allows easy gradual adoption that doesn't come with \`any\` types.

In this talk, Patrick will show-case ReScript's coolest features in a live-coding demonstration. You will learn how ReScript / React looks like, how it integrates with JS codebases / libraries, and how it differentiates to gradual type systems such as TypeScript or Flow.`,
          people: [people.patrickEcker],
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
      title: "Jobs",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "CMSs",
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "React Native",
      mc: people.saraVieira,
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
    {
      begin: "15:00",
      end: "16:30",
      title: "Closing",
      mc: people.juhoVepsalainen,
      sessions: [
        /*{
          type: SessionType.TALK,
          title: "",
          description: "",
          people: [],
        },*/
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
