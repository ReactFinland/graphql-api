import { SessionType } from "../../../server/schema";
import { Schedule } from "../../../server/schema/Schedule";
import * as people from "../../people";
import * as sessions from "../sessions";

const workshops = [
  sessions.andreyAndArtemWorkshop,
  sessions.davidKhourshidWorkshop,
  sessions.glennReyesWorkshop,
  sessions.nikWorkshop,
  sessions.michelWorkshop,
  sessions.patrickWorkshop,
  sessions.siaKaramalegosWorkshop,
];

const workshopDay: Schedule = {
  day: "2019-04-24",
  description: "Workshop day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
        },
      ],
    },
    {
      begin: "09:00",
      end: "11:30",
      sessions: workshops,
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      sessions: workshops,
    },
    {
      begin: "14:00",
      end: "14:20",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "14:20",
      end: "15:40",
      sessions: workshops,
    },
    {
      begin: "15:40",
      end: "16:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      sessions: workshops,
    },
  ],
};

const presentationDay1: Schedule = {
  day: "2019-04-25",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          speakers: [people.janiEvakallio],
          title: "Opening",
          description: "Opening the day with Jani Eväkallio, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "State management",
      sessions: [
        sessions.michelWeststrate,
        sessions.davidKhourshid,
        sessions.lucaMatteis,
      ],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, live long and prosper",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Testing",
      sessions: [
        sessions.juhaLinnanen,
        sessions.maaretPyhajarvi,
        sessions.manuelMatuzovic,
      ],
    },
    {
      begin: "12:15",
      end: "13:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at GraphQL Finland",
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:30",
      title: "Design Systems",
      sessions: [sessions.varyaStepanova, sessions.andreyOkonetchnikov],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Case Studies",
      sessions: [sessions.nikGraf, sessions.kadiKraman, sessions.glennReyes,
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee if you still can.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:30",
      title: "Visual",
      sessions: [sessions.brunoLourenco, sessions.teroParviainen],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
    {
      begin: "18:00",
      end: "22:00",
      sessions: [
        {
          speakers: [people.janiEvakallio],
          title: "#componentDidSmoosh",
          description:
            "React has a new lifecycle method, `componentDidSmoosh`. Learn all about it.",
          type: SessionType.PARTY,
        },
      ],
    },
  ],
};

const presentationDay2: Schedule = {
  day: "2019-04-26",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          speakers: [people.saraVieira],
          title: "Opening",
          description: "Opening the day with Sara Vieira, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "React Native",
      sessions: [
        sessions.rickHanlon,
        sessions.jamonHolmgren,
        sessions.villeImmonen,
      ],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Finnish coffee is darker than you think.",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Tooling",
      sessions: [sessions.carolynStransky, sessions.monicaLent],
    },
    {
      begin: "12:15",
      end: "13:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Hopefully it's as disappointing as day before.",
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:30",
      title: "Design Systems",
      sessions: [sessions.artemSapegin, sessions.artemZakharchenko],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Performance",
      sessions: [sessions.annaDoubkova, sessions.siaKaramalegos],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee if you still can.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:30",
      title: "Universal React",
      sessions: [
        sessions.tomasKonrady,
        sessions.tejasKumar,
        sessions.mikeBerman,
      ],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
  ],
};

export default [workshopDay, presentationDay1, presentationDay2];
