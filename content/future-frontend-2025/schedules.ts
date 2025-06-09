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

## Testimonials

> I really like this workshop. I was able to touch the technology with that I didn't work on real projects and get the fresh information about the latest React version. Aurora is good and funny speaker.

> The topics presented were all very new and the trainer was well versed in all the concepts involved. She was very entertaining and kept you engaged at all times (helpful too!). It had everything such a workshop should have.

> Great experience! Aurora was really caring and helpful throughout the entire workshop, providing as much information as she should.
`,
          people: [people.devlin, people.aurora],
          keywords: [Keyword.DEVELOPMENT],
          location: locations.hbc,
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
          location: locations.nitor,
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

## Quick FAQ

**Who should join the workshop?**

You’re a Designer, Tech Leader, Architect, or Tech Writer working within a Design System-compatible ecosystem, but you’re facing challenges in implementing a Design System philosophy due to legacy stacks, components, and stakeholders. We’ve got you covered with practical strategies and frameworks to help you move forward. Bring your own use cases, and we’ll work through them together!

**Where does the workshop take place?**

The workshop is held at Dipoli, room Takka.`,
          people: [people.m4Dz, people.julien],
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS],
          location: locations.dipoli,
        },
        {
          type: SessionType.WORKSHOP,
          title:
            "Human and machine: Undoing the impact of living a tech-native life",
          description: `Living a tech-native life comes with a cost to ourselves. There is plenty of research showing that our spine and joint health is deterioring faster than ever, due to our continuous use of electronic devices. This effect has been described by health professionals as an epidemic, and sitting is being described as worse than smoking. Given this background, what can we do to live a lifetime of ability free of pain and injuries?

This workshop has been designed to allow you to create habits that propel you to the right direction. It is based on 20% of theory and 80% of practice so you can try out the ideas. By joining this workshop, you will gain the following learnings:

- A fundamental understanding of key anatomical facts about the different systems that suffer when we deprive ourselves of movement.
- Awareness exercises to train your proprioception (your ability to understand what is going on with your body).
- Simple but effective joint mobility and movement exercises to reset your body on a daily basis, from the imprints of stress and the sitting posture.

## Quick FAQ

**1. Are there physical requirements to join the workshop?**

Any fitness level is appropriate, because none of the exercises shown in the workshop will be particularly demanding. If in doubt, please consult your physician. Other than that, come along!

**2. What should I wear?**

Please wear a comfortable outfit that allows you to move freely.

**3. Where does the workshop take place?**

It's held at Business College Helsinki, Rautatieläisenkatu 5, 00520 Helsinki. Room 271.
`,
          people: [people.georgios],
          keywords: [Keyword.PERSONAL_DEVELOPMENT],
          location: locations.hbc,
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
          title:
            "Supercharge your debugging with the new features in Chrome’s DevTools",
          description: `The Chrome DevTool team have been releasing new features at a furious rate over the past year, especially in the Performance and AI spaces.

On the Performance side, the team has reimagined the Performance Panel with many new features including the all new Live Metrics view, Insights, and better collaborating features like annotations to name but a few.

AI is everywhere and DevTools is no exception with the addition of the AI assistance panel to assist developers with coding issues. Gone are the days of searching documentation and forums or guessing at solutions to see if they work. With Ask AI you no longer need to be a Performance or CSS expert to be able to fix issues!

You no doubt have seen some of these changes, but Ewa and Barry will take you through all the new features they can fit in and you’re sure to learn something to help supercharge your debugging!`,
          people: [people.ewa, people.barry],
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
          people: [people.ewa, people.barry],
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
      title: "Work-life balance",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Shifting the trajectory: Undoing the damage of working in front of a computer screen",
          description: `Many successful engineers that I know are overweight, unfit and with consistent issues with their lower back, spine, vision etc. For a time I thought I was immune to the effects of the sitting in a chair in front of a screen all day until I reached my personal tipping point.

What is the state of the art research telling us about our future as technology workers, and what can-should-need to be doing to shift the trajectory of our lives towards a healthy future where we can still move freely through life and pursue our dreams?`,
          people: [people.georgios],
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
          title:
            "Versatility for Work Well-Being: Balancing Physical and Mental Work",
          description: `In this inspiring and educational talk, Olavi shares his experiences on how versatile working has improved his well-being both mentally and physically. Olavi will talk about his journey as a lumberjack and web developer, and how he manages to enhance work well-being by combining two completely opposite fields and how for some parts they aren't that different after all. Join Olavi to hear his story and gain fresh perspectives on entrepreneurship and work-life balance.`,
          people: [people.olavi],
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
          title:
            "Building Future-Proof Design Systems: A Practical Guide to Framework Independence",
          description: `So you want to build a Design System for your company? That’s awesome! A library of components and guidelines shared between designers and developers will boost everyone’s productivity. But here’s the big question: how do you implement a Design System that won’t tie you to the JavaScript tools you’re using today?

In this talk, we’ll explore practical strategies to future-proof your Design System and overcome JavaScript Fatigue. A hint: use the platform! We’ll talk about design tokens, CSS, package architecture, and Web Components to build a Design System that lasts. Switching to a new JS framework? No problem. Dropping TailwindCSS? Easy. Just working with plain HTML? Absolutely!

This session is aimed at large-scale Design Systems used by multiple teams across different frameworks, but many of these techniques can be applied to smaller systems too.`,
          people: [people.julien],
          urls: {
            drawing: "",
            slides: "",
            video: "",
          },
          keywords: [
            Keyword.DESIGN,
            Keyword.DESIGN_SYSTEMS,
            Keyword.WEB_COMPONENTS,
            Keyword.ARCHITECTURE,
            Keyword.TOOLING,
          ],
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
          keywords: [Keyword.DESIGN, Keyword.DESIGN_SYSTEMS],
        },
        {
          type: SessionType.PANEL,
          level: Level.INTERMEDIATE,
          title: "QA",
          description: ``,
          people: [people.m4Dz, people.julien, people.joonas],
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
          title: "Motion control with multimodal LLMs",
          description: `What if you could use multimodal LLMs to interact with websites or IoT devices using motion control?

As advancements in multimodal AI offer new opportunities to push the boundaries of what can be done with this technology, I started wondering how it could be leveraged from the perspective of human-computer interaction.

In this talk, I will take you through my research experimenting with building motion-controlled prototypes using LLMs in JavaScript.
`,
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
          title:
            "Listening to Imaginary Places: How to Explore AI-Generated Soundscapes In Your Browser",
          description: `Imagine the sound of a forest meadow. Or a crackling fireplace. Or a street corner in your favourite city. Or the bottom of the sea. Or the cargo hold of a drifting interstellar spaceship. What does it sound like there?

Well, thanks to the increasingly strange technologies we now have in our hands, we can now just go to these places and listen to them - kind of! We can generate machine portrayals of all kinds of places that exist, as well as places that definitely don't.

In this talk I'll give a technical runthrough of how an immersive sonic experience like this can be built with a combination of web technologies, generative audio models, foundation AI models, speech-to-text, prompt engineering, and a bit of magic.`,
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
    {
      begin: "15:00",
      end: "18:00",
      title: "Afterparty",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Sauna at AYY rantasauna",
          description:
            "The afterparty of the conference will be held at AYY rantasauna nearby (Jämeräntaival 5). There will be two saunas available. We will also make sure there will be something nice to drink and to eat.",
          location: locations.rantasauna,
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
      title: "React",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "Next.js, React Server Components, and TanStack Start: Building Fast, Modern Web Apps",
          description: `In this session, we’ll cover the latest updates in React frameworks to help you build fast, interactive applications. We’ll start with a quick overview of today’s web landscape and how different frameworks handle rendering strategies.

First, we’ll look at React Server Components (RSC) in Next.js 15, showing how RSC boosts app performance by rendering on the server and streaming components to the client in real-time. With the strategic use of modern React 19 features to optimize load times and interactivity, we’ll demonstrate how RSC can make your app more responsive.

Next, we’ll cover TanStack Start, which provides robust support for full-stack React apps. With type-safe routing via TanStack Router, smooth client-server communication, and built-in support for Server-Side Rendering (SSR) and RSC, TanStack Start enables fast, scalable applications. We’ll share real-world examples and demos to show how its server functions, streaming capabilities, and flexible deployment options—whether serverless or CDN-based—create a strong foundation for modern apps.

We’ll finish with a 15-minute Q&A. By the end, you’ll be up to speed on these tools and frameworks, helping you keep your React projects fast, interactive, and ready for the future.`,
          people: [people.aurora, people.devlin],
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
          people: [people.aurora, people.devlin],
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
      title: "Accessibility",
      sessions: [
        {
          type: SessionType.TALK,
          level: Level.INTERMEDIATE,
          title:
            "The Standards Behind Accessibility - Everything You Need to Know As a Developer",
          description: `Imagine if you could sit back, relax and learn about the legal side of accessibility without restraining yourself. Your dreams may just come true! Accessibility Specialist Marianna Österlund has done the reading for you and will brief you into the new EU-directive and the changes it brings into the legislation in different countries. But worry not, the talk is far from boring!

This talk is especially beneficial for anyone working in public services or e-commerce – but anyone in any field can benefit from it. Awareness leads to more inclusive digital services and improved human rights, especially for disabled people. Let's take the first step together!`,
          people: [people.marianna],
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
            "Clicks, Taps, and Swipes: How Accessibility Varies Across Digital Platforms",
          description: `Designing for accessibility is different on web and mobile platforms. Users rely on mouse, clicking, and using keyboards on the web, while mobile devices use taps, swipes, and gestures. These differences mean we need different approaches, like adjusting layouts for smaller screens or making touch navigation easier. What do these differences mean for how we make both web and mobile accessible?

In this talk, I will give you an overview of the differences between web and mobile accessibility. After listening to this talk, you'll know the first considerations when moving from desktop to mobile. Whether new to the topic or looking to expand your knowledge, this session will equip you with the tools to create more inclusive mobile experiences.`,
          people: [people.eevis],
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
          title:
            "Cyber Hygiene 101: Simple Steps for Safer Software Development",
          description: `In modern software development, writing secure code isn't just an option - it's essential. Cybercriminals continuously scan the internet for vulnerable systems, not caring if you're a large corporation or an independent developer working on a small project. Many mistakenly believe they're too insignificant to be targeted, but automated attacks don't discriminate. Everyone is a potential target, and proactive security measures are your best defense.

This talk examines how writing clean, high-quality code naturally strengthens security. We'll discuss how most security breaches can be prevented with basic cyber hygiene practices. Adopting best practices and modern frameworks can significantly reduce vulnerabilities.

We'll dive into threat modeling, explaining why it's a must-have step for every project, no matter how secure your code seems.  We'll also discuss the risks introduced by complexity and technical debt.

Finally, we'll explore how artificial intelligence is transforming code generation and quality assurance processes. While AI provides powerful tools to improve code quality, we'll emphasize that it doesn't replace the need for developers' vigilance and judgment.`,
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
          title: "In ten years, Internet browsers may be nostalgic memories",
          description: `“Information wants to be free,” but the internet has evolved from an open information highway into a congested maze of walled gardens, ad-powered content, and algorithmic manipulation. This is what Cory Doctorow terms "enshitification" and it happens to all products as they mature and are monetized. However, this complexity has created an opportunity for AI-powered solutions to put users back in the driver’s seat.

This talk explores how AI agents can transform our relationship with the internet, shifting from platform-centric to user-centric interactions. We'll examine how AI can create adaptive interfaces that adapt to individual needs and preferences while providing privacy and accessibility features unmatched by browser providers. We'll also dive into the technical implications of this shift, discussing how AI agents are using techniques honed by the web scraping community to bypass traditional data monopolies and extract content buried in HTML soup. We’ll explore emerging and existing technologies and methods for direct content distribution and access, from RSS feeds to the AT Protocol, and the infrastructure needed to support this new paradigm of internet interaction.

Discover how AI agents aren't just tools for automation—they're the key to reclaiming the internet's original promise of universal information accessibility while building a more user-centric digital future.`,
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
          title:
            "The Joy of Finally Finishing Something: Rebooting Myself by Restarting a Discarded Project",
          description: `We will share the journey of how embracing an unfinished side project helped us rebuild our relationship with coding and creativity during a period of burnout. This talk will delve into the how I finally transformed a discarded sewing project inspired by the soft polka-dotted art of Yayoi Kusama into an interactive musical artwork that invites touch in order to trigger musical elements. Using AI, these elements are combined together to form cohesive compositions, transforming playful physical interactions into harmonious music.

 Whether you are feeling creatively stuck or simply curious about blending art and technology, I hope this story inspires you to embrace your unfinished ideas and rediscover the joy of making.`,
          people: [people.stephanie, people.sebastian],
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
          people: [people.rachelNabors, people.stephanie, people.sebastian],
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
      begin: "14:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.MEETUP,
          title: "HelsinkiJS - May edition",
          description:
            "Local HelsinkiJS meetup takes place nearby at [Juurideli (Keilaranta 9)](https://www.google.com/maps/search/Juurideli%0AKeilaranta+9,+02150+Espoo,+Finland) (about 15 minute walk). You are welcome to join and you should [register at Meetabit](https://www.meetabit.com/events/helsinkijs-may-2025) in case you want to check out the local meetup scene.",
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

const thursday: Schedule = {
  day: "2025-05-29",
  description: "Thursday - public holiday",
  intervals: [],
};

const friday: Schedule = {
  day: "2025-05-30",
  description: "Friday",
  intervals: [
    {
      begin: "09:00",
      end: "12:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Doctoral defense of Juho Vepsäläinen",
          description: `The director of Future Frontend, Juho Vepsäläinen, will have his public doctoral defense about the topic "Emergence of hybrid rendering models in web application development" at Aalto University. [Register online.](https://www.meetabit.com/events/doctoral-defense-of-juho-vepsalainen)`,
        },
      ],
    },
  ],
};

export default [monday, tuesday, wednesday, thursday, friday];
