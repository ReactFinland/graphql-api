import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
// import * as people from "../people";
// import * as talks from "./talks";
// import * as allWorkshops from "./workshops";

const workshops = []; // Object.values(allWorkshops);

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
  day: "2019-05-11",
  description: "Pre-conference",
  intervals: [
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
  day: "2019-05-12",
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
      end: "11:30",
      sessions: workshops,
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "14:00",
      end: "14:20",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "14:20",
      end: "15:40",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "15:40",
      end: "16:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const workshopDay2: Schedule = {
  day: "2019-05-13",
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
      end: "11:30",
      sessions: workshops,
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "14:00",
      end: "14:20",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "14:20",
      end: "15:40",
      title: "Workshops continue",
      sessions: [],
    },
    {
      begin: "15:40",
      end: "16:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      title: "Workshops continue",
      sessions: [],
    },
  ],
};

const presentationDay1: Schedule = {
  day: "2019-04-25",
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
      sessions: [],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee, live long and prosper. Play foosball at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "12:15",
      end: "13:15",
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
      begin: "13:15",
      end: "14:30",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Take a massage at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee if you still can. Enjoy the sofa at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:15",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "17:15",
      end: "17:30",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
  ],
};

const presentationDay2: Schedule = {
  day: "2019-04-26",
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
      sessions: [],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee and play games at the sponsors' lounge. Finnish coffee is darker than you think.",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "12:15",
      end: "13:15",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Hopefully it's as disappointing as day before.",
        },
      ],
    },
    {
      begin: "13:15",
      end: "14:45",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "14:45",
      end: "15:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee. Again. Play more foosball at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "15:15",
      end: "16:00",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description:
            "Drink coffee if you still can. Still time for a massage at the sponsors' lounge.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:30",
      title: "Secret",
      sessions: [],
    },
    {
      begin: "17:30",
      end: "18:00",
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
  day: "2019-04-27",
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
  day: "2019-04-28",
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

export default [
  preConferenceDay,
  workshopDay1,
  workshopDay2,
  presentationDay1,
  presentationDay2,
  postConferenceDay1,
  postConferenceDay2,
];
