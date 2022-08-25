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
          title: "Registration and breakfast",
          description:
            "Register and enjoy breakfast on our behalf before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "13:30",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.thaisSantos],
          title: "Design systems for beginners",
          description: `The design system workshop will provide you with all the basics and fundamentals of building a Design System, from scratch. It is mainly intended to Frontend / UI developers but can be valuable to other teammates. As long as you‘re working on any product interface, regardless of your position, this workshop will give you the keys to collaborate, from Design to System.

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
          description:
            "We have Finnish food in store for people attending the workshop.",
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
          title: "Registration and breakfast",
          description:
            "Register and enjoy breakfast (for full day and morning workshops only).",
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.nikGraf],
          title: "Advanced React",
          description: `> Note that this workshop is held **twice** with the same content.

React 18 was a long-awaited release. New APIs were introduced and certain behavior changed. Some of these changes have quite an impact on your daily development, while others rarely affect you. Nevertheless, only by knowing your tools can you best decide when to use which of them.

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

**Length:** One full day.`,
          keywords: [],
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova],
          title: "Design system ROI (return of investment)",
          description: `In this advanced half-day session, we discuss how to improve ROI of your design system implementations. Bring your own projecsts/topics.`,
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
          description:
            "We have Finnish food in store for people attending full day workshops or two workshops (morning and afternoon sessions).",
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
          description: `In this advanced half-day session, you'll learn how to govern your design system work, what are the options, and how to move from one model to another. Bring your own problem(s)!`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.matias],
          title: "Web Components - Write once, run anywhere",
          description: `> Note that this workshop is held **twice** with the same content.

In this half-day workshop we look into how Web Components work, how you can easily create them and how they can utilized by you and your team in larger projects, no matter the library/framework you're using.

**Requirements:** JavaScript skills, Preferably experience in writing UI elements with React, Vue or a similar library.`,
          keywords: [],
        },
      ],
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
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "15:00",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "AWS Finland September meetup",
          description: `AWS Finland will run their September meetup. You can [find more information and register at meetup.com](https://www.meetup.com/awsfin/events/287714546/).`,
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
          description:
            "Register and enjoy breakfast (for full day and morning workshops only).",
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.davidKhourshid, people.farzadYz],
          title:
            "Diagram, Develop, Deploy: Build bulletproof apps collaboratively with statecharts",
          description: `We've come a long way from pen and paper. In this workshop, you'll learn how to build apps with statecharts - a method of drawing diagrams that can be executed as production code. This opens up new opportunities for collaboration - helping you improve the handoffs between product, design, and dev. We'll be using XState - an open-source statechart tool for JavaScript - and Stately's visual tools to build an internet banking app, from diagram to deploy. You'll learn how to model any piece of code using states, events, actions and services.`,
          keywords: [],
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.nikGraf],
          title: "Advanced React",
          description: `> Note that this workshop is held **twice** with the same content.

React 18 was a long-awaited release. New APIs were introduced and certain behavior changed. Some of these changes have quite an impact on your daily development, while others rarely affect you. Nevertheless, only by knowing your tools can you best decide when to use which of them.

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

**Length:** One full day.`,
          keywords: [],
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.eevis],
          title: "Accessibility testing for developers",
          description: `You don’t want to exclude any users. I know it. But sometimes, it can happen that your user interface doesn’t work for users who don’t use a mouse for navigating. Or for those who can’t see the interface or can see it only after zooming in. Or those who are trying to use your app or site in direct sunlight. We don’t always even know how to test for these scenarios, especially if we are sighted mouse users with good color sight.

In this workshop, we will look into some tools and techniques which help with that. In the workshop, you will learn:

* A set of tools and techniques that can help you to test for accessibility
* Problems to look for when developing

Bring your own project to test to get the most out of the workshop. I will prepare an example project, but you will learn more if you can apply your learnings to a project you’re working with - be it a personal or work project.

**Prerequisites:** When attending the workshop, you should have a basic understanding of React development.

**Preparation:** Have the project (your own or cloned workshop example) up and running on your computer. I will add a link to the workshop project later.`,
          keywords: [],
        },
        /*
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova, people.norbert],
          title: "Visual regression tests for design systems",
          description: `In this advanced half-day technical session, we discuss how to benefit from visual regression testing in design systems. Bring your own problems/projects!`,
          keywords: [],
        },
        */
      ],
    },
    {
      begin: "07:15",
      end: "09:00",
      sessions: [
        {
          type: SessionType.PANEL,
          people: [
            people.juhoVepsalainen,
            people.jen,
            people.m4Dz,
            people.ryan,
          ],
          title: "Fireside chat at Aalto University",
          description: `As a part of unofficial program, we organize a fireside chat with some of our speakers in collaboration with Aalto University at their premises.

Although it has been mainly aimed at students learning about web development, you are welcome to join.

Location: TU1, TUAS Building, Maarintie 8, Espoo`,
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
          description:
            "We have Finnish food in store for people attending full day workshops or two workshops (morning and afternoon sessions).",
        },
      ],
    },
    {
      begin: "10:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.matias],
          title: "Web Components - Write once, run anywhere",
          description: `> Note that this workshop is held **twice** with the same content.

In this half-day workshop we look into how Web Components work, how you can easily create them and how they can utilized by you and your team in larger projects, no matter the library/framework you're using.

**Requirements:** JavaScript skills, Preferably experience in writing UI elements with React, Vue or a similar library.`,
          keywords: [],
        },
        /*
        {
          type: SessionType.WORKSHOP,
          people: [people.m4Dz, people.varyaStepanova, people.norbert],
          title: "Design system documentation",
          description: `In this advanced half-day technical session, we discuss how design systems can be used for documentation and what tools to use for the purpose. Bring your own problems/projects!`,
          keywords: [],
        },
        */
      ],
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
      end: "14:00",
      title: "Workshops continue",
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
          description:
            "You can register later too if you cannot make it in the morning.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Opening",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "What do engineers, kintsugi and stained glass, and lotuses and clocks have in common?",
          description:
            "In today's ever-evolving world, it can feel like we can't recover from the last change before the next one overwhelms us. We will travel through art, philosophy, and ourselves to see change from a new perspective. We will learn coping mechanisms to keep our mental health in check.",
          people: [people.jen],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Bringing the New React Native Architecture to the OSS community",
          description: `At the end of 2021, we successfully rolled out the New React Native Architecture in the Facebook app.

Now, it's time to empower every React Native developer on the globe to use the New React Native Architecture, both the new Fabric renderer and the new TurboModule system.

But migrating an entire ecosystem to a New Architecture is no easy task.

To support the whole community in this endeavor, we lined up a set of tools and materials that will help both app and library developers to join us in this journey.

In the talk, we will present how the New React Native Architecture looks in the OSS space. We will discuss the impact this will have on developing React Native projects. Lastly, we will cover what we learned from the React Native New Architecture migration at Meta, and how you can tackle your migration in your organization.`,
          people: [people.nicola],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The World Beyond Components",
          description: `Components have been the foundation of how we've built web applications for almost a decade now. They've defined not only how we organize our code but how it runs.

In this talk, Ryan, author of SolidJS, will look at what comes after the component model. Driven by the need for more granularity, and empowered by compilation, reactivity is becoming the universal language of user interfaces.`,
          people: [people.ryan],
          urls: {
            video: "",
          },
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
      title: "Techniques",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Zorm - Type-safe <form> for React using Zod",
          description:
            "TypeScript has become the industry standard but there are still areas that are inherently hard to make type-safe. In this talk we explore how we can leverage the Zod library to make forms type-safe in React.",
          people: [people.esaMatti],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Good Code",
          description:
            "What does good code mean to you? Really, who hasn’t heard that question at an interview. And who hasn’t cursed at the “bad” code of other engineers or - alright let’s face it - our past selves? There are plenty of opinions on naming conventions, testing strategies, commit history, review feedback, managing complexity. But how to pick out which of these things actually matter and what is just fluff? We’ll look at what you can do to write the best JavaScript code you can - at any stage of your career.",
          people: [people.kadiKraman],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Notes to my younger self",
          description: `Learn how to get the most out of the company you are in, whether it’s a dead end job, perhaps the company are on the brink of collapse, maybe you’ve hit the job jackpot and are working in the most fantastic start up. Always something to learn. What would I tell myself so that Monday mornings are not painful, but are instead something that can be looked forward to. You’re job can be fun (honestly)! And of course the code, all those things I’ve done or not done over the years – would I do it all again the same? No!`,
          people: [people.kennethSutherland],
          urls: {
            video: "",
          },
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
          description:
            "Hopefully it's as disappointing as the one you had at previous React Finland",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Statecharts",
      sessions: [
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
          title: "",
          description: "",
          people: [people.davidKhourshid],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "State machines meet component libraries",
          description:
            "In this talk, we will experiment with using state machines for modeling components in a React based component library. We will use the Stately visual editor to model components visually and see how we can use Storybook and Model based testing concepts to deal with test generation and documentation based on acceptance criteria.",
          people: [people.farzadYz],
          urls: {
            video: "",
          },
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
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Mob programming",
          description: `In this session we will introduce and try mob programming on stage.`,
          people: [people.woody, people.davidC, people.laurao],
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
          description:
            "You can register later too if you cannot make it in the morning.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Working in Finland",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "The (sometimes harsh) reality of landing a relevant role in Finland",
          description: `* How to land the role in Finland?
* Many companies say no, why?
* Identifying the right companies to apply if applying remotely`,
          people: [people.saku],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "What do companies look for in a developer – the recruiter point of view",
          description: `* Differences in CVs and interviews in different countries
* How the skills and competences are assessed in interviews`,
          people: [people.vismit],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The most common headaches in relocations",
          description: `* Available services, free and commercial
* Newcomer sessions to Finland for families
* Find out about living in Helsinki region
* How to cope with relocation in the first two weeks?`,
          people: [people.tanja],
          urls: {
            video: "",
          },
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
          title: "SDKs vs Web Components: Place Your Bets",
          description: `You're offering a fantastic brand new service, and it'll revolutionize your customers' world! Because it's smart, it delivers an API-first solution wrapped in an edge architecture. And because you're smart, you're offering to your end-users several SDKs to let them use those APIs at their full potential: PHP, Java, Ruby, Go, Python, JavaScript… Wait, JavaScript?

When entering the world of frontend architecture in an API-first world, we should take time to answer this simple question: SDK or Web Components? The frontend world comes with a UI-first paradigm, so should we switch our mindset?

On the other hand, Web Components now have a mature ecosystem where you can build advanced UI elements that already embed all the logic they need.

API-first backend only requires HTTP streams, and Web Components embed the required network primitives. Should we distribute a JS SDK or a library of Web Components for our service? Here's the match between the two giants! SDKs vs Web Components: Place Your Bets.`,
          people: [people.m4Dz],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Faster content websites via SSR and progressive hydration of Web Components",
          description: `One of the best performance tips is "do less" - transmit less data and do less processing. There are a million details but we will focus on transmitting less JavaScript.
            We are going to tackle it by doing more work at build time which means we start with almost zero JavaScript and only load more as the users interacts with the page.`,
          people: [people.thomas],
          urls: {
            video: "",
          },
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
          description:
            "Hopefully it's as disappointing as the one you had at previous React Finland",
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
          title:
            "Testing design systems using storybook + Storybook 7.0 sneak peeks",
          description:
            "Design systems are code, and code should be tested. How do you leverage Storybook stories for tests. I'll also show you some of the new features coming to Storybook 7.0!",
          people: [people.norbert],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Breaking changes in Design system",
          description:
            "Breaking changes are usually inevitable in any library or system that lives long enough. So what are breaking changes in design system? What is the impact of them in different areas of the system? Is there a way to cheat the system and limit or even prevent this kind of change from happening? But when the inevitable happens, and you need to create a breaking change, what are the things you need to consider when doing this?",
          people: [people.rami],
          urls: {
            video: "",
          },
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
      title: "Accessibility",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Better accessibility with a user-centric view",
          description:
            "Web accessibility is much more than regulations and restrictions. It is based on real people with real problems and needs. By understanding all the users everything makes a lot more sense. In her talk Marianna addresses the ‘why’ of accessibility – and a little bit of the ‘how’, too.",
          people: [people.marianna],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Let’s Keep Our Promises - ARIA, Styles and Keyboard Navigation",
          description:
            "Many websites and applications give false promises to users. For example, they promise interaction when there is none. In this talk, I will discuss some of those promises and how to create websites and applications that fulfill the promises given to users. After listening to this talk, you'll walk away knowing more about ARIA and keyboard navigation. You'll also learn how to create more inclusive websites and applications.",
          people: [people.eevis],
          urls: {
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Accessible navigation in single-page applications",
          description:
            "Single Page Applications (SPAs) are lacking in accessibility by default. While a sighted user is able to tell the difference between different types of page updates, screen reader users might not separate the ones that resemble page loads from those that affect a single component. In my speech, I’ll introduce some techniques to tackle this problem.",
          people: [people.roosa],
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "15:00",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Afterparty",
        },
      ],
      location: locations.babylonHelsinki,
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
