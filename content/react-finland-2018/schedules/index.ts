import { SessionType } from "../../../server/schema";
import * as sessions from "../sessions";

const workshopDay = {
  day: "2018-04-24",
  description: "Workshop day",
  intervals: [
    {
      begin: "09:00",
      end: "13:00",
      sessions: [
        sessions.andreyAndArtem,
        sessions.davidKhourshidWorkshop,
        sessions.gantLabordeWorkshop,
        sessions.juhoVepsalainenWorkshop,
        sessions.patrickAndNik,
        sessions.saraVieiraWorkshop,
        sessions.siaKaramalegosWorkshop,
      ],
    },
    {
      begin: "14:00",
      end: "18:00",
      sessions: [
        sessions.andreyAndArtem,
        sessions.davidKhourshidWorkshop,
        sessions.gantLabordeWorkshop,
        sessions.juhoVepsalainenWorkshop,
        sessions.patrickAndNik,
        sessions.rotemMizrachiMeidanWorkshop,
        sessions.siaKaramalegosWorkshop,
        sessions.svenSauleauWorkshop,
      ],
    },
    {
      begin: "09:00",
      end: "18:00",
      sessions: [sessions.michelWeststrateWorkshop],
    },
  ],
};

const presentationDay1 = {
  day: "2018-04-25",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.BREAKFAST,
          title: "Registration, Finnish breakfast.",
          description: "Trust me, it's the best.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [sessions.janiEvakallio],
    },
    {
      begin: "10:00",
      end: "10:45",
      sessions: [sessions.christianAlfoni],
    },
    {
      begin: "11:00",
      end: "11:10",
      sessions: [sessions.michelWeststrate],
    },
    {
      begin: "11:10",
      end: "11:20",
      sessions: [sessions.patrickHund],
    },
    {
      begin: "11:20",
      end: "11:30",
      sessions: [sessions.eemeliAro],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "It's functional. You are **not** supposed to like it.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [sessions.kasiaJastrzebska],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [sessions.siaKaramalegos],
    },
    {
      begin: "14:15",
      end: "14:45",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Coffee break",
          description:
            "We don't mind if you drink tea, though. Water is available as well.",
        },
      ],
    },
    {
      begin: "14:45",
      end: "15:30",
      sessions: [sessions.saraVieira],
    },
    {
      begin: "15:45",
      end: "16:15",
      sessions: [sessions.rotemMizrachiMeidan],
    },
    {
      begin: "16:15",
      end: "16:45",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Coffee break",
          description:
            "Other beverages are available too although black coffee is our favorite.",
        },
      ],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [sessions.andreyOkonetchnikov],
    },
    {
      begin: "17:00",
      end: "17:15",
      sessions: [sessions.svenSauleau],
    },
    {
      begin: "17:15",
      end: "17:30",
      sessions: [sessions.eemeliAro2],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "Panel discussion to end the day",
        },
      ],
    },
  ],
};

const presentationDay2 = {
  day: "2018-04-26",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.BREAKFAST,
          title: "Registration, Finnish breakfast.",
          description: "Trust me, it's the best still.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [sessions.kenWheeler],
    },
    {
      begin: "09:45",
      end: "10:00",
      sessions: [sessions.juhoVepsalainen],
    },
    {
      begin: "10:15",
      end: "10:45",
      sessions: [sessions.nikGraf],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [sessions.patrickStapfer],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "You might like it better this time",
        },
      ],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [sessions.davidKhourshid],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [sessions.shayKeinan],
    },
    {
      begin: "14:15",
      end: "14:45",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Coffee break",
          description:
            "We don't mind if you drink tea, though. Water is available as well.",
        },
      ],
    },
    {
      begin: "14:45",
      end: "15:15",
      sessions: [sessions.michalChudziak],
    },
    {
      begin: "15:15",
      end: "15:30",
      sessions: [sessions.toniRistola],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [sessions.gantLaborde],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [sessions.varyaStepanova],
    },
    {
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "Panel discussion to end the conference",
        },
      ],
    },
    {
      begin: "18:30",
      end: "18:45",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Buses leave to after party (Sea Life, Tivolikuja 10)",
        },
      ],
    },
  ],
};

export default [workshopDay, presentationDay1, presentationDay2];
