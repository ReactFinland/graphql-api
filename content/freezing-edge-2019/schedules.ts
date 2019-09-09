import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
// import * as people from "../people";
// import * as talks from "./talks";
// import * as allWorkshops from "./workshops";

const workshops = []; // Object.values(allWorkshops);

const workshopDay: Schedule = {
  day: "2019-11-12",
  description: "Workshop day",
  location: locations.amanda,
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

const presentationDay: Schedule = {
  day: "2019-11-13",
  description: "Conference day",
  location: locations.amanda,
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

export default [workshopDay, presentationDay];
