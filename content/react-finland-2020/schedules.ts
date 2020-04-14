import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as allWorkshops from "./workshops";

const workshopDay1: Schedule = {
  day: "2020-05-25",
  description: "First conference day",
  intervals: [
    {
      begin: "10:00",
      end: "14:00",
      sessions: [allWorkshops.fromLegacyToReact],
    },
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.designSystems101],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.modernForms],
    },
  ],
};

const workshopDay2: Schedule = {
  day: "2020-05-26",
  description: "Second workshop day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "09:00",
      end: "16:00",
      sessions: [allWorkshops.advancedReact],
    },
    {
      begin: "10:00",
      end: "14:00",
      sessions: [allWorkshops.fromLegacyToReact],
    },
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.designSystems],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.statecharts],
    },
  ],
};

const workshopDay3: Schedule = {
  day: "2020-05-27",
  description: "Third workshop day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "10:00",
      end: "14:00",
      sessions: [allWorkshops.modernForms],
    },
    {
      begin: "11:00",
      end: "18:00",
      sessions: [allWorkshops.resilientLibs],
    },
    {
      begin: "15:00",
      end: "19:00",
      sessions: [allWorkshops.statecharts],
    },
  ],
};

const miniConferenceDay: Schedule = {
  day: "2020-05-28",
  description: "Mini-conference",
  location: locations.internet,
  intervals: [
    {
      begin: "17:00",
      end: "21:00",
      sessions: [
        {
          type: SessionType.TALK,
          title: "First mini-conference",
          description: "More information to come",
        },
      ],
    },
  ],
};

export default [workshopDay1, workshopDay2, workshopDay3, miniConferenceDay];
