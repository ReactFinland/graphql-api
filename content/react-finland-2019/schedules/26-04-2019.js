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
          description: "Opening the day with Sara Vieira, our MC",
          type: enums.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [require("../sessions/rick-hanlon")],
    },
    {
      begin: "09:45",
      end: "18:00",
      sessions: [
        require("../sessions/anna-doubkova"),
        require("../sessions/bruno-lourenco"),
        require("../sessions/david-khourshid"),
        require("../sessions/kadi-kraman"),
        require("../sessions/luca-matteis"),
        require("../sessions/maaret-pyhajarvi"),
        require("../sessions/manuel-matuzovic"),
        require("../sessions/sia-karamalegos"),
        require("../sessions/varya-stepanova"),
        require("../sessions/artem-zakharchenko"),
      ],
    },
  ],
};
