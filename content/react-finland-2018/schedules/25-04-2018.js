const enums = require("../../../src/enums");

module.exports = {
  day: "2018-04-25",
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
          type: enums.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [require("../sessions/jani-evakallio")],
    },
    {
      begin: "10:00",
      end: "10:45",
      sessions: [require("../sessions/christian-alfoni")],
    },
    {
      begin: "11:00",
      end: "11:10",
      sessions: [require("../sessions/michel-weststrate")],
    },
    {
      begin: "11:10",
      end: "11:20",
      sessions: [require("../sessions/patrick-hund")],
    },
    {
      begin: "11:20",
      end: "11:30",
      sessions: [require("../sessions/eemeli-aro")],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: enums.LUNCH,
          title: "Lunch",
          description: "It's functional. You are **not** supposed to like it.",
        },
      ],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [require("../sessions/kasia-jastrzebska")],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [require("../sessions/sia-karamalegos")],
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
      end: "15:30",
      sessions: [require("../sessions/sara-vieira")],
    },
    {
      begin: "15:45",
      end: "16:15",
      sessions: [require("../sessions/rotem-mizrachi-meidan")],
    },
    {
      begin: "16:15",
      end: "16:45",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Coffee break",
          description:
            "Other beverages are available too although black coffee is our favorite.",
        },
      ],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [require("../sessions/andrey-okonetchnikov")],
    },
    {
      begin: "17:00",
      end: "17:15",
      sessions: [require("../sessions/sven-sauleau")],
    },
    {
      begin: "17:15",
      end: "17:30",
      sessions: [require("../sessions/eemeli-aro-2")],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: enums.PANEL,
          title: "Panel",
          description: "Panel discussion to end the day",
        },
      ],
    },
  ],
};
