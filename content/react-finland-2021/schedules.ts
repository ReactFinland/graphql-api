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
      begin: "11:00",
      end: "15:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          level: Level.INTERMEDIATE,
          title: "Modeling React Apps with XState",
          description:
            "In this workshop, you will become familiar with XState and learn to apply it in your daily work. If you have ever wanted to pick up state machines and statecharts, this is a good chance to do it.",
          people: [people.davidKhourshid],
        },
      ],
    },
    {
      begin: "12:00",
      end: "15:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          level: Level.BEGINNER,
          title: "Video on the web",
          description: `Video is one of the fastest growing mediums on the web and in mobile applications. Video files have been shown to increase engagement, and can be a great way to deliver your message quickly. (And who doesn’t love animated GIFs?)

However, video that takes a long time to start up leads to frustration and abandonment. The same goes for video that stalls during playback. In this workshop, you’ll learn best practices to optimize the delivery of your video to you customers, ensuring fast delivery and minimizing stalls for a great customer experience.`,
          people: [people.doug],
        },
      ],
    },
    {
      begin: "14:00",
      end: "17:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          level: Level.INTERMEDIATE,
          title: "Testing React Native Apps Using Cypress",
          description:
            "How to run React Native apps in the browser using react-native-web and Expo, then how to run end-to-end tests with Cypress. We can add code coverage reporting and executing tests on CI, giving us high confidence in our application's code. Finally, we will learn how to mock the native components during tests.",
          people: [people.gleb],
        },
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      title: "Opening",
      mc: people.juhoVepsalainen,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.BEGINNER,
          title: "Breaking out of the confines: making games in React",
          description:
            "To show how we can make rich, interactive experiences, for instance games, with React semantics and shareable components, and what that means for traditional constructs, like the render-loop.",
          people: [people.paul],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The State of XState",
          description:
            "Over the past few years, state machines, statecharts, and the actor model have proven to be viable concepts for building complex application logic in a clear, visual way with XState. In this talk, we'll take a peek into the future of XState, including new features in the next version, and new tools and services that will make it even easier to create and collaborate on state machines.",
          people: [people.davidKhourshid],
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
      begin: "10:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          level: Level.BEGINNER,
          title: "MicroFrontends in React",
          description: `Our first MicroFrontend project started almost to the day exactly five years ago and since then we have accompanied countless projects following this architectural style. Ever since, the technical possibilities with which MicroFrontends can be implemented have changed significantly and the options have increased considerably.

On the client-side we came from dilettante approaches based on iFrames and settled up with more elaborated strategies like Webpack Module-Federation or EcmaScript Import-Maps. We moved from pure Edge-Side-Includes to full fletched frameworks that allow us to compose MicroFrontends more comfortably and sustainably on the server-side. And even during the implementation, we achieved entirely new possibilities by more mature ways to manage MonoRepos and distributed or incremental builds. By showing real-world examples, we will go into detail about the evolution of these different approaches.
          
Upon a closer look at the challenges that still remain, it will become clear that none of these new concepts and tools come for free but with a fair amount of newly introduced complexity. Ultimately, this workshop will explain the different possibilities to implement MicroFrontends in the past, the present, and the future. More importantly, it will leave you to know which of the available approaches is best suited for your specific task at hand.`,
          people: [people.david],
        },
      ],
    },
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
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Micro Frontends in React — a State of the Art Approach",
          description:
            "David will explain the different possibilities to implement MicroFrontends in the past, the present, and the future. More importantly, he will leave you to know which of the available approaches is best suited for your specific task at hand.",
          people: [people.david],
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
      title: "To be announced",
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
      title: "To be announced",
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
      title: "Techniques",
      mc: people.manjula,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "How to Delegate your React Dialogs",
          description:
            "How to properly hide modals / dialogs / drawers functionalities behind buttons that spawn them without cluttering container components.",
          people: [people.calinb],
        },
      ],
    },
    {
      begin: "10:00",
      end: "11:30",
      title: "Tooling",
      mc: people.manjula,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Aleph.js - Build your React app in Deno",
          description:
            "A demo on Aleph.js about good development experience and deno runtime.",
          people: [people.je],
        },
      ],
    },
    {
      begin: "12:00",
      end: "13:30",
      title: "a11y",
      mc: people.saraVieira,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.BEGINNER,
          title:
            "How to Catch Low Hanging Accessibility Fruits while Developing",
          description: `We, as developers, tend to develop sites for users like ourselves, which usually causes accessibility problems. As we are often sighted, can use a mouse, and have good fine motor skills, we might (unconsciously) forget those users who aren't like us. 

In this demo, I will show some techniques every developer should know and use when developing their sites or apps. These simple checks don't ensure 100% accessibility but help catch the most obvious flaws in your site.`,
          people: [people.eevis],
        },
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
      title: "To be announced",
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
      title: "To be announced",
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
      title: "Techniques",
      mc: people.saraVieira,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.BEGINNER,
          title:
            "Video streaming on the web: Live and recorded video streaming",
          description: `In this presentation, we'll present how video streaming works.  We'll look at the anatomy of video streaming, and how video streaming is beneficial for delivering your content over just adding mp4 files.

We'll demonstrate live streaming **from** the browser, and then how to integrate that live stream into your webpage.`,
          people: [people.doug],
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:30",
      title: "The future of work",
      mc: people.juhoVepsalainen,
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.BEGINNER,
          title: "The future of software development in Finland",
          description:
            "Finland's the happy nation and in need of very many newcomers to the country especially in the tech field. What's realistic to expect in the future Finnish job market as a developer? Where do we expect the developer jobs to progress in the future?",
          people: [people.saku],
        },
        {
          type: SessionType.TALK,
          level: Level.BEGINNER,
          title: "Becoming a React developer - A hiring manager’s perspective",
          description:
            "The landscape of popular JS frameworks and libraries has become increasingly polarised. With React standing out an increasing number of companies are struggling to find skilled developers. People experienced in React are in a great position. Nevertheless, what if my CV lacks the right keyword? What if my Angular experience looks more like a burden? Can I apply for a front-end developer position in a React project?",
          people: [people.mika],
        },
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
