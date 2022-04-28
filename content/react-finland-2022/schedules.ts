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
      end: "13:30",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz],
          title: "Design systems for beginners",
          description:
            `The design system workshop will provide you with all the basics and fundamentals of building a Design System, from scratch. It is mainly intended to Frontend / UI developers but can be valuable to other teammates. As long as you‘re working on any product interface, regardless of your position, this workshop will give you the keys to collaborate, from Design to System.

The workshop is dedicated to learning Design Systems fundamentals, from a Developers perspective with a bit of Designers’ incentive. During this session, you will understand the basic of the Design System terminology (what Design Tokens are, how a Design System architecture is designed…) and we’ll go through what differentiates a Design System from a collection of themable components.

After covering the building of few tokens-based components , with their relatives documentation, stories, and tests ; we’ll go to practicing in a real world use-case, where you’ll start a Design System for a project from scratch, architecture it, build its first components and documentation, publish it, and use it in a dedicated React host app.`,
          keywords: [],
        },
      ],
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
      title: "Workshops continue",
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
      title: "Workshops continue",
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
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.nikGraf],
          title: "Advanced React",
          description:
            `React 18 was a long-awaited release. New APIs were introduced and certain behavior changed. Some of these changes have quite an impact on your daily development, while others rarely affect you. Nevertheless, only by knowing your tools can you best decide when to use which of them.

In order to get a deep understanding of these new APIs and behavior changes we will explore the following topics:

- introduction to <Suspense> and <SuspenseList>
- new concurrent rendering APIs: startTransition, useDeferredValue
- new Hooks: useId, useSyncExternalStore, useInsertionEffect
- strict effects in the new Strict Mode
- automatic batching and flushSync
- sneak peek into what's coming after React 18

The workshop is split into several modules. Each of them starts with a 20 min presentation, 30-50 min coding session and is followed by a 10 min retrospective. The final topic about what's coming after React 18 is only covered as a presentation.

By the end of the workshop you will be able to leverage the new features of React 18 and be able to use them in production ready applications.

**Prerequisites:** This workshop is targeted for intermediate and experienced React developers. You should be comfortable using Hooks (incl. useEffect, useRef) and basic understanding of [Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html) is recommended but not required.

**Preparation:** Please have Node 16+ and Yarn installed on your machine.

**Length:** Full day.`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova],
          title: "Design system ROI (return of investment)",
          description:
            `In this advanced half-day session, we discuss how to improve ROI of your design system implementations. Bring your own projecsts/topics.`,
          keywords: [],
        },
      ],
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
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova],
          title:
            "Design systems governance models and transitions between them",
          description:
            `In this advanced half-day session, you'll learn how to govern your design system work, what are the options, and how to move from one model to another. Bring your own problem(s)!`,
          keywords: [],
        },
        {
          type: SessionType.ORGANIZATIONAL,
          people: [people.nikGraf],
          title: "Advanced React",
          description: `The workshop continues`,
          keywords: [],
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
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.davidKhourshid],
          title:
            "Diagram, Develop, Deploy: Build bulletproof apps collaboratively with statecharts",
          description:
            `We've come a long way from pen and paper. In this workshop, you'll learn how to build apps with statecharts - a method of drawing diagrams that can be executed as production code. This opens up new opportunities for collaboration - helping you improve the handoffs between product, design, and dev. We'll be using XState - an open-source statechart tool for JavaScript - and Stately's visual tools to build an internet banking app, from diagram to deploy. You'll learn how to model any piece of code using states, events, actions and services.`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.eevis],
          title: "Accessibility testing for developers",
          description:
            `You don’t want to exclude any users. I know it. But sometimes, it can happen that your user interface doesn’t work for users who don’t use a mouse for navigating. Or for those who can’t see the interface or can see it only after zooming in. Or those who are trying to use your app or site in direct sunlight. We don’t always even know how to test for these scenarios, especially if we are sighted mouse users with good color sight.

In this workshop, we will look into some tools and techniques which help with that. In the workshop, you will learn:

* A set of tools and techniques that can help you to test for accessibility
* Problems to look for when developing

Bring your own project to test to get the most out of the workshop. I will prepare an example project, but you will learn more if you can apply your learnings to a project you’re working with - be it a personal or work project.

**Prerequisites:** When attending the workshop, you should have a basic understanding of React development.

**Preparation:** Have the project (your own or cloned workshop example) up and running on your computer. I will add a link to the workshop project later.`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova, people.norbert],
          title: "Visual regression tests for design systems",
          description:
            `In this advanced half-day technical session, we discuss how to benefit from visual regression testing in design systems. Bring your own problems/projects!`,
          keywords: [],
        },
      ],
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
      end: "14:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          people: [people.davidKhourshid],
          title:
            "Diagram, Develop, Deploy: Build bulletproof apps collaboratively with statecharts",
          description: `The workshop continues`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.matias],
          title: "Web Components - Write once, run anywhere",
          description:
            `In this half-day workshop we look into how Web Components work, how you can easily create them and how they can utilized by you and your team in larger projects, no matter the library/framework you're using.

**Requirements:** JavaScript skills, Preferably experience in writing UI elements with React, Vue or a similiar library.`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova, people.norbert],
          title: "Design system documentation",
          description:
            `In this advanced half-day technical session, we discuss how design systems can be used for documentation and what tools to use for the purpose. Bring your own problems/projects!`,
          keywords: [],
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
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.jen],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.nicola],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.ryan],
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The weird things about React",
          description: "",
          people: [people.nikGraf],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Notes to my younger self",
          description:
            `Learn how to get the most out of the company you are in, whether it’s a dead end job, perhaps the company are on the brink of collapse, maybe you’ve hit the job jackpot and are working in the most fantastic start up. Always something to learn. What would I tell myself so that Monday mornings are not painful, but are instead something that can be looked forward to. You’re job can be fun (honestly)! And of course the code, all those things I’ve done or not done over the years – would I do it all again the same? No!`,
          people: [people.kennethSutherland],
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
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.davidKhourshid],
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
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Mob programming",
          description:
            `In this session we'll mob program a web application together.

Note that it's likely that Woody will join us remote due to travel restrictions so we'll do a mixed session.`,
          people: [people.davidC, people.laurao, people.woody],
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.vismit],
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
          title: "Avoiding vendor lock-in through Web Components",
          description: `In this talk we'll discuss the current status of Web Component support in browsers and how developers can avoid locking themselves into certain key technologies by utilizing the Web platform itself.

We'll go through what the web can actually accomplish on it's own at the moment, and some useful tools to assist in developing more vendorless, portable experiences.`,
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
