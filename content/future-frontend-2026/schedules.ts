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
          title: "We Don't Have an Idea Problem. We Have a Permission Problem.",
          description: `Most organizations don’t suffer from a lack of ideas — they suffer from a lack of permission.

In product development, creativity is quietly constrained by how ideas are discussed, evaluated, and prematurely optimized. The result? The most interesting ideas rarely survive long enough to reach a meeting — let alone a roadmap.

This talk challenges common assumptions about creativity in engineering teams. We'll look at why ideas disappear, how early judgment kills innovation, and what it really takes to awaken the hidden genius already inside organizations.

No fluff. No inspiration theater.
Just a clear look at how creativity is either enabled — or silently shut down — long before execution begins.

We'll cover:
- Reframing creativity in product development 
- Why good ideas don’t show up in meetings 
- The danger of premature optimization 
- Awakening the hidden genius
- Practical creativity triggers (no fluff)
- The real role of leadership and senior engineers`,
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
          title: "Endineering",
          description: `Face it, all your projects are going to die, and you haven’t even designed the end. 

In a world flooded with new apps and services, we can no longer assume our products are immune to the evolutionary cycle of the "next big thing." While we focus on onboarding and usage, we overlook the "End Gap"—the barren, emotional void at the close of the consumer lifecycle.

This talk reveals how the consumer experience shatters without a coherent ending. 

We will explore:
- The Hubris of Medical Tech: Why "helpful" tech for the most venerable, fails to consider the long-term burden of bodily embedded e-waste.
- Broken Boundaries: How the boundaries of state and space are shifting, challenging the assumption of "longstanding" platforms like Windows and AWS.
- Individual Agency: The lack of coherence in modern identity systems and how the once-tangible "Kill Switch" has dissolved into a subjective, political issue.
- I will share techniques and approaches to help you discuss, design, and deliver endings that empower consumers rather than abandoning them. 

Stop ignoring the exit. Become an Endineer and design the end.`,
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
      title: "Future of work",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Not Loud, Still Powerful - Taking Agency Without Becoming Someone Else",
          description: `The future of work is not something that happens to techies. It is something we actively build. Still, many developers and tech professionals don’t see themselves as “influencers” of any kind. Many of us are more comfortable with systems than social arenas.

This session challenges the idea that shaping the future requires loud voices, charisma, or constant visibility. Influence in tech can be quiet, analytical, structured, and deeply thoughtful. It can happen through design choices, questions asked at the right moment, boundaries set, or values embedded into code and processes.

As AI reshapes work, tech professionals have more influence than they often realize. Personality plays a role, but agency is shaped far more by values, perspective, and skills that can be developed over time.

We’ll explore ways to take responsibility and exert influence that respect different neurotypes and energy levels. The key message is simple: you don’t need to become someone else to shape the future of work. Recognizing that your way of thinking matters - and finding connection with peers who share your values - is not only how influence grows but also how work becomes more meaningful and sustainable.`,
          people: [people.laura],
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
          title:
            "Designing Leadership Growth in Tech Teams (When Developers Just Want to Code)",
          description: `Many tech companies say they want developers to take ownership and grow into tech leads - but at the same time they control decisions, avoid hard conversations, and expect people to “figure it out themselves”.

In this talk, Anastasiia Zvenigorodskaia shares practical lessons from growing tech leads inside small and mid-sized engineering teams. Based on her path from developer to COO, she shows how leadership can be treated as a skill set, not a job title - and how developers can grow influence without giving up coding.

The session covers how to spot leadership potential in developers, how to support growth without forcing people into management, and how trust and clear expectations directly affect motivation. It also looks at common mistakes companies make when they want mature teams but design systems that block growth.

This talk focuses on what teams can change today to grow stronger tech leads - and sets the foundation for discussing how these skills will matter even more in the future of work.`,
          people: [people.anastasiia],
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

Together, we'll explore:
- What is Forced Colors Mode and how do browsers translate system color schemes?
- How can we detect and support the forced-colors media query?
- How do CSS keywords, color tokens, and custom properties behave in high-contrast settings?
- What are the best practices for building resilient, inclusive interfaces in Forced Colors Mode?
- When (and how) should we override forced rendering safely?

Throughout the talk, we'll alternate between screen reader–guided demos and visual “treasure map” sequences, immersing the audience in the challenges users face when Forced Colors Mode is ignored, and the breakthroughs that happen when it’s embraced.`,
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
          title: "The Cake Is a Lie... And So Is Your Login's Accessibility",
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
      title: "Resilience",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "This is not the tech I signed up for! – An approach to permacomputing",
          description: `I think I am not alone in thinking that current technology trends are exhausting. More power, more chips, more AI, more productivity, less humans.

It is while reflecting on what I can bring to the table in terms of societal change that I stumbled upon [permacomputing](https://permacomputing.net/), a concept that channeled all my energy for change.

In this talk I hope to provide a different point of view by presenting to you the world of permacomputing, a framework for approaching many of the problems today’s computing presents us.

Think before doing. Care for the chips. Minimalistic aesthetics. By talking about these topics I hope (hope is important) to provide you with ideas to bring change (even if small) and imagine possible futures where our relationship with technology is vastly different and healthier.`,
          people: [people.dario],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DEVELOPMENT, Keyword.PERSONAL_DEVELOPMENT],
        },
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
          title: "Back to the future: of web development",
          description: `The future of web development isn't about chasing the latest library or framework—it's about rediscovering the evolving power of the platform. This talk will challenge your assumptions, and show you how the most exciting advances for the web are happening right now in HTML and CSS. Learn how to build complex patterns like hover cards and customizable drop down menus with _zero JavaScript_. You'll unlock the potential of modern, functional CSS and built-in semantic components to make building performant, accessible UI's faster and easier. The future is bright, and it's simpler than you think.`,
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
          title: "Building beautiful web applications the HTML First way",
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
      title: "Architecture",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "Bringing a bit of architecture in your frontend application",
          description: `This talk explores how modern frontend frameworks, with their lean learning curves and rapid adoption, often make developers forget the foundational software development principles — leading to unmaintainable and fragile code. Matthew Mamonov demonstrates how clean architecture principles remain highly relevant in the frontend realm, even though many developers assume they apply only to backend systems.`,
          people: [people.matthewM],
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
          title: "AI-first frontend architecture",
          description: `AI-first frontend architecture treats artificial intelligence as a core platform capability, embedding agentic decision-making into rendering, state management, accessibility, and personalization rather than layering AI on top of the UI. The frontend becomes adaptive, context-aware, and self-optimizing, dynamically shaping experiences based on user behavior, intent, and real-time signals.`,
          people: [people.rashmi],
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
      title: "Agentic development",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title: "",
          description: ``,
          people: [people.tejasKumar],
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
          title: "",
          description: ``,
          people: [people.ohans],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.AGENTS, Keyword.AI, Keyword.DEVELOPMENT],
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
      title: "Agentic use cases",
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
          location: locations.hbc,
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
        {
          type: SessionType.WORKSHOP,
          title: "Designing the End",
          location: locations.nitor,
          description: `Or in other words, why ends really matter for your products.

Face it, all your projects are going to die and you haven’t even designed the end. Well you better get stated learning – What does a good ending look like?

This workshop aims to equip the attendees with all the tools to answer this question. 

## What will you learn

- You will learn how to identity what type of ending needs to happen and why. 
- You will learn, why the transaction types influence and empower at the end. 
- Why the phases of the end inspire the end of the product story. Bringing resolution, meaning and emotion.
- Consider the fascinating varieties of psychology that influence endings and how to use the most appropriate method.
- And ultimately use endings as a place of brand and business benefits, celebrating the consumer and improving the bottom line.

You will become a qualified Endineer. Joining 1000 others who have graduated this course around the world. 

## Who is it for

This workshop is accessible for all conference attendees. It is aimed broadly for people who work in product development, design and tech.
The workshop is a mixture of presentations, tools, group and individual work. 

## Testimonials

> It was such a revelation. I couldn’t stop thinking about how everything ends, and how a better endings should be. Thank you for the continuous support and wisdom Joe Macleod! 

> Yeah! Yesterday was graduation day. I am now a certified #Endineer. Thanks to Joe Macleod who poured all his knowledge and dedication into creating this course. Highly recommended for everybody, no matter what your job title is.

> Did you have an old iPhone that slowed down and its battery didn’t last until lunchtime? It’s probably because Apple didn’t have an Endineer in their team. Yes, Endineer, not Engineer. Haven’t heard of Endineering before? It’s all about starting with the END in mind.`,
          people: [people.joe],
          keywords: [Keyword.DESIGN],
        },
      ],
    },
  ],
};

const thursday: Schedule = {
  day: "2026-06-11",
  description: "Thursday - workshops",
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
          title: "Claude Code Development & Workflows",
          location: locations.nitor,
          description: `Autonomous coding agents, specifically LLM's wrapped inside what we called harnesses have the possibility to multiply software development efficiency. This efficiency starts from individual usage but eventually changes teamwork dynamics.

As creating code takes less time, other avenues of software development gain significance. This training is about maximising the value of AI-enabled code creation and the resulting changes in teamwork.

## What will you learn?

In this workshop, you'll learn how to configure, run and manage Claude Code. You will also get a sense what other similar coding agents and harnesses can do and how they differ.

We go from running agents individually to creating proper engineering workflows that add value to your whole team, not just software developers.

The main studies are:

* basic setup and usage
* memory and context management
* management of several parallel AI's
* integrate project management and MCP servers to your workflow
* sub-agents, commands, skills
* advance usage patterns
* develop a "compounding engineering" guardrails
* develop a mindset of curiosity and agentic thinking
* pricing and economics of AI agents & tools
 
After this training you'll be able think ahead of new bottlenecks and how to solve them in novel ways. The goals is not only to enhance all-around development efficiency & team productivity, but to create AI integration momentum for your team!

## AI tools

We use a selection of tools available to anyone. We'll focus more on principles than the details of these tools, so you can carry the knowledge as the tooling eventually changes.

The tools we use:
* Claude Code for agentic development (plus we'll look at Codex, Gemini/Antigravity and Opencode)
* Cursor/VSCode integrations
* Tools like Warp or Conductor to help manage multiple parallel agents
* Linear and Github for task/project management
 
We will start off with a little theory, then spend most of our time working with Claude Code together.

## Who is the workshop for?

This is for tech-minded people who are not afraid of console and coding tools. For software developers and people working with them. Programming proficiency is a benefit but not a must.

* Software developers
* Designers
* Project managers
* Product Owners

We will be mostly typing in English instead of any programming language.`,
          people: [people.joonasP],
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.WORKSHOP,
          location: locations.hbc,
          title: "Drawing as a tool – The ABC of visual facilitation",
          description: `"Drawing as a tool" is an engaging workshop for practicing drawing techniques
and visualization. The workshop is designed to be an inspiring and motivational
experience for all participants. Its goal is to enhance participants' ability to use
visual elements effectively in communication and as a support for their own
learning.

We will explore the basics of drawing, such as the use of lines, shapes, and shading,
so that everyone can find their own creative way to express thoughts through
drawing, thereby improving their own learning and communication. Additionally,
we will go through the principles of visualization and visual facilitation.

The workshop offers the opportunity to learn new skills in a relaxed and
encouraging environment where each participant’s input and creativity are
valuable. Welcome to experience how visuality can enrich interaction and learning!

The workshop focuses on easy drawing and visualization techniques. During the
workshop, we will cover a bit of theory and engage in practical exercises as follows:

1. Introduction to the day's theme - Check-in to the space, expectations/warm-up task
2. Introduction to the basics of visual facilitation and drawing
  - We focus on the importance of lines, shapes, and shading in drawing. You’ll learn how to use these elements to express thoughts visually.
  - Brief introduction to the history and principles of visual facilitation
3. Creative exercises
  - The aim is to apply what we have learned in practice realizing why visual communication is effective! The theme is either goals or storytelling and familiarization.
4. Drawing ABCs - We create our own visual vocabulary
5. Application to your own work - template task
6. Final summary and feedback
  - We review how the learned skills can be applied both atwork and in everyday life, and gather feedback on the workshop using visual tools.`,
          people: [people.salla],
          keywords: [Keyword.DESIGN],
        },
      ],
    },
  ],
};

/*
const friday: Schedule = {
  day: "2026-06-12",
  description: "Friday - workshops",
  intervals: [],
};
*/

export default [monday, tuesday, wednesday, thursday];
