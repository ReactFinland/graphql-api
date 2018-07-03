const enums = require("../../../src/enums");

module.exports = {
  day: "2018-10-18",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: enums.BREAKFAST,
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
          type: enums.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [
        {
          type: enums.KEYNOTE,
          title: "Adopting GraphQL in large codebases",
          description:
            "Airbnb has more than 1 million non-node module lines of code. This is a story of how Airbnb adopted GraphQL within the scope of such codebase.",
          speakers: [require("../people/adam-miskiewicz")],
        },
      ],
    },
    {
      begin: "09:45",
      end: "10:00",
      sessions: [
        {
          type: enums.LIGHTNING_TALK,

          title: "Reason and GraphQL",
          speakers: [require("../people/nik-graf")],
        },
      ],
    },
    {
      begin: "10:00",
      end: "10:15",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Relax and practice your Finnish",
        },
      ],
    },
    {
      begin: "10:15",
      end: "10:45",
      sessions: [
        {
          type: enums.TALK,
          title: "GraphQL Documentation",
          speakers: [require("../people/carolyn-stransky")],
        },
      ],
    },
    {
      begin: "10:45",
      end: "11:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Relax and practice your Swedish (please don't)",
        },
      ],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [
        {
          type: enums.TALK,
          title: "Avoiding waterfall",
          speakers: [require("../people/jimmy-jia")],
        },
      ],
    },
    {
      begin: "11:30",
      end: "13:00",
      sessions: [
        {
          type: enums.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at React Finland",
        },
      ],
    },
    {
      begin: "13:00",
      end: "13:30",
      sessions: [
        {
          type: enums.TALK,
          title: "Unannounced, but fantastic talk",
          speakers: [require("../people/glenn-reyes")],
        },
      ],
    },
    {
      begin: "13:30",
      end: "13:45",
      sessions: [
        {
          type: enums.LIGHTNING_TALK,
          title: "GraphQL CMS",
          speakers: [require("../people/kadi-kraman")],
        },
      ],
    },
    {
      begin: "13:45",
      end: "14:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Continue relaxing",
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:30",
      sessions: [
        {
          type: enums.TALK,
          title: "Unannounced, but amazing talk",
          speakers: [require("../people/eloy-duran")],
        },
      ],
    },
    {
      begin: "14:30",
      end: "14:45",
      sessions: [
        {
          type: enums.LIGHTNING_TALK,
          title: "Derived data with GraphQL",
          speakers: [require("../people/helen-zhukova")],
        },
      ],
    },
    {
      begin: "14:45",
      end: "15:15",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "This one even has pastries!",
        },
      ],
    },
    {
      begin: "15:15",
      end: "15:45",
      sessions: [
        {
          type: enums.TALK,
          title: "Unanounced, but mind-blowing talk by mystery speaker",
        },
      ],
    },
    {
      begin: "15:45",
      end: "16:00",
      sessions: [
        {
          type: enums.LIGHTNING_TALK,
          title: "graphql-php",
        },
      ],
    },
    {
      begin: "16:00",
      end: "16:15",
      sessions: [require("../sessions/benjie-gillam.js")],
    },
    {
      begin: "16:15",
      end: "16:30",
      sessions: [require("../sessions/ivan-goncharov")],
    },
    {
      begin: "16:30",
      end: "16:45",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Last one, I promise!",
        },
      ],
    },
    {
      begin: "16:45",
      end: "17:15",
      sessions: [
        {
          type: enums.KEYNOTE,
          title: "Unannounced, but inspiring closing keynote",
        },
      ],
    },
    {
      begin: "17:15",
      end: "17:30",
      sessions: [
        {
          type: enums.PANEL,
          title: "Panel",
          description: "Ask your questions and speakers will answer",
        },
      ],
    },
    {
      begin: "18:00",
      end: "24:00",
      sessions: [
        {
          type: enums.PARTY,
          title: "Afterparty",
          description:
            "Mörkis (n) - a feeling of regret for what you said or did at the party last night",
        },
      ],
    },
  ],
};
