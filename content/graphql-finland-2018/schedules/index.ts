import { SessionType } from "../../../server/schema";
import * as sessions from "../sessions";

const workshops = [
  sessions.juhoVepsalainenIntroToGraphql,
  sessions.nikGrafAdvancedGraphql,
  sessions.marcGirouxGraphqlSchemaDesign,
  sessions.mikhailNovikovBuildingGraphqlServer,
];

const workshopDay = {
  day: "2018-10-18",
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

const presentationDay = {
  day: "2018-10-19",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.BREAKFAST,
          title: "Registration, Finnish breakfast.",
          description:
            "We are contractually obligated to say that it's the best",
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
      sessions: [sessions.adamMiskiewicz],
    },
    {
      begin: "09:45",
      end: "10:15",
      sessions: [sessions.ellieDay],
    },
    {
      begin: "10:15",
      end: "10:30",
      sessions: [sessions.kadiKraman],
    },
    {
      begin: "10:30",
      end: "11:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: `Relax and practice your Finnish
  
  <dl  class="glossary">
    <dt>kahvi</dt><dd>coffee</dd>
    <dt>no niin</dt><dd>yes</dd>
    <dt>no niin</dt><dd>no</dd>
    <dt>no niin</dt><dd>maybe</dd>
  </dl>`,
        },
      ],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [sessions.carolynStransky],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [sessions.jimmyJia],
    },

    {
      begin: "12:00",
      end: "13:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at React Finland",
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:00",
      sessions: [sessions.glennReyes],
    },
    {
      begin: "14:00",
      end: "14:15",
      sessions: [sessions.helenZhukova],
    },
    {
      begin: "14:15",
      end: "14:30",
      sessions: [sessions.johannesSchickling],
    },
    {
      begin: "14:30",
      end: "14:45",
      sessions: [sessions.andrewRhyne],
    },

    {
      begin: "14:45",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: `Relax and practice your Swedish
  
  <dl  class="glossary">
    <dt>Jag talar inte svenska<dt><dd>I don't speak Swedish</dd>
    <dt>Jag har misslyckats obligatorisk svenska på universitetet</dt><dd>I have failed compulsory Swedish courses at the university</dd>
  </dl>`,
        },
      ],
    },
    {
      begin: "15:00",
      end: "15:15",
      sessions: [sessions.ivanGoncharov],
    },
    {
      begin: "15:15",
      end: "15:30",
      sessions: [sessions.nikGraf],
    },
    {
      begin: "15:30",
      end: "15:45",
      sessions: [sessions.christofferNiska],
    },
    {
      begin: "15:45",
      end: "16:00",
      sessions: [sessions.tanmaiGopal],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: `Continue relaxing, this time with pastries
  
  <dl class="glossary">
    <dt>JavaScript</dt><dd>jässä</dd>
    <dt>Python</dt><dd>pewthon</dd>
    <dt>Java</dt><dd>yava</dd>
  </dl>`,
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:00",
      sessions: [sessions.eloyDuran],
    },
    {
      begin: "17:00",
      end: "17:15",
      sessions: [sessions.benjieGillam],
    },
    {
      begin: "17:15",
      end: "17:45",
      sessions: [sessions.danSchafer],
    },
    {
      begin: "18:00",
      end: "24:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Afterparty at Gofore office",
          description: `Last chance to practice your Finnish!
  
  <dl  class="glossary">
    <dt>Tuoppi</dt><dd>a glass of a beverage (beer)</dd>
    <dt>Mörkkis</dt><dd>a feeling of regret for what you said or did at the party last night</dd>
  </dl>
  
  Afterparty is graciously hosted by our sponsors Gofore and will be at their office (Urho Kekkosen katu 7B). There will be buses to take you there, alternatively you could walk.
  `,
        },
      ],
    },
  ],
};

export default [workshopDay, presentationDay];
