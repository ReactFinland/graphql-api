module.exports = {
  day: "2019-04-24",
  description: "Workshop day",
  intervals: [
    {
      begin: "09:00",
      end: "18:00",
      sessions: [
        require("../sessions/andrey-and-artem-workshop"),
        require("../sessions/david-khourshid-workshop"),
        require("../sessions/glenn-reyes-workshop"),
        require("../sessions/nik-workshop"),
        require("../sessions/patrick-workshop"),
        require("../sessions/sia-karamalegos-workshop"),
      ],
    },
  ],
};
