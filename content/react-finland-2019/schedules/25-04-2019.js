module.exports = {
  day: "2019-04-25",
  description: "Presentation day",
  intervals: [
    {
      begin: "09:00",
      end: "18:00",
      sessions: [
        require("../sessions/andrey-okonetchnikov"),
        require("../sessions/artem-sapegin"),
        require("../sessions/tejas-kumar"),
      ],
    },
  ],
};
