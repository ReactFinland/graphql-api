import { Schedule } from "../../server/schema/Schedule";
import Keyword from "../../server/schema/keywords";
import { Level, SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

// All times are given in GMT+0 (adjusted to GMT+3 at the frontend)
const monday: Schedule = {
  day: "2026-06-08",
  description: "Monday – Design day",
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
      title: "Designing futures",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.pasi],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.joe],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
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
      title: "Work",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.anastasiia],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: "",
          people: [people.laura],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
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
      title: "Accessibility",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Accessibility Adventures - The Lost Secrets of Forced Colors Mode",
          description: `Guiding us through this adventure is Rami, our AI-generated, raccoon treasure hunter, equal parts explorer and troublemaker, armed with a mysterious treasure map and an ancient planchette lens to decode its mysteries. Each segment of the talk represents a new “clue” on the map, where we’ll dive into demos of web interfaces through the lens of Forced Colors Mode, uncovering what breaks, what disappears, and how we can bring clarity back to the screen.

Together, we’ll explore:
- What is Forced Colors Mode and how do browsers translate system color schemes?
- How can we detect and support the forced-colors media query?
- How do CSS keywords, color tokens, and custom properties behave in high-contrast settings?
- What are the best practices for building resilient, inclusive interfaces in Forced Colors Mode?
- When (and how) should we override forced rendering safely?

Throughout the talk, we’ll alternate between screen reader–guided demos and visual “treasure map” sequences, immersing the audience in the challenges users face when Forced Colors Mode is ignored, and the breakthroughs that happen when it’s embraced.`,
          people: [people.daniel],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The Cake Is a Lie... And So Is Your Login’s Accessibility",
          description: `Much like the promise of cake in Portal, login forms are everywhere in web development. While they may seem functional at first glance, many users with disabilities perceive a maze of invisible walls, from keyboard traps to inaccessible CAPTCHA. It's as if GLaDOS designed these forms herself to test us!

In this talk, we will fix accessibility problems in a real React login component together. We will explore how simple changes can significantly improve the user experience. For example, by using ARIA tags correctly and managing focus more effectively, and what matters for authentication in particular. The promise of cake may be a lie (or isn't it? 🤔), but accessibility can and should be!`,
          people: [people.ramona],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN],
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
      title: "Habits",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.georgios],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT, Keyword.PERSONAL_DEVELOPMENT],
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
  description: "Tuesday – Development day",
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
      title: "Simplicity",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.una],
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
          title: "The Platform and a Stylesheet",
          description: ``,
          people: [people.tonyEnnis],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT, Keyword.HTML],
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
      title: "Best practices",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Shielding Your Software: Best Practices for Securing the Supply Chain in Modern Development",
          description: `After Log4Shell and the "GitHub Actions" based attacks, the most significant security vulnerabilities of the past few years, controlling the software supply chain is top of mind for every security-conscious development team. We realize that embedding open-source libraries in our applications has substantial security risks. Still, no major software artifact can be built without OSS components these days. 
In this session, we will use the recommendations of the most popular supply chain frameworks to explore a series of practical software development and system architecture best practices you can follow to secure your builds, sources, and dependencies.
We will look at how you can protect your application from two classes of risks: internal and external. The former focuses on insider threats and compromised accounts, and the latter concentrates on open-source libraries embedded in your software projects. 

**Session Takeaways:**

- How to use supply chain security frameworks to assess the security posture of an application
- Define best practices to secure your builds, sources, and dependencies.
- How to protect an application's CI/CD pipelines from insider threats and compromised credentials.`,
          people: [people.federico],
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
          description: ``,
          people: [people.matthewM],
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
      title: "Hypermedia",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Hypermedia – the solution for lighter web applications?",
          description: `It is well understood many web applications are more complex than they should. My thesis is that this is because due to prevailing mainstream trends, we ended up taking a path leading us to this complexity. It turns out that an old idea, hypermedia, might allow us to overcome this complexity while making our websites agent friendly. In this talk I show you why hypermedia is more relevant than ever today and what kind of benefits it can provide for web developers. I will cover concrete solutions, such as Datastar or htmx, and give you a starting point for your explorations with hypermedia driven web application development.`,
          people: [people.juhoVepsalainen],
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
      title: "Agents",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.alexBooker, people.tonyKovanen],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AGENTS, Keyword.AI, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "The Headless Web",
          description: `As people spend more time using personal agents like ChatGPT and Claude, they spend less time using browsers and apps. But agents still source information from the Web and use tools like MCP servers to extend their abilities and access.

Here's the surprise: React developers might not be building websites in the future. They might be building streaming components.

MCP-UI lets your React components render directly inside agent interfaces—no browser required. Your design system doesn't just power your website anymore; it extends into every agent your users talk to. This talk shows you how to make content agentic web-first using MCP-UI, with a live demo surfing the speaker's award-winning web comic archive entirely through an agent.

What you'll learn:

* Why your React skills are more relevant than ever before
* How design systems teams can extend their component libraries through MCP-UI
* How to build an MCP server that streams interactive UI to agents`,
          people: [people.rachelNabors],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AI, Keyword.DESIGN],
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
  ],
};

const wednesday: Schedule = {
  day: "2026-06-10",
  description: "Wednesday - workshops",
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
          title: "Agent Skills driven design",
          description: `Over the past year, model intelligence has skyrocketed, and agent tooling has improved significantly. However, there's still a gap: most AI agents don't have the procedural, domain-specific expertise needed to do real work inside real products, especially in React apps, where a small behaviour change turns into user-facing regressions.

In this workshop, I'll show you how leveraging Agent Skills changes how you build AI features in React: from prompt tweaking to shipping packaged guides, resources and scripts that turn a general-purpose agent into a product-specific one via the Agent Skills protocol (adopted by OpenAI, Anthropic and Cursor).  I'll also show a practical way to do this in React apps without changing your current frameworks or LLM, with evals and versioning in place to prevent regressions.

## What you’ll build

You’ll implement a real React/Next.js AI feature (server route/action + UI) and begin with a large prompt and several tools/MCPs.  We will use the Vercel AI SDK for a quick start.

Next step, we will refactor it into an Agent Skills-driven design. You’ll intentionally break the feature in realistic ways (output drift, tool misuse, injection attempts) and then harden it using a small Skills pack. Finally, you’ll add versioning + lightweight evals so updates don’t regress your UI.

By the end, you'd have learned not just the basics of building Agentic AI apps, but taken it a step further by making them reliable with Agent Skills.

React teams are on the front line: agent failures become UI failures. This workshop is designed around React realities: typed contracts, predictable component states, safe fallbacks, and preventing “it worked yesterday” incidents, without requiring you to switch frameworks or lock into one LLM/provider.

## Key outcomes

- A working React/Next.js reference project using Agent Skills
- A reusable Skills pack template (think SOPs + scripts + guardrails)
- A working evaluation framework to catch regressions 
- A checklist for shipping agent-powered UI features safely

## Workshop prerequisites

- Intermediate React + basic Next.js familiarity (routes/actions helpful)
- Node.js installed; ability to run a repo locally
- No prior “agent framework” knowledge required`,
          people: [people.ohans],
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
          // location: locations.hbc,
        },
      ],
    },
  ],
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
