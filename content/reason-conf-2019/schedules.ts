import { Schedule } from "../../server/schema/Schedule";
// import { SessionType } from "../../server/schema/Session";
// import * as people from "../people";

const workshopDay: Schedule = {
  day: "2019-04-11",
  description: "Workshops & Knowledge Transfer",
  intervals: [],
};

const presentationDay1: Schedule = {
  day: "2019-04-12",
  description: "Conference Day",
  intervals: [],
};

const presentationDay2: Schedule = {
  day: "2019-04-13",
  description: "Open Stage & Reason Dojo Day",
  intervals: [],
};

export default [workshopDay, presentationDay1, presentationDay2];
