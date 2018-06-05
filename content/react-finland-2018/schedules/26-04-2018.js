const day = "2018-04-26";

module.exports = {
  day,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [require("../breakfasts").find(o => o.day === day)],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [require("../talks/ken-wheeler")],
    },
    {
      begin: "09:45",
      end: "10:00",
      sessions: [require("../talks/juho-vepsalainen")],
    },
    {
      begin: "10:15",
      end: "10:45",
      sessions: [require("../talks/nik-graf")],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [require("../talks/patrick-stapfer")],
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [require("../lunches").find(o => o.day === day)],
    },
    {
      begin: "12:30",
      end: "13:15",
      sessions: [require("../talks/david-khourshid")],
    },
    {
      begin: "13:30",
      end: "14:15",
      sessions: [require("../talks/shay-keinan")],
    },
    {
      begin: "14:15",
      end: "14:45",
      sessions: [require("../coffee-breaks").find(o => o.day === day)],
    },
    {
      begin: "14:45",
      end: "15:15",
      sessions: [require("../talks/michal-chudziak")],
    },
    {
      begin: "15:15",
      end: "15:30",
      sessions: [require("../talks/toni-ristola")],
    },
    {
      begin: "15:45",
      end: "16:30",
      sessions: [require("../talks/gant-laborde")],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [require("../talks/varya-stepanova")],
    },
    {
      begin: "17:00",
      end: "17:30",
      sessions: [require("../panels").filter(o => o.day === day)[0]],
    },
    {
      begin: "18:30",
      end: "18:45",
      sessions: [
        {
          title: "Buses leave to after party (Sea Life, Tivolikuja 10)",
        },
      ],
    },
  ],
};
