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

const mc = people.saraVieira;
const firstSpeaker = people.davidKhourshid;
const secondSpeaker = people.yan;
const thirdSpeaker = people.christianAlfoni;
const allSpeakers = [firstSpeaker, secondSpeaker, thirdSpeaker];

// TODO: Once schedule is clear, update this
const miniConferenceDay2: Schedule = {
  day: "2020-08-27",
  description: "Mini-conference #2 - State management",
  location: locations.internet,
  intervals: [
    {
      begin: "16:45",
      end: "17:30",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Introduction to statecharts",
          description: "Premium only",
          people: [firstSpeaker],
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
      end: "18:20",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Everything is an Actor",
          description: `If the word "async" scares you, you're not alone. Time is the one variable that introduces the most complexity in software. Thankfully, the Actor Model can hold the key to simplifying the reactive apps we work on. Learn how this nearly 50-year-old event-driven model can improve the way we architect complex apps.`,
          people: [firstSpeaker],
        },
      ],
    },
    {
      begin: "18:20",
      end: "18:30",
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
      begin: "18:30",
      end: "19:00",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Dive in Effector",
          description:
            "What is Effector and why you might want to use it in your project?",
          people: [secondSpeaker],
        },
      ],
    },
    {
      begin: "19:00",
      end: "19:10",
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
      begin: "19:10",
      end: "19:40",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Stitches",
          description: "Learn what the new css-in-js solution is about",
          people: [thirdSpeaker],
        },
      ],
    },
    {
      begin: "19:40",
      end: "19:50",
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
      begin: "19:50",
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
          title: "Zoom with attendees",
          description: "",
          people: [],
        },
      ],
    },
  ],
};

export default [miniConferenceDay2];
