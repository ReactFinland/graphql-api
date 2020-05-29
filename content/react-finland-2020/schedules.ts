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

// TODO: Once schedule is clear, update this
const miniConferenceDay2: Schedule = {
  day: "2020-06-24",
  description: "Mini-conference #2 - State management",
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
          title: "",
          description: "",
          people: [people.davidKhourshid],
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
          title: "",
          description: "",
          people: [people.christianAlfoni],
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
          title: "",
          description: "",
          people: [people.yan],
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
          people: [people.davidKhourshid, people.christianAlfoni, people.yan],
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

export default [miniConferenceDay2];
