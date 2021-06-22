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
      title: "Opening",
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Hooks are a great abstraction model",
          description: `The discussion explores the separation of concerns between logic (Model) and UI (View) and how React hooks are a great abstraction model that help achieve that.

We'll start with designing a component's API (in a top down approach), then dive deeper to explore how to implement this API, while maintaining a good separation of concerns. 
          
We'll create custom React hooks to implement the Model and React components for the UI. Both expose self-documenting APIs and are completely decoupled from each other.
          
To demo this approach, we'll create a simple Toggler component (a UI component that allows going back and forth in an array of values).
          
Towards the end, we'll explore the benefits, focusing on testing these decoupled units in isolation.`,
          people: [people.calin],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Web Components in React",
          description:
            "Likely you've heard of Web Components but do you know how to use them with React? If not, then this is the demonstration for you!",
          people: [people.matias],
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
      title: "React Native",
      mc: people.manjula,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Integration Testing for React Native Apps",
          description:
            "My unpopular opinion is that testing is ... important. How do you test your React Native apps? In this presentation I will show how to run full integrations tests using Cypress while the RN app is running in the browser. This method can cover most of the application's code and be effective at finding logical errors and mistakes when calling the server APIs.",
          people: [people.gleb],
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Design tools",
      mc: people.manjula,
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
      mc: people.manjula,
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
      mc: people.manjula,
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
    {
      begin: "10:00",
      end: "11:30",
      title: "CMSs",
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
      begin: "12:00",
      end: "13:30",
      title: "Styling",
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
