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
        require("../sessions/david-khourshid-workshop"),
        require("../sessions/gant-laborde-workshop"),
        require("../sessions/juho-vepsalainen-workshop"),
        require("../sessions/patrick-and-nik"),
        require("../sessions/sara-vieira-workshop"),
        require("../sessions/sia-karamalegos-workshop"),
      ],
    },
    {
      begin: "14:00",
      end: "18:00",
      sessions: [
        require("../sessions/andrey-and-artem"),
        require("../sessions/david-khourshid-workshop"),
        require("../sessions/gant-laborde-workshop"),
        require("../sessions/juho-vepsalainen-workshop"),
        require("../sessions/patrick-and-nik"),
        require("../sessions/rotem-mizrachi-meidan-workshop"),
        require("../sessions/sia-karamalegos-workshop"),
        require("../sessions/sven-sauleau-workshop"),
      ],
    },
    {
      begin: "09:00",
      end: "18:00",
      sessions: [require("../sessions/michel-weststrate")],
    },
  ],
};
