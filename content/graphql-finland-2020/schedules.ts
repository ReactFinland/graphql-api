import { Schedule } from "../../server/schema/Schedule";

const workshopDay: Schedule = {
  day: "2020-09-24",
  description: "Workshop day",
  intervals: [],
};

const presentationDay: Schedule = {
  day: "2020-09-25",
  description: "Presentation day",
  intervals: [],
};

export default [workshopDay, presentationDay];
