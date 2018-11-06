const day = "2018-04-24";

module.exports = {
  day,
  description: "Workshop day",
  intervals: [
    {
      begin: "09:00",
      end: "13:00",
      sessions: [
        require("../sessions/andrey-and-artem"),
        require("../sessions/david-khourshid"),
        require("../sessions/gant-laborde"),
        require("../sessions/juho-vepsalainen"),
        require("../sessions/patrick-and-nik"),
        require("../sessions/sara-vieira"),
        require("../sessions/sia-karamalegos"),
      ],
    },
    {
      begin: "14:00",
      end: "18:00",
      sessions: [
        require("../sessions/andrey-and-artem"),
        require("../sessions/david-khourshid"),
        require("../sessions/gant-laborde"),
        require("../sessions/juho-vepsalainen"),
        require("../sessions/patrick-and-nik"),
        require("../sessions/rotem-mizrachi-meidan"),
        require("../sessions/sia-karamalegos"),
        require("../sessions/sven-sauleau"),
      ],
    },
    {
      begin: "09:00",
      end: "18:00",
      sessions: [require("../sessions/michel-weststrate")],
    },
  ],
};
