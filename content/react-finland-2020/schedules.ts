import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as talks from "./talks";
import * as allWorkshops from "./workshops";

const linnanmaki = {
  type: SessionType.PARTY,
  title: "Visiting Linnanmäki Amusement Park ☀️",
  description: `[Linnanmäki](https://www.linnanmaki.fi/en) is the amusement park of Helsinki. Expect to be amused on its opening weekend!
  `,
  location: {
    city: "Helsinki",
    country: {
      code: "FI",
      name: "Finland",
    },
    address: "Tivolikuja 1",
  },
};

const suomenlinna = {
  type: SessionType.PARTY,
  title: "Visiting Suomenlinna Castle ☀️",
  description: `[Suomenlinna](https://www.suomenlinna.fi/en/) is one of the most significant castles in Finland. The world heritage site has a lot to explore. You need to take a ferry to reach it.
  `,
  location: {
    city: "Helsinki",
    country: {
      code: "FI",
      name: "Finland",
    },
    address: "Suomenlinna",
  },
};

const oodi = {
  type: SessionType.PARTY,
  title: "Visiting Oodi - The New Central Library 🌧",
  description: `[Oodi](https://www.oodihelsinki.fi/en/) is the brand new central library of Helsinki. Although visiting a library might sound boring, the building is a little more than that.
  `,
  location: {
    city: "Helsinki",
    country: {
      code: "FI",
      name: "Finland",
    },
    address: "Töölönlahdenkatu 4",
  },
};

const swimming = {
  type: SessionType.PARTY,
  title: "Swimming at Yrjönkatu swimming hall 🌧",
  description: `[Yrjönkatu swimming hall](https://palvelukartta.hel.fi/unit/41102) is Finland's first and oldest public swimming hall inaugurated in 1928. According to the BBC, it is one of the most beautiful swimming halls in the world.

Swimming is limited to women/men only per day (women: Mon, Wed, Fri, Sun, men: Tue, Thu, Sat) as clothing is optional. You can also find multiple saunas. Depending on the services you want, expect to spend between 7 and 30 euros.

The swimming hall is open daily (closed 22.04 due to Easter).
  `,
  location: {
    city: "Helsinki",
    country: {
      code: "FI",
      name: "Finland",
    },
    address: "Yrjönkatu 21 b",
  },
};

const preConferenceDay: Schedule = {
  day: "2020-05-25",
  description: "Pre-conference",
  intervals: [
    {
      begin: "09:00",
      end: "17:30",
      sessions: [allWorkshops.designSystems101],
    },
    {
      begin: "08:00",
      end: "22:00",
      sessions: [oodi],
    },
    {
      begin: "10:00",
      end: "16:00",
      sessions: [suomenlinna],
    },
    {
      begin: "14:00",
      end: "20:00",
      sessions: [swimming],
    },
  ],
};

const workshopDay1: Schedule = {
  day: "2020-05-26",
  description: "First workshop day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "Pro tip: You can register at any time during the conference. There's light breakfast (pastry and coffee) available.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "12:00",
      sessions: [
        allWorkshops.statecharts,
        allWorkshops.advancedReact,
        allWorkshops.fromLegacyToReact,
        allWorkshops.fullStack,
        allWorkshops.testingReact,
        allWorkshops.modernForms,
        allWorkshops.designSystems,
      ],
    },
    {
      begin: "12:00",
      end: "13:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "13:00",
      end: "15:00",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "15:00",
      end: "15:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "15:30",
      end: "17:30",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const workshopDay2: Schedule = {
  day: "2020-05-27",
  description: "Second workshop day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "Pro tip: You can register at any time during the conference. There's light breakfast (pastry and coffee) available.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "12:00",
      sessions: [
        allWorkshops.statecharts,
        allWorkshops.advancedReact,
        allWorkshops.fromLegacyToReact,
        allWorkshops.reactNative,
        allWorkshops.reactPerformance,
        allWorkshops.modernForms,
        allWorkshops.resilientLibs,
      ],
    },
    {
      begin: "12:00",
      end: "13:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "13:00",
      end: "15:00",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "15:00",
      end: "15:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "15:30",
      end: "17:30",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const presentationDay1: Schedule = {
  day: "2020-05-28",
  description: "First conference day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "You can register later too. There's light breakfast (pastry and coffee) available.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          people: [],
          title: "Opening",
          description: "Opening the day with Sec Ret, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "Secret",
      // 3x 30 mins
      sessions: [talks.rachelNabors, talks.naderDabit],
    },
    {
      begin: "10:45",
      end: "11:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee, live long and prosper. Play foosball at the sponsors' lounge.",
        },
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "",
        },
        {
          type: SessionType.LIGHTNING_TALK,
          title: "Lightning talk session",
          sessions: [talks.villePelkonen, talks.tobiasTimm],
        },
      ],
    },
    {
      begin: "11:30",
      end: "13:00",
      title: "Secret",
      // 3 x 30 mins
      sessions: [talks.davidKhourshid, talks.farzadYz, talks.jaredPalmer],
    },
    {
      begin: "13:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at previous React Finland",
        },
      ],
    },
    {
      begin: "14:00",
      end: "15:00",
      title: "Secret",
      // 2 x 30 mins
      sessions: [talks.nikGraf, talks.tejasKumar],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Take a massage at the sponsors' lounge.",
        },
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "",
        },
        {
          type: SessionType.LIGHTNING_TALK,
          title: "Lightning talk session",
          sessions: [talks.esaMatti, talks.olavi],
        },
      ],
    },
    {
      begin: "15:45",
      end: "16:45",
      title: "Secret",
      // 2 x 30 mins
      sessions: [talks.taelurAlexis, talks.jeremyWagner],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
    {
      begin: "18:00",
      end: "19:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "Secret show at the venue",
          description: "More information to come",
        },
      ],
    },
  ],
};

const presentationDay2: Schedule = {
  day: "2020-05-29",
  description: "Second conference day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration and breakfast",
          description:
            "If you slept late, you can still register after this. There's light breakfast (pastry and coffee) available.",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          people: [],
          title: "Opening",
          description: "Opening the day with Sec Ret, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "Secret",
      // 3 x 30 mins
      sessions: [talks.kentCDodds, talks.rebeccaHill, talks.monicaLent],
    },
    {
      begin: "10:45",
      end: "11:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee and play games at the sponsors' lounge. Finnish coffee is darker than you think.",
        },
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "",
        },
        {
          type: SessionType.LIGHTNING_TALK,
          title: "Lightning talk session",
          sessions: [talks.yan, talks.xiaoru],
        },
      ],
    },
    {
      begin: "11:30",
      end: "13:00",
      title: "Secret",
      // 3 x 30 mins
      sessions: [
        talks.lauraGonzalez,
        talks.madalyn,
        talks.kenigboloMeyaStephen,
      ],
    },
    {
      begin: "13:00",
      end: "14:00",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Hopefully it's as disappointing as day before.",
        },
      ],
    },
    {
      begin: "14:00",
      end: "15:00",
      title: "Tooling",
      // 2 x 30 mins
      sessions: [talks.ivanOrlov, talks.vivekNayyar],
    },
    {
      begin: "15:00",
      end: "15:45",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Play more foosball at the sponsors' lounge.",
        },
        {
          type: SessionType.PANEL,
          title: "Panel",
          description: "",
        },
        {
          type: SessionType.LIGHTNING_TALK,
          title: "Lightning talk session",
          sessions: [],
        },
      ],
    },
    {
      begin: "15:45",
      end: "16:45",
      title: "Secret",
      // 2 x 30 mins
      sessions: [talks.emmaWedekind, talks.isaSilveira],
    },
    {
      begin: "16:45",
      end: "17:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
    {
      begin: "18:00",
      end: "02:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Afterparty",
        },
      ],
    },
  ],
};

const postConferenceDay1: Schedule = {
  day: "2020-05-30",
  description: "Post-conference",
  intervals: [
    {
      begin: "10:00",
      end: "16:00",
      sessions: [suomenlinna],
    },
    {
      begin: "10:00",
      end: "20:00",
      sessions: [oodi],
    },
    {
      begin: "13:00",
      end: "21:00",
      sessions: [linnanmaki],
    },
    {
      begin: "14:00",
      end: "20:00",
      sessions: [swimming],
    },
  ],
};

const postConferenceDay2: Schedule = {
  day: "2020-05-31",
  description: "Post-conference",
  intervals: [
    {
      begin: "10:00",
      end: "16:00",
      sessions: [suomenlinna],
    },
    {
      begin: "10:00",
      end: "20:00",
      sessions: [oodi],
    },
    {
      begin: "13:00",
      end: "21:00",
      sessions: [linnanmaki],
    },
    {
      begin: "14:00",
      end: "20:00",
      sessions: [swimming],
    },
  ],
};

const postConferenceDay3: Schedule = {
  day: "2020-06-01",
  description: "Freezing Edge 2020",
  intervals: [
    {
      begin: "09:00",
      end: "16:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Freezing Edge 2020 Conference",
          description: "[Learn more](https://freezing-edge.fi)",
        },
      ],
    },
  ],
};

export default [
  preConferenceDay,
  workshopDay1,
  workshopDay2,
  presentationDay1,
  presentationDay2,
  postConferenceDay1,
  postConferenceDay2,
  postConferenceDay3,
];
