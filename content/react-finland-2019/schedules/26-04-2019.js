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
      end: "10:30",
      sessions: [
        require("../sessions/david-khourshid"),
        require("../sessions/luca-matteis"),
      ],
    },
    {
      begin: "10:30",
      end: "11:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Finnish coffee is darker than you think.",
        },
      ],
    },
    {
      begin: "11:00",
      end: "12:00",
      sessions: [
        require("../sessions/kadi-kraman"),
        require("../sessions/varya-stepanova"),
        require("../sessions/andrey-okonetchnikov"),
      ],
    },
    {
      begin: "12:00",
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
      sessions: [
        require("../sessions/monica-lent"),
        require("../sessions/nik-graf"),
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
      sessions: [
        require("../sessions/ville-immonen"),
        require("../sessions/juha-linnanen"),
        require("../sessions/jamon-holmgren"),
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
