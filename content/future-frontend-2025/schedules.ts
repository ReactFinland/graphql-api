import { Schedule } from "../../server/schema/Schedule";
import Keyword from "../../server/schema/keywords";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0 (adjusted to GMT+3 at the frontnend)
const monday: Schedule = {
  day: "2025-05-26",
  description: "Monday - workshops",
  intervals: [
    {
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Workshop registration",
          description: `Please show up early to meet other attendees.`,
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          title:
            "Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router",
          description: `In this workshop, we will explore React's latest features: Server Components, Server Actions, and Forms. Discover how to optimize server-side rendering, build smooth user experiences with React Suspense and Transitions, enhance application interactivity with Server Actions and multiple new React 19 hooks, and create robust forms for efficient data handling and validation.

Designed for developers of all levels, this workshop provides practical skills to build scalable, performant web applications.

## Content & procedure

With the introduction of Server Components and the Next.js App Router come new patterns and strategies for developing performant and interactive apps. In addition, React 19 brings new hooks and API’s. It’s all very exciting, but can be confusing to grasp and keep up with.

To cover all the concepts, we will be building an interactive CRUD app for managing contacts. Through the development process we will be learning each relevant concept step by step, and for each step use it to implement a feature in the application, until the application is completed.`,
          people: [people.devlin, people.aurora],
        },
        {
          type: SessionType.WORKSHOP,
          title: "Design Systems for Legacies",
          description: `Over the past few years, numerous workshops and talks have explored the implementation of Design Systems from scratch. While these sessions have been invaluable for education and promoting the benefits of a Design System philosophy, it's important to recognize that not all projects begin anew. More often than not, we need to integrate a Design System into existing tech stacks. This process involves not just introducing a new library of components but also establishing a comprehensive workflow to enhance collaboration and communication among stakeholders.

In this workshop, we will explore the realities of implementing and integrating design systems into existing codebases. We’ll discuss how to engage stakeholders in conversations about design system practices, effectively transfer essential elements like design tokens from design teams to front-end developers, ensure consistent documentation across all teams, manage legacy templating, and more.

This workshop isn’t about starting a design system from scratch. We will focus on real-world use cases and strategies for overcoming the challenges of integrating your new design system into legacy projects.

The workshop draws on our experiences as designers and developers in implementing Design System components and infusing the Design System philosophy into legacy projects. Join us to learn practical strategies for seamless integration and to foster a collaborative design culture within your organization.

## Takeaways

* A reminder of what Design Systems are, their goals, and how to implement them
* Tools around DS for Designers and Developers
* Workflows to pass data and enforce communication
* Frameworks you want to use: documentation, design, tokens, components
* Topography of legacies and their DS compatibility
* Use-cases`,
          people: [people.thaisSantos, people.m4Dz],
        },
      ],
    },
  ],
};

const tuesday: Schedule = {
  day: "2025-05-27",
  description: "Tuesday – conference",
  location: locations.dipoli,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Conference registration and light breakfast",
          description: `You can register later too.`,
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
          description: "Quick welcome to the conference.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Performance",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.barry],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.barry],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
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
      title: "React",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.devlin],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.aurora],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.devlin, people.aurora],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
      ],
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
      title: "Design systems",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN_SYSTEMS],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "You weren’t ready for Design systems",
          description: `And suddenly, Design systems emerged—promising innovation, collaboration, and a bridge between designers, developers, accessibility experts, and security specialists... the stakes for frontend delivery are huge.

On a homogeneous full-stack JS/TS app, the technical challenge is relatively straightforward. With older backends boasting a solid API, a Backend for Frontend can do the trick, given a bit of sweat. But what about all the rest?

Join us for insights from implementing a Design System architecture within an aging backend (18 years old, aged in Python casks) that wasn’t intended for a complete rewrite but still manages server-side view rendering (HTML) and frontend asset delivery—all without sacrificing developer experience!

Integrating modern frontend tools—Vite.js, Stimulus, Storybook...—into an old Django setup: we’re closing that time loop and jumping on board! You weren’t ready for Design systems, but we made it happen anyway!`,
          people: [people.m4Dz],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN_SYSTEMS],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.thaisSantos, people.m4Dz],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN_SYSTEMS],
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
      title: "Demonstrations",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.charlie],
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
          title: "",
          description: "",
          people: [people.teroParviainen],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.charlie, people.teroParviainen],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
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
          description: "Thanks for the fish.",
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    /*
    {
      begin: "15:00",
      end: "18:00",
      title: "Afterparty",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Afterparty at UpCloud HQ",
          description:
            "Conference afterparty takes place at UpCloud offices. Make sure to register separately through the provided registration link. [See the location on Google Maps.](https://maps.app.goo.gl/3BhJSd7QYZxPSHp68)",
          location: locations.upcloud,
        },
      ],
    },
    */
  ],
};

const wednesday: Schedule = {
  day: "2025-05-28",
  description: "Wednesday - conference",
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Conference registration and light breakfast",
          description: `You can register later too.`,
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
          description: "Quick welcome to the conference.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Work-life balance",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.olavi],
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
          title: "",
          description: "",
          people: [people.georgios],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.olavi, people.georgios],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
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
      title: "Accessibility",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.eevis],
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
          title: "",
          description: "",
          people: [people.marianna],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.eevis, people.marianna],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
      ],
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
      title: "Cybersecurity",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.juhani],
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
          title: "",
          description: "",
          people: [],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.juhani],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [],
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
      title: "AI and ML",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.rachelNabors],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.ML],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.stephanie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.ML],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.rachelNabors, people.stephanie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.ML],
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
    {
      begin: "15:00",
      end: "18:00",
      title: "Afterparty",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Sauna at Poliisien kesäkoti",
          description:
            "The afterparty of the conference will be held at Poliisien kesäkoti (Länsiulapanpolku 27, 00200 Helsinki). The location is by the coast of Helsinki and there will be two saunas available. We will also make sure there will be something nice to drink and to eat.",
          location: locations.poliisienkesakoti,
        },
      ],
    },
  ],
};

const thursday: Schedule = {
  day: "2025-05-29",
  description: "Thursday - public holiday",
  intervals: [],
};

export default [monday, tuesday, wednesday, thursday];
