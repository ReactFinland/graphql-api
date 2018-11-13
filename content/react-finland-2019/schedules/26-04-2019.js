module.exports = {
  day: "2019-04-26",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "18:00",
      sessions: [
        require("../sessions/anna-doubkova"),
        require("../sessions/david-khourshid"),
        require("../sessions/kadi-kraman"),
        require("../sessions/sia-karamalegos"),
      ],
    },
  ],
};
