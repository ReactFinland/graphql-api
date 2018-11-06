const enums = require("../../../src/enums");

module.exports = {
  day: "2018-04-26",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: enums.BREAKFAST,
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
          type: enums.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [require("../sessions/ken-wheeler")],
    },
    {
      begin: "09:45",
      end: "10:00",
      sessions: [require("../sessions/juho-vepsalainen")],
    },
    {
      begin: "10:15",
      end: "10:45",
      sessions: [require("../sessions/nik-graf")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [require("../sessions/patrick-stapfer")],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: enums.LUNCH,
          title: "Lunch",
          description: "You might like it better this time",
        },
      ],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [require("../sessions/david-khourshid")],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [require("../sessions/shay-keinan")],
    },
    {
      begin: "14:15",
      end: "14:45",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Coffee break",
          description:
            "We don't mind if you drink tea, though. Water is available as well.",
        },
      ],
    },
    {
      begin: "14:45",
      end: "15:15",
      sessions: [require("../sessions/michal-chudziak")],
    },
    {
      begin: "15:15",
      end: "15:30",
      sessions: [require("../sessions/toni-ristola")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../sessions/gant-laborde")],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [require("../sessions/varya-stepanova")],
    },
    {
      begin: "17:00",
      end: "17:30",
      sessions: [
        {
          type: enums.PANEL,
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
          type: enums.ORGANIZATIONAL,
          title: "Buses leave to after party (Sea Life, Tivolikuja 10)",
        },
      ],
    },
  ],
};
