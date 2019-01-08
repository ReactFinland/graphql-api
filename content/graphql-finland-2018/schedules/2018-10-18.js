const enums = require("../../../src/enums");

const workshops = [
  require("../sessions/juho-vepsalainen-intro-to-graphql"),
  require("../sessions/mikhail-novikov-building-graphql-server"),
  require("../sessions/marc-giroux-graphql-schema-design"),
  require("../sessions/nik-graf-advanced-graphql"),
];

module.exports = {
  day: "2018-10-18",
  description: "Workshop day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: enums.ORGANIZATIONAL,
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
          type: enums.LUNCH,
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
          type: enums.COFFEE_BREAK,
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
          type: enums.COFFEE_BREAK,
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
