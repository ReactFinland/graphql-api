import { Schedule } from "../../server/schema/Schedule";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

const monday: Schedule = {
  day: "2023-06-05",
  description: "Monday",
  intervals: [
    {
      begin: "15:00",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "WWDC keynote watch party",
          description:
            "[Register at meetup separately](https://www.meetup.com/helsinkios-mac-and-ios-developers/events/292970480/).",
        },
      ],
    },
  ]
}

// All times are given in GMT+0
const tuesday: Schedule = {
  day: "2023-06-06",
  description: "Tuesday – workshops",
  // location: locations.paasitorni,
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
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.samuel],
          title: "Cloudflare Workers from zero to hero",
          description: `Always wanted to try out Cloudflare Workers, but haven't known where to start? Maybe you've tried out Workers once or twice, but aren't sure how to fit all the parts together for a production-ready application? Maybe you're completely new to the idea of running code on the edge, but you want to find out more? This is the workshop for you!

You'll be shown how to build a simple application on Cloudflare Workers, Cloudflare's platform for running your code on the edge, all the way from idea to deployed project. You'll learn:

- How to bootstrap and configure a new project with Wrangler, Cloudflare's CLI tool for Workers.
- Debugging and troubleshooting methods via developer tools, analytics, and integration with Sentry.
- How to use Wrangler to develop your project locally, before deploying to the Cloudflare developer platform.`,
          location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.thaisSantos],
          title:
            "Wearing different hats: understanding and practicing the designer/developer workflow for digital products with a design system in place",
          description: `There are developers who have an eye for design, or designers who understand and like to code. This understanding of the other side can really help increase the speed of product development, as well as help a team achieve better results because there's empathy for each other's efforts. This workshop is intended to showcase the reality of these two disciplines and bring practical tips to be implemented by any team.

We will spend the day understanding the key aspects of a designer's and developer's work in a digital product and how a design system enhances this interaction. This is a hands-on workshop to empower you with better understanding of your colleagues and how to leverage the design system in this workflow. We will work with Figma files and an existing React component library, no prior knowledge is required.`,
        },
      ],
    },
    /*{
      begin: "06:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.liran],
          title: "Developer Security Essentials with Snyk",
          description: `Overwhelmed with security issues in your Node.js applications? Not entirely sure how to write secure code? Join us in this workshop where you’ll learn how to improve security without being a security professional. We’ll use Snyk Code’s VS Code extension to catch and find security issues while you code, automatically fix security issues in your open source libraries, and see first-hand how to weaponize vulnerabilities to exploit working Node.js applications.

**Pre-requisites:**

Attendees need to have the following requirements prepared to be able to successfully participate in the workshop: a Node.js LTS development environment, Git, an npm package manager, Docker or a local MongoDB server installed, their preferred IDE and a working Internet connection.

**IMPORTANT!** This workshop runs in a half-day format and lunch is **not** included.`,
          location: locations.futurice,
        },
      ],
    },*/
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
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const wednesday: Schedule = {
  day: "2023-06-07",
  description: "Wednesday – workshops",
  // location: locations.paasitorni,
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
      end: "14:00",
      sessions: [
        {
          type: SessionType.WORKSHOP,
          people: [people.kenWheeler],
          title: "Beats with Ken",
          description: `This full-day workshop is for current or aspiring musicians, or people who are interested in synthesis in general. After the workshop, you will understand the fundamentals of synthesis, web audio basics, and some of the newest modern web Audio features. Expect to learn about the Web Audio API, Audio Worklets, Synthesis, Music Theory, Audio focused UI and visualization, and sequencing and composition.`,
          location: locations.nitor,
        },
        {
          type: SessionType.WORKSHOP,
          people: [people.misko],
          title: "Building Fast WebApps with QwikCity",
          description: `Building instant-on web applications at scale have been elusive. Real-world sites need tracking, analytics, and complex user interfaces and interactions. We always start with the best intentions but end up with a less-than-ideal site.

QwikCity is a new meta-framework that allows you to build large-scale applications with constant startup-up performance. We will look at how to build a QwikCity application and what makes it unique. The workshop will show you how to set up a QwikCitp project. How routing works with layout. The demo application will fetch data and present it to the user in an editable form. And finally, how one can use authentication. All of the basic parts for any large-scale applications.

Along the way, we will also look at what makes Qwik unique, and how resumability enables constant startup performance no matter the application complexity.`,
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
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const thursday: Schedule = {
  day: "2023-06-08",
  description: "Thursday – conference",
  location: locations.porssitalo,
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
      title: "Opening",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.misko],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "SolidJS: Why all the Suspense?",
          description: ``,
          people: [people.ryan],
          urls: {
            drawing: "",
            slides: "",
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
      title: "Static site generation",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "You might not need a meta framework",
          description: `In this talk we will explore how to generate static sites without a meta framework. We'll learn how to implement partial hydration and how to get live previews in a CMS without a build step. In short, we'll learn about the ideas behind Capri and how they can help you build a carbon-friendly website.`,
          people: [people.felix],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Bringing React into your Content Sites with Astro",
          description: ``,
          people: [people.matthew],
          urls: {
            drawing: "",
            slides: "",
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
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Universal design systems",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Creating universal design systems across web and mobile with Utility First Styling",
          description: `Striking the right balance between consistency and platform-specific user experiences is essential for successfully creating a design system for web and mobile. In this talk, we'll explore how to create a universal design system that caters to the unique requirements of both platforms without losing their distinct identities. After all, nobody wants websites that look like apps, and apps that look like websites. We'll dive into the challenges and solutions of unifying design elements while acknowledging the fundamental differences between web and mobile interfaces. We'll take inspiration from utility first styling, and discuss how to establish consistent design tokens and primitives that enable a seamless cross-platform experience.`,
          people: [people.mo],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Establishing the rules for a universal design system",
          description: `In this talk we will explore the challenges and opportunities of creating a common language for web, android, and iOS components. Defining a set of universal guiding principles can help with establishing consistency and ease of use across the various devices which, in turn, provides a better user experience for the product. Through case studies and best practices we will provide actionable insights and practical tips that take into account the differences of each technology. Join us to learn how to establish the rules for a design system that works across all platforms.`,
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
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
      title: "Sound",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.kenWheeler],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Adaptive Music for the Web With RNBO",
          description: ``,
          people: [people.teroParviainen],
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
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Party at Gofore",
          description: "More information will become available later, including registration.",
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
    },
  ],
};

const friday: Schedule = {
  day: "2023-06-09",
  description: "Friday – conference",
  location: locations.porssitalo,
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
      title: "Green computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Why going green is a must",
          description: ``,
          people: [people.satu, people.janne],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Carbon emissions of professional coding",
          description: ``,
          people: [people.satu],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Energy consumption and countermeasures in modern software",
          description: ``,
          people: [people.janne],
          urls: {
            drawing: "",
            slides: "",
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
      title: "Edge computing",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The story of jsDelivr",
          description: `The story of how jsDelivr came to be and what was learned during the process.`,
          people: [people.dmitriy],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Everything's better with friends",
          description:
            "Software is best when shared; with friends and colleagues, in realtime, across the world. It's traditionally been hard and expensive to do this, but with the advent of edge computing and advances in CRDTs and the like, building multiplayer applications is now accessible to mere mortals like myself. In this talk, I'll share some of the work I've been doing in the space, and we'll have a demo to play with and break!",
          people: [people.sunil],
          urls: {
            drawing: "",
            slides: "",
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
          description: "Lunch with a Finnish twist.",
        },
      ],
    },
    {
      begin: "10:30",
      end: "12:00",
      title: "Security",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Moving application auth to the edge",
          description: `Secure your application by handling auth at the edge - before a user hits your application. This would be primarily about building out a login/signup flow that happens at the edge, before a request reaches your app - which would only see user profile information for the currently logged in user.`,
          people: [people.samuel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Hack-Proof The Node.js runtime: The Mechanics and Defense of Path Traversal Attacks",
          description: ``,
          people: [people.liran],
          urls: {
            drawing: "",
            slides: "",
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
      end: "14:15",
      title: "Demonstrations",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The API Evolution",
          description: `Delve into the cyclical nature of API evolution, discovering how revisiting and refining past solutions drives innovation and leads to more effective, streamlined approaches for your projects. Embrace the iterative journey to unlock the full potential of your API-driven projects in the ever-evolving digital landscape.`,
          people: [people.aleksandra],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Server/Client unified execution model with Qwik",
          description: `The concept of a unified execution model between server and client brings a new approach to building interactive applications that are both performant and flexible. By leveraging resumability as an alternative to traditional hydration, the execution of the application can seamlessly transition from server-side to client-side, reducing the eager download and execution of JavaScript. This results in instant-on applications, even on poor connections and slow devices.`,
          people: [people.misko],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Hacking meaningful connections with humans by talking to (toy) rodents",
          description: `Building weird little hardware projects has provided a space for me to feel technically competent, during times in my career that I have felt like an imposter. After being diagnosed with ADHD last year, I realized that hacking on hardware has been a sanctuary where I could explore my social awkwardness and human connection. Sometimes I sabotage myself socially by not maintaining contact with friends or family as well as I should despite my intentions. I've been experimenting to find out if I could turn unexpected and impractical soft objects into input devices that can help lower my barriers to sustaining meaningful connections with others. In this talk, I’ll share my journey of building two explorations so far: a giant soft pompom that sends AI-generated motivational but esoteric art when it’s squeezed and a toy hamster I talk to that sends voice messages (in its own high-pitched, but oddly therapeutic voice) to my long-distance partner. Whether you’re neurodivergent or not, I hope to inspire you to start a project even if you feel intimidated by the technical details and find joy in the journey rather than the destination.`,
          people: [people.stephanie],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
        },
      ],
    },
    {
      begin: "14:15",
      end: "14:30",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Ending of the day",
          description: "",
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
          description: "Epic afterparty at a location to be decided.",
        },
      ],
      // location: locations.babylonHelsinki,
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
