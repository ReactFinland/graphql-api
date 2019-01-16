const enums = require("../../../src/enums");

module.exports = {
  day: "2019-04-26",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          speakers: [require("../../people/sara-vieira")],
          title: "Opening",
          description: "Opening the day with Sara Vieira, our MC of the day",
          type: enums.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "React Native",
      sessions: [
        require("../sessions/rick-hanlon"),
        require("../sessions/jamon-holmgren"),
        require("../sessions/ville-immonen"),
      ],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Finnish coffee is darker than you think.",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Tooling",
      sessions: [
        require("../sessions/carolyn-stransky"),
        require("../sessions/glenn-reyes"),
      ],
    },
    {
      begin: "12:15",
      end: "13:30",
      sessions: [
        {
          type: enums.LUNCH,
          title: "Lunch",
          description: "Hopefully it's as disappointing as day before.",
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:30",
      title: "Design Systems",
      sessions: [
        require("../sessions/artem-sapegin"),
        require("../sessions/artem-zakharchenko"),
      ],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Performance",
      sessions: [
        require("../sessions/anna-doubkova"),
        require("../sessions/sia-karamalegos"),
      ],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
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
        require("../sessions/tomas-konrady"),
        require("../sessions/tejas-kumar"),
        require("../sessions/mike-berman"),
      ],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: enums.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
  ],
};
