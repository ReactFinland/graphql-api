import { Schedule } from "../../server/schema/Schedule";
import Keyword from "../../server/schema/keywords";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

/*
const monday: Schedule = {
  day: "2024-06-10",
  description: "Monday",
  intervals: [],
};
*/

// All times are given in GMT+0
const tuesday: Schedule = {
  day: "2024-06-11",
  description: "Tuesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    /*{
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "Register before the workshop.",
        },
      ],
    },
    {
      begin: "06:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.kevin],
          title: "KV databases for busy people",
          description: `In this half-day workshop, you will learn what makes KV databases tick and how to leverage them on top of Deno Deploy platform. You do not have to know anything about Deno or the edge beforehand but after the workshop you will be well equipped to work with both. Preferably you should understand the basics of JavaScript before enrolling to the workshop.`,
          location: locations.yle,
        },
      ],
    },*/
    {
      begin: "10:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.zak],
          title: "Introduction to augmenting your applications with AI",
          description: `In this half-day workshop, you will learn how to integrate AI features to your applications. To showcase how to do this, we will leverage Nuxt, Svelte, Rust, and Go. To give you examples of what we’ll do during this time, consider the following:

* Develop intuitive text command interfaces akin to Notion
* Design sleek native OS command palettes reminiscent of Alfred
* Build engaging GPT-powered chat applications
* Check the power of predictive text technologies and learn the ideas behind “ghost predictions” similar to GitHub Copilot and Gmail’s Smart Compose

As an introductionary workshop, the idea is to expose you to the core ideas behind the current developments behind AI so you can go and integrate some of the features to your own applications. The focus is specifically on AI but not on UI/UX.

To participate, you should have basic level understanding of the web platform.`,
          location: locations.yle,
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
        },
      ],
    },
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        /*{
          type: SessionType.WORKSHOP,
          people: [people.misko],
          title: "Building Fast WebApps with Qwik City",
          description: `Building instant-on web applications at scale have been elusive. Real-world sites need tracking, analytics, and complex user interfaces and interactions. We always start with the best intentions but end up with a less-than-ideal site.

Qwik City is a new meta-framework that allows you to build large-scale applications with constant startup-up performance. We will look at how to build a Qwik City application and what makes it unique. The workshop will show you how to set up a Qwik City project. How routing works with layout. The demo application will fetch data and present it to the user in an editable form. And finally, how one can use authentication. All of the basic parts for any large-scale applications.

Along the way, we will also look at what makes Qwik unique, and how resumability enables constant startup performance no matter the application complexity.`,
          // location: locations.columbiaroad,
        },*/
        {
          type: SessionType.WORKSHOP,
          people: [people.jason],
          title: "TypeScript Essentials - From Novice to Expert",
          description: `TypeScript is becoming one of the most popular and powerful languages available for writing safe and reliable frontends. This workshop will go over everything you need to know to start leveraging TypeScript in new projects, or bring it to existing JavaScript and React projects.

Workshop Highlights:
- Foundations - Basics of Static Types, Type Inference, and Type Checking
- Popular Patterns - Generics, Conditionals, Guards, Typeof/Keyof, Unions
- Tooling - Compiling, Linting, Bundling TypeScript
- TypeScript with React - Typing React Components, Props, Hooks, I/O, correctly
- Runtime vs Build-time Type Checking and when to use each
- Resources and Documentation

Each section comes with hands-on exercises that will be completed during the workshop. By the end of the workshop, attendees will be competent to use and integrate TypeScript into any project!`,
          location: locations.nitor,
          keywords: [Keyword.DEVELOPMENT],
        },
      ],
    },
  ],
};

const wednesday: Schedule = {
  day: "2024-06-12",
  description: "Wednesday – workshops",
  // location: locations.paasitorni,
  intervals: [
    /*{
      begin: "05:00",
      end: "06:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "Register before the workshop.",
        },
      ],
    },*/
    {
      begin: "06:00",
      end: "14:00",
      sessions: [
        /*
        {
          type: SessionType.WORKSHOP,
          people: [people.teroParviainen],
          title: "Web Audio from zero to DAW",
          description: `This full-day workshop is for current or aspiring musicians, or people who are interested in synthesis in general. After the workshop, you will understand the fundamentals of synthesis, web audio basics, and some of the newest modern web Audio features. Expect to learn about the Web Audio API, Audio Worklets, Synthesis, Music Theory, Audio focused UI and visualization, and sequencing and composition.`,
          // location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.ben],
          title: "Fast, efficient full-stack with Astro",
          description: `Serverless, server components, hot reloading, hydration... There's countless buzzwords when building full-stack webapps. They all have a time and place, but the best framework lets you reach for new tools only when you need that complexity. That's where Astro's "zero JS by default" comes in.

In this workshop, we'll use Astro to traverse those modern JS technologies by building a "swag" store. We'll start with plain server-rendered HTML, add authentication middleware, use React for interactive "add to cart" flows, and apply adapters to deploy to your host of choice. By the end of the day, you'll truly understand your stack to confidently ship new features.

Prerequisites: Fundamentals of JavaScript`,
          location: locations.alma,
          keywords: [Keyword.DEVELOPMENT],
        },
        */
        {
          type: SessionType.WORKSHOP,
          people: [people.jason],
          title:
            "The TypeScript Compiler API - Automation and Codegen for TypeScript",
          description: `This intermediate/advanced workshop will cover topics that will supercharge your TypeScript productivity!

Attendees will acquire the skills to eliminate the presence of boilerplate code within codebases by leveraging the Compiler API for automated code generation. This streamlines development but also mitigates the risk of bugs and inconsistencies, especially in large-scale projects. Additionally, attendees will delve into advanced topics such as automating processes and enhancing code type safety through the creation of custom linters and transformers.

Workshop Highlights:
- Basics of the TypeScript Compiler API
- Compiling modules with the API
- Analyzing the TypeScript Abstract Syntax Tree (AST) programmatically
- Writing a TypeScript linter from scratch
- Generating TypeScript code programmatically
- Writing a TypeScript transformer from scratch
- Using the Type Checker API
- Unit Testing our scripts`,
          location: locations.nitor,
          keywords: [Keyword.DEVELOPMENT],
        },
        /*{
          type: SessionType.WORKSHOP,
          people: [people.thaisSantos],
          title: "Design systems and accessibility",
          description: `To be done.`,
          // location: locations.nitor,
        },*/
      ],
    },
    {
      begin: "16:00",
      end: "19:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Football game - Gnistan vs. HJK",
          description:
            "In this football match, two local teams meet. Gnistan is the underdog while HJK is the reigning champion (four times in a row) that has been underperforming lately. You can [learn more about this football game online](https://www.tiketti.fi/if-gnistan-hjk-mustapekka-areena-helsinki-tickets/100187).",
        },
      ],
    },
  ],
};

const thursday: Schedule = {
  day: "2024-06-13",
  description: "Thursday – conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
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
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Compilers",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "How Qwik's Optimizer (compiler) allows JavaScript streaming and automatic optimization",
          description:
            "Discover how Qwik's innovative compiler transforms development by enabling automatic optimization and JavaScript streaming. In this session, I'll share my journey with Qwik, explaining how it effortlessly solves performance challenges through its Rust and SWC-based compiler. By breaking down code into lazy loadable (and lazy excuted) asynchronous packets, Qwik allows JavaScript streaming. Through demos and real-world examples, you'll see why Qwik should be an essential part of your development toolkit, aligning with the trend of enhancing performance and developer experience in modern frameworks.",
          people: [people.yoav],
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
          title: "Reliable I/O with the TypeScript Compiler API",
          description: `Explore the power of TypeScript Compiler API paired with OpenAPI specs to streamline I/O code generation. Learn how to effortlessly synchronize frontend and backend with correct types and endpoints, eliminating manual updates and enhancing code reliability. Ideal for developers seeking efficient and synced workflows.`,
          people: [people.jason],
          urls: {
            drawing: "",
            slides:
              "https://docs.google.com/presentation/d/11HF_GY86VG005OcX25OELOREVEbmkz4_U-ARKNPC5lg/edit#slide=id.p",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.yoav, people.jason],
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
      title: "Artificial intelligence",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Squish Meets Structure — Designing with Shoggoth",
          description: `Language models feel like squishy, alien minds we've organically grown inside a GPU cluster. They are unlike any of our existing computational tools. They're predictably unpredictable and break many of our pre-conceived notions of how computers work. How are we supposed to design with these messy, unwieldy, Shoggoth-like creatures?

In her talk, Maggie will cover how to balance squish and structure, why compositionally matters, and explore the potential of treating models as small, single-purpose reasoning engines.`,
          people: [people.maggie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Non-human teammates and AI clocks",
          description:
            "Matt explores human-AI interaction via projects and prototypes, and makes the argument for playful sketching as a path to meaningful product invention.",
          people: [people.matt],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.matt, people.maggie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI],
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
      title: "UI, design, and edge",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Dynamic UI at the Edge",
          description: `In this joint talk, we’ll explore using edge computing to build cross-platform apps with dynamic user interfaces. We’ll take a look at concepts like server-driven UI, the importance of respecting platform specific UI conventions, the edge, DurableObjects, and using WebSockets for collaboration.

We will define a high level structure for our server driven UI, and create a light implementation layer on web and mobile to render based off the configuration data stored on the edge.

We’ll look at two use-cases for shared experiences living on the edge. The first ensures continuity across a user’s experience of your app on both web and mobile, sharing their states. The second dives into collaborative apps, like shared meeting rooms with dynamic interfaces.`,
          people: [people.mo, people.samuel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "A new way to develop for the web",
          description: `Who decided that the best tool to build visual web applications was a text editor? Andreas explores a future where web development is on top of the web platform itself.`,
          people: [people.andreas],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.mo, people.samuel, people.andreas],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DEVELOPMENT],
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
      title: "AI meets design",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Design & Development Synergy: How the Digital Product Designer landscape has transformed through collaboration with development",
          description: `Designers have embraced development terminology such as ‘component,’ ‘responsiveness,’ and ‘version control,’ reshaping their workflow for success. This adoption likely began as companies increasingly encouraged collaboration between designers and developers. A collaboration that not only is beneficial to the overall digital product landscape, but also instrumental in facilitating rapid product launches and exceptional user experiences.

Along with redefining key aspects of the UX process, this dynamic partnership has also catalysed the growth of design systems and created tools that now form the backbone of every designer’s toolkit.

This talk aims to bring an insightful exploration into the various processes designers undertake to deliver user-friendly solutions and how collaboration with developers has fundamentally transformed their holistic approach to digital product creation.`,
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides:
              "https://drive.google.com/file/d/1WlZunI0bgIRCaisC4McyS5WsFZGgNKCo/view?usp=sharing",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Learning Finnish using technology - Mission Impossible?",
          description:
            "In this talk, Zak will discuss his journey to learning Finnish fast and how he built technology to facilitate this. You will learn how language learning and technology came together as targeted design principles coupled with insights from neuroscience were applied to create series of tools to solve the mystery of Finnish language. In other words, expect to learn how technology can help you and your users to tackle impossible sounding tasks like learning Finnish.",
          people: [people.zak],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.thaisSantos, people.zak],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
      ],
    },
    {
      begin: "13:30",
      end: "17:00",
      title: "Meetup",
      sessions: [
        {
          type: SessionType.MEETUP,
          title: "FLUTTER Meetup - The Summer (is Crazy) 2024 edition!",
          description: `Helsinki Flutter Meetup Group organizes a [Flutter](https://flutter.dev/) (Google's UI framework) related meetup. As the program begins at 17:00 and then trip takes around ten minutes, you can catch the meetup in time. In case you decide to join, [register to the meetup separately](https://www.meetup.com/Helsinki-Flutter-Meetup-Group/events/301314953).`,
          // location: locations.rooftopmiami,
        },
      ],
    },
    /*
    {
      begin: "14:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Party at Gofore",
          description:
            "The evening is enjoyed in a relaxed atmosphere, toned by the rhythms of a DJ. In addition to a great company, we offer participants pizza and other snacks and refreshing afterparty drinks! [Register separately](https://www.lyyti.in/Future_Frontend_goes_Gofore_1366/en).",
          location: locations.gofore,
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:10",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "",
        },
      ],
    },*/
  ],
};

const friday: Schedule = {
  day: "2024-06-14",
  description: "Friday – conference",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "05:00",
      end: "05:50",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and light breakfast",
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
          description: "Quick welcome to the conference at the main stage.",
          urls: {
            video: "",
          },
        },
      ],
    },
    {
      begin: "06:00",
      end: "07:30",
      title: "Choose your own adventure",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Deno and friends with Jo and Luca",
          description: `In this hands-on session, you will learn about authoring cross-runtime modules, [jsr](https://jsr.io/), [Deno](https://deno.com/), mixing frontend with backend, and many other upcoming topics.`,
          people: [people.jo, people.luca],
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
      title: "Green computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Challenges in green coding – the academic perspective and experiences",
          description:
            "In this talk the status of green coding is defined from the academic literature perspective as well as from the practical perspective of experiences from different universities.",
          people: [people.jari],
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
          title: "Hammers, hurricanes, and HTML",
          description:
            "What’s the environmental impact of your website? It’s a simple question, but no one seems to have a clear answer. So let’s explore the latest algorithms and heuristics to measure your carbon footprint. Then, we’ll apply JS libraries to real-world applications and test that footprint ourselves. I won’t promise a silver bullet, but you WILL walk away with tools to measure and reduce your impact for a better web. ",
          people: [people.ben],
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
          people: [people.ben, people.jari],
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
      title: "Standardization",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Brief intro to TC39 and how it works",
          description:
            "You might have heard of TC39 but do you know what it is and how it works? After this brief introduction you will understand its position in JavaScript ecosystem and how you can contribute to improve standards.",
          people: [people.uj],
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
          title: "Building polyfills in WebAssembly",
          description: `ECMA-402 brings Unicode and internationalization features to the Web platform. These features are typically data-heavy and difficult to implement correctly in userland. As the i18n space continues to evolve, new features are made available to Web developers, but it can take time before these features are widely enough available across the Web platform.

This talk will cover the i18n Stack on the Web Platform, how ICU and ICU4X fit in, and show how WebAssembly can be used to ship features before they are available in Web engines.`,
          people: [people.shane],
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
          title: `Standardizing "Signals" in TC39`,
          description:
            "Modern web frameworks work with one-way data flow. What is displayed on the screen is a function of the application state, and updates to that state only update the particular part of the DOM to which it relates. Through their own paths, many other web frameworks have arrived at solutions which are analogous to each other, often called “Signals.” Now, a group of signal library authors and maintainers of front-end frameworks are working together in TC39 to standardize some of the core data structures and algorithms that will be required for JS implementations of Signals, and we could use your help pushing JavaScript forward.",
          people: [people.danielE],
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
          title: "Panel with TC39",
          description: ``,
          people: [
            people.rob,
            people.uj,
            people.shane,
            people.danielE,
            people.michael,
          ],
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
      title: "User interaction",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Return to Web Animation Wonderland",
          description:
            "Ages ago, when CSS animations were young and the Web Animations API had yet to ship in all browsers, before the time of JavaScript frameworks when JQuery could still be found on job postings, Rachel Nabors made a series of interactive, hand drawn Alice in Wonderland storybooks using polyfills and some clever hacks. Today, jump down the rabbit hole again with brand new CSS and Web APIs that bring your wildest dreams to life. Join Alice, Rachel, and the Hipster White Rabbit as they refactor Alice in Web Animation Land.",
          people: [people.rachelNabors],
          urls: {
            drawing: "",
            slides:
              "https://drive.google.com/file/d/168yuSLseKKOj-HpOyGwbqu03qRsmUl1h/view?usp=sharing",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Make Real: tldraw's accidental AI play",
          description: `You might be familiar with [tldraw](https://www.tldraw.com/) but did you know an AI tool known as [Make Real](https://makereal.tldraw.com/) came out of it by accident. This talk is a rollercoaster ride of an accidental success with lessons on building your own product and betting on the web. Tune in for the ride as we try to understand what just happened and how AI is shaping product development.`,
          people: [people.steve],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.rachelNabors, people.steve],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN, Keyword.DEVELOPMENT],
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
  ],
};

const saturday: Schedule = {
  day: "2024-06-15",
  description: "Enjoy sunny Helsinki",
  intervals: [
    {
      begin: "08:00",
      end: "23:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Sideways music festival",
          description: `[Sideways music festival](https://en.sidewayshelsinki.fi/) occurs at the same time with the conference and continues to Saturday when you can still catch up with the event.`,
        },
      ],
    },
  ],
};

export default [tuesday, wednesday, thursday, friday, saturday];
