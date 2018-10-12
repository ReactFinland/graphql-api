module.exports = {
  day: "2018-10-18",
  description: "Workshop day",
  intervals: [
    {
      begin: "09:00",
      end: "18:00",
      sessions: [
        require("../sessions/juho-vepsalainen-intro-to-graphql"),
        require("../sessions/mikhail-novikov-building-graphql-server"),
        require("../sessions/marc-giroux-graphql-schema-design"),
        require("../sessions/nik-graf-advanced-graphql"),
      ],
    },
  ],
};
