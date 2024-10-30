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

## Content and procedure

With the introduction of Server Components and the Next.js App Router come new patterns and strategies for developing performant and interactive apps. In addition, React 19 brings new hooks and API’s. It’s all very exciting, but can be confusing to grasp and keep up with.

To cover all the concepts, we will be building an interactive CRUD app for managing contacts. Through the development process we will be learning each relevant concept step by step, and for each step use it to implement a feature in the application, until the application is completed.

## Who should join the workshop?

Designed for developers of all levels, this workshop provides practical skills to build scalable, performant web applications. Ideally you have some experience with React and JavaScript already.
`,
          people: [people.devlin, people.aurora],
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.WORKSHOP,
          title:
            "Designing and Implementing Practical Industry Level Frontend AI solutions",
          description: `This workshop provides an intensive, hands-on experience focused on selecting, implementing, and optimizing AI-driven features in modern applications. You’ll learn how to choose the best Large Language Model (LLM) knowledge retrieval method, whether prompt engineering, Retrieval-Augmented Generation (RAG), or fine-tuning, by understanding their specific strengths, limitations, and ideal use cases. We’ll dive into concrete applications in sectors like healthcare and government, and explore how to choose high-performance, real-time backend languages tailored for AI applications. Should you go with Go, Rust, Zig, Nim, or Swift? Through benchmarking and performance analysis, you’ll be prepared to justify your language choice, from developer experience and prototyping speed to overall system performance, ensuring a fast and responsive AI-powered application.

## Takeaways

By the end of this workshop, you’ll be able to:

* Select the most effective LLM knowledge retrieval technique for your use case, with a clear understanding of the pros and cons of each option.
* Build secure, privacy-compliant browser extensions using locally loaded language models on the browser.
* Design a UI component that enhances user experience through adaptive predictive text.
* Choose the best high-performance systems language for real-time AI backends, using developer experience, prototyping speed, and benchmarking metrics to guide your choice.

## Content Outline

* Optimizing AI Integration for UI: We’ll break down advanced AI strategies for user interfaces by comparing prompt engineering, RAG, and fine-tuning. Each method is examined through hands-on use cases with a straightforward pros-and-cons analysis, helping you pick the best approach for your needs and align each technique with real-world applications for optimal performance.
* Browser Extension for Data Interaction: Build a browser extension that directly interacts with displayed data and leverages a local language model layer. Focused on privacy-compliant use cases in critical sectors like healthcare and government, this segment demonstrates how to meet data security requirements by running models directly within the browser, achieving both usability and data ownership.
* Adaptive Text and Predictive Prompts: Implement adaptive text prediction and ghost prompts that adjust to user input, inspired by tools like GitHub Copilot and Gmail’s Smart Compose. This part emphasizes customization of predictive elements tailored to your application’s requirements, enhancing user engagement and responsiveness.
* Choosing the Right Language for Real-Time AI Backends: We’ll review the top contenders for real-time AI backend development, prioritizing safe, compiled languages over JavaScript, PHP, and Python. You’ll get a detailed look at the performance and safety advantages of Go, Rust, Nim, Zig, and Swift, with guidance on benchmarking to select the ideal language for high-performance, real-time AI applications.

## Target Audience: intermediate/advanced

This workshop is for developers familiar with basic AI concepts and have proficient experience with one or more web frameworks, and master proficiently in one or more programming languages, and want to deepen their skills in AI-driven UI customization. Also suitable for project managers and architects and senior developers looking to broaden and discover new ideas and applications.

**Not for:** Those with no prior experience in AI, backend languages, or web development basics, or those looking exclusively for beginner-level or purely theoretical content.`,
          people: [people.zak],
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
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
* Use cases

## Who should join the workshop?

You’re a Designer, Tech Leader, Architect, or Tech Writer working within a Design System-compatible ecosystem, but you’re facing challenges in implementing a Design System philosophy due to legacy stacks, components, and stakeholders. We’ve got you covered with practical strategies and frameworks to help you move forward. Bring your own use cases, and we’ll work through them together!`,
          people: [people.thaisSantos, people.m4Dz],
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS],
        },
        {
          type: SessionType.WORKSHOP,
          title:
            "Human and machine: Undoing the impact of living a tech-native life",
          description: `Living a tech-native life comes with a cost to ourselves. There is plenty of research showing that our spine and joint health is deterioring faster than ever, due to our continuous use of electronic devices. This effect has been described by health professionals as an epidemic, and sitting is being described as worse than smoking. Given this background, what can we do to live a lifetime of ability free of pain and injuries?

This workshop has been designed to allow you to create habits that propel you to the right direction. It is based on 20% of theory and 80% of practice so you can try out the ideas. By joining this workshop, you will gain the following learnings:

- A fundamental understanding of key anatomical facts about the different systems that suffer when we deprive ourselves of movement.
- Awareness exercises to train your preprioception (your ability to understand what is going on with your body).
- Simple but effective joint mobility and movement exercises to reset your body on a daily basis, from the imprints of stress and the sitting posture.

## Quick FAQ

**1. Are there physical requirements to join the workshop?**

Any fitness level is appropriate, because none of the exercises shown in the workshop will be particularly demanding. If in doubt, please consult your physician. Other than that, come along!

**2. What should I wear?**

Please wear a comfortable outfit that allows you to move freely.`,
          people: [people.georgios],
          keywords: [Keyword.PERSONAL_DEVELOPMENT],
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
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Evolving Design Tools and the Future of Digital Product Design",
          description:
            "The designers' toolbox has evolved significantly over the years, much like JavaScript technologies. It has progressed from creating static JPEG images for website designs to prototyping interfaces and handing over full code directly from design tools. These platforms have revolutionized how designers visualize interactions and embraced the concept of components, aka design systems, to ensure consistency and efficiency. By allowing designers to distribute reusable elements and styles much like developers do, these tools have advanced to close the collaboration gap between the two disciplines. In this talk, we'll explore the contemporary workflow of designers, highlighting the dynamic collaboration facilitated by tools like Figma. Looking ahead, as the trend of integrating 3D elements into digital interfaces grows, we'll discuss how upcoming platforms such as Unity are becoming increasingly relevant. Finally, we'll spotlight the rapid advancements in AI and their transformative effects on the design landscape. Join us to gain a comprehensive understanding of the current state and future direction of digital product design, and learn how to effectively navigate and integrate these innovations into your workflow.",
          people: [people.thaisSantos],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS, Keyword.AI],
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
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS, Keyword.AI],
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
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
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
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
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
          keywords: [Keyword.AI, Keyword.DEVELOPMENT],
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
          keywords: [Keyword.PERSONAL_DEVELOPMENT],
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
          keywords: [Keyword.PERSONAL_DEVELOPMENT],
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
          keywords: [Keyword.PERSONAL_DEVELOPMENT],
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
          keywords: [Keyword.DEVELOPMENT],
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
          keywords: [Keyword.DEVELOPMENT],
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
          keywords: [Keyword.DEVELOPMENT],
        },
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "GrayWall Strategy: Securing Your Frontend from Pentesters and Reverse Engineers",
          description:
            "This talk will share strategies on how to harden your frontend to block pentesters and reverse engineers by reducing what’s exposed to the client. We’ll walk through concrete steps, like cutting down API exposure by handling data in memory on the server side instead of sending it to the client, using Go with Cap'n'Proto for fast, secure in-memory operations. We'll cover how compiled languages and a binary server will make your server and application more secure and safer. We’ll cover how server-side rendering can reduce attack surfaces, and how switching from traditional HTTP APIs to gRPC and WebSockets limits what attackers can reverse-engineer. You’ll also see a real example of how we rebuilt a system after a ransomware attack, shifting from a vulnerable API setup to a secure, server-focused architecture.",
          people: [people.zak],
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
          people: [people.juhani, people.zak],
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
