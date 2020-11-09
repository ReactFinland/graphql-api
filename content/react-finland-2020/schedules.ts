import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";

const mc = people.juhoVepsalainen;
const firstSpeaker = people.milecia;
const secondSpeaker = people.nikGraf;
const thirdSpeaker = people.andreyG;
const allSpeakers = [firstSpeaker, secondSpeaker, thirdSpeaker];

const miniConferenceDay: Schedule = {
  day: "2020-12-02",
  description: "Mini-conference #5 - Performance",
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
          title: "Making Your React Apps Perform At Scale",
          description: `As you add more components to your React application, you'll start to notice performance issues. Maybe data isn't loading as fast or you notice that things are happening out of order. There are tools and techniques you can use to handle these kind of issue at a large scale. In this talk, attendees will learn how to analyze their React apps for solvable issues and learn some state management and async handling techniques.`,
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
          title: "Tips and tricks for optimizing your React application",
          description: `In this discussion, we'll go through various ideas on how to make your application perform better.`,

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
          title: "Optimizing a React application",
          description: `In this live session, we'll take an existing React application and then apply various techniques to improve its performance.`,
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
