const enums = require("../../../src/enums");

const day = "2018-10-18";

module.exports = {
  day,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: enums.BREAKFAST,
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
          type: enums.LIGHTNING_TALK,
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
          title: "Keynote by mysterious unnannounced speaker",
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
          title: "Unnannounced, but fantastic",
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
        },
      ],
    },
    {
      begin: "14:00",
      end: "14:30",
      sessions: [
        {
          type: enums.TALK,
          title: "Unnannounced, but amazing",
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
          title: "Coffee Break",
        },
      ],
    },
    {
      begin: "15:15",
      end: "15:45",
      sessions: [
        {
          type: enums.TALK,
          title: "Unnanounced, but mind-blowing",
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
        },
      ],
    },
    {
      begin: "16:45",
      end: "17:15",
      sessions: [
        {
          type: enums.KEYNOTE,
          title: "Adopting GraphQL in large codebases",
          speakers: [require("../people/adam-miskiewicz")],
        },
      ],
    },
  ],
};
