import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";
// import * as allWorkshops from "./workshops";

/*
const workshopDay1: Schedule = {
  day: "2020-05-25",
  description: "First conference day",
  location: locations.internet,
  intervals: [
    {
      begin: "10:00",
      end: "14:00",
      sessions: [allWorkshops.fromLegacyToReact],
    },
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.designSystems101],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.modernForms],
    },
  ],
};

const workshopDay2: Schedule = {
  day: "2020-05-26",
  description: "Second workshop day",
  location: locations.internet,
  intervals: [
    {
      begin: "09:00",
      end: "16:00",
      sessions: [allWorkshops.advancedReact],
    },
    {
      begin: "10:00",
      end: "14:00",
      sessions: [allWorkshops.fromLegacyToReact],
    },
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.designSystems],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.statecharts],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.modernForms],
    },
  ],
};

const workshopDay3: Schedule = {
  day: "2020-05-27",
  description: "Third workshop day",
  location: locations.internet,
  intervals: [
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.resilientLibs],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.statecharts],
    },
  ],
};

const miniConferenceDay1: Schedule = {
  day: "2020-05-28",
  description: "Mini-conference #1 - Documentation",
  location: locations.internet,
  intervals: [
    {
      begin: "17:00",
      end: "17:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Preparation",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "17:15",
      end: "17:40",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Fireside chat",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "17:40",
      end: "17:45",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Introduction",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "17:45",
      end: "18:15",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Humanizing Your Documentation",
          description: "",
          people: [people.carolynStransky],
        },
      ],
    },
    {
      begin: "18:15",
      end: "18:30",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "18:30",
      end: "19:00",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Documentation in legacy react code - A love/hate paradigm",
          description: "",
          people: [people.kenigboloMeyaStephen],
        },
      ],
    },
    {
      begin: "19:00",
      end: "19:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "19:15",
      end: "19:45",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Going beyond Redux. Diversify frontend state management.",
          description: "",
          people: [people.margarita],
        },
      ],
    },
    {
      begin: "19:45",
      end: "20:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "",
          people: [],
        },
      ],
    },
    {
      begin: "20:00",
      end: "20:30",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Panel",
          description: "",
          people: [
            people.carolynStransky,
            people.kenigboloMeyaStephen,
            people.margarita,
          ],
        },
      ],
    },
    {
      begin: "20:30",
      end: "21:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Wrap up",
          description: "",
          people: [],
        },
      ],
    },
  ],
};
*/

const mc = people.janiEvakallio;
const jv = people.juhoVepsalainen;
const firstSpeaker = people.shodipo;
const secondSpeaker = people.yang;
const thirdSpeaker = people.lauraGonzalez;
const allSpeakers = [firstSpeaker, secondSpeaker, thirdSpeaker];

// TODO: Once schedule is clear, update this
const miniConferenceDay2: Schedule = {
  day: "2020-09-22",
  description: "Mini-conference #3 - Design systems",
  location: locations.internet,
  intervals: [
    {
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Introduction to design systems",
          description: "Premium only",
          people: [mc, jv],
        },
      ],
    },
    {
      begin: "17:30",
      end: "17:40",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Fireside chat",
          description: "",
          people: [mc].concat(allSpeakers),
        },
      ],
    },
    {
      begin: "17:40",
      end: "17:45",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Introduction",
          description: "",
          people: [mc],
        },
      ],
    },
    {
      begin: "17:45",
      end: "18:15",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Design from the dimension of open-source",
          description: `Getting into an open-source can be quite intimidating as a designer. It’s not something that you can just wake up in the morning and start doing if you’ve never been a designer before. From a high level, let’s “design” our first open-source project, complete with quick methodologies, tips, tricks, and some extra bits.

This talk was crafted with the aim of lowering some of the barriers for designers to contribute to open-source, How designers can actually contribute to open-source “live-designing” and providing some direction and resources to help people get started with contributing to design from a realm of open-source.

**Key Take-Aways:**

- How not to be intimidated as a designer in open-source.
- Tools to enable designers to contribute to OSS.
- How to inspect design.
- Designing and implementing a feature to production as a designer on an enterprise product.
- Getting started with designing for designers.
- Building/joining a Designers Community as a Designer contributing to open-source.`,
          people: [firstSpeaker],
        },
      ],
    },
    {
      begin: "18:15",
      end: "18:25",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "Premium only",
          people: [mc, firstSpeaker],
        },
      ],
    },
    {
      begin: "18:25",
      end: "18:55",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Building React UIs visually",
          description: `Design tools are fast and amazing tools for thought, but for a host of reasons are limited to creating drawings rather than production assets. Engineers must instead re-create surfaces from scratch, by hand, using code. This inevitably leads to discrepancies and back-and-forth with the design team, and ultimately two sources of truth that are never truly in sync.

Plasmic is a tool to build UIs visually, currently in heavy development. It loosely resembles a design tool and aims to give the same sense of speedy iteration, but is for building maintainable, production-ready presentational components. The idea is to give developers a better and faster development experience, eliminate an entire class of visual bugs/QA/tooling, and ultimately maintain a single source of truth with design. This talk will also cover some of the challenges with building such a tool (which itself is a React application).`,
          people: [secondSpeaker],
        },
      ],
    },
    {
      begin: "18:55",
      end: "19:05",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "Premium only",
          people: [mc, secondSpeaker],
        },
      ],
    },
    {
      begin: "19:05",
      end: "19:35",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Guerrilla Design Systems",
          description: "",
          people: [thirdSpeaker],
        },
      ],
    },
    {
      begin: "19:35",
      end: "19:45",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "QA",
          description: "Premium only",
          people: [mc, thirdSpeaker],
        },
      ],
    },
    {
      begin: "19:45",
      end: "20:10",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Panel",
          description: "Premium only",
          people: [mc].concat(allSpeakers),
        },
      ],
    },
    {
      begin: "20:10",
      end: "20:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Outro",
          description: "",
          people: [mc].concat(allSpeakers),
        },
      ],
    },
    {
      begin: "20:15",
      end: "20:45",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Zoom with attendees. Join through Slack!",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

export default [miniConferenceDay2];
