const enums = require("../../../src/enums");

module.exports = {
  day: "2018-10-19",
  description: "Presentation day",
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: enums.BREAKFAST,
          title: "Registration, Finnish breakfast.",
          description:
            "We are contractually obligated to say that it's the best",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          type: enums.ORGANIZATIONAL,
          title: "Opening ceremonies",
        },
      ],
    },
    {
      begin: "09:15",
      end: "09:45",
      sessions: [require("../sessions/adam-miskiewicz")],
    },
    {
      begin: "9:45",
      end: "10:15",
      sessions: [require("../sessions/ellie-day")],
    },
    {
      begin: "10:15",
      end: "10:30",
      sessions: [require("../sessions/kadi-kraman")],
    },
    {
      begin: "10:30",
      end: "11:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: `Relax and practice your Finnish

<dl  class="glossary">
  <dt>kahvi</dt><dd>coffee</dd>
  <dt>no niin</dt><dd>yes</dd>
  <dt>no niin</dt><dd>no</dd>
  <dt>no niin</dt><dd>maybe</dd>
</dl>`,
        },
      ],
    },
    {
      begin: "11:00",
      end: "11:30",
      sessions: [require("../sessions/carolyn-stransky")],
    },
    {
      begin: "11:30",
      end: "12:00",
      sessions: [require("../sessions/jimmy-jia")],
    },

    {
      begin: "12:00",
      end: "13:30",
      sessions: [
        {
          type: enums.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at React Finland",
        },
      ],
    },
    {
      begin: "13:30",
      end: "14:00",
      sessions: [require("../sessions/glenn-reyes")],
    },
    {
      begin: "14:00",
      end: "14:15",
      sessions: [require("../sessions/helen-zhukova")],
    },
    {
      begin: "14:15",
      end: "14:30",
      sessions: [require("../sessions/johannes-schickling")],
    },

    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: `Relax and practice your Swedish

<dl  class="glossary">
  <dt>Jag talar inte svenska<dt><dd>I don't speak Swedish</dd>
  <dt>Jag har misslyckats obligatorisk svenska på universitetet</dt><dd>I have failed compulsory Swedish courses at the university</dd>
</dl>`,
        },
      ],
    },
    {
      begin: "15:00",
      end: "15:15",
      sessions: [require("../sessions/ivan-goncharov")],
    },
    {
      begin: "15:15",
      end: "15:30",
      sessions: [require("../sessions/nik-graf")],
    },
    {
      begin: "15:30",
      end: "15:45",
      sessions: [require("../sessions/cristoffer-niska")],
    },
    {
      begin: "15:45",
      end: "16:00",
      sessions: [require("../sessions/tanmai-gopal")],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: enums.COFFEE_BREAK,
          title: "Break",
          description: `Continue relaxing, this time with pastries

<dl class="glossary">
  <dt>JavaScript</dt><dd>jässä</dd>
  <dt>Python</dt><dd>pewthon</dd>
  <dt>Java</dt><dd>yava</dd>
</dl>`,
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:00",
      sessions: [require("../sessions/eloy-duran")],
    },
    {
      begin: "17:00",
      end: "17:15",
      sessions: [require("../sessions/benjie-gillam.js")],
    },
    {
      begin: "17:15",
      end: "17:45",
      sessions: [require("../sessions/dan-schafer")],
    },
    {
      begin: "18:00",
      end: "24:00",
      sessions: [
        {
          type: enums.PARTY,
          title: "Afterparty at Gofore office",
          description: `Last chance to practice your Finnish!

<dl  class="glossary">
  <dt>Tuopi</dt><dd>a glass of a beverage (beer)</dd>
  <dt>Mörkkis</dt><dd>a feeling of regret for what you said or did at the party last night</dd>
</dl>

Afterparty is graciously hosted by our sponsors Gofore and will be at their office (Urho Kekkosen katu 7B). There will be buses to take you there, alternatively you could walk.
`,
        },
      ],
    },
  ],
};
