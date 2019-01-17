import enums from '../../../src/enums';

export default {
  day: "2019-04-25",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          speakers: [require("../../people/jani-evakallio")],
          title: "Opening",
          description: "Opening the day with Jani Eväkallio, our MC of the day",
          type: enums.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "State management",
      sessions: [
        require("../sessions/michel-weststrate"),
        require("../sessions/david-khourshid"),
        require("../sessions/luca-matteis"),
      ],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
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
        require("../sessions/juha-linnanen"),
        require("../sessions/maaret-pyhajarvi"),
        require("../sessions/manuel-matuzovic"),
      ],
    },
    {
      begin: "12:15",
      end: "13:30",
      sessions: [
        {
          type: enums.LUNCH,
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
      sessions: [
        require("../sessions/varya-stepanova"),
        require("../sessions/andrey-okonetchnikov"),
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
      title: "Case Studies",
      sessions: [
        require("../sessions/nik-graf"),
        require("../sessions/kadi-kraman"),
        require("../sessions/glenn-reyes"),
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
      title: "Visual",
      sessions: [
        require("../sessions/bruno-lourenco"),
        require("../sessions/tero-parviainen"),
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
    {
      begin: "18:00",
      end: "22:00",
      sessions: [
        {
          speakers: [require("../../people/jani-evakallio")],
          title: "#componentDidSmoosh",
          description:
            "React has a new lifecycle method, `componentDidSmoosh`. Learn all about it.",
          type: enums.PARTY,
        },
      ],
    },
  ],
};
