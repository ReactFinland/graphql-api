import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

const mc = people.juhoVepsalainen;
const firstSpeaker = people.lukeJackson;
const secondSpeaker = people.diegoHaz;
const thirdSpeaker = people.mikhailNovikov;
const allSpeakers = [firstSpeaker, secondSpeaker, thirdSpeaker];

const miniConferenceDay: Schedule = {
  day: "2020-10-28",
  description: "Mini-conference #4 - Lessons learned",
  location: locations.internet,
  intervals: [
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
          title: "Reakit – Toolkit for building accessible UIs",
          description: ``,
          people: [secondSpeaker],
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
          people: [mc, secondSpeaker],
        },
      ],
    },
    {
      begin: "18:25",
      end: "18:55",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Oceanwind",
          description: ``,
          people: [mc, firstSpeaker],
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
          people: [mc, firstSpeaker],
        },
      ],
    },
    {
      begin: "19:05",
      end: "19:35",
      sessions: [
        {
          type: SessionType.TALK,
          title: "Lessons learned from burnout",
          description: ``,
          people: [mc, thirdSpeaker],
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
          people: [mc],
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

export default [miniConferenceDay];
