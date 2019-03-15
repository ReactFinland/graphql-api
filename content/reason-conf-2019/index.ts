import request from "request-promise-native";
import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";

const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];

async function getData() {
  try {
    const { files } = await request.get(
      "https://api.github.com/gists/992b79b40cea84ff7ca8efb8cc2350ee",
      {
        headers: {
          "User-Agent": "React-Finland",
        },
        json: true,
      }
    );

    return {
      schedule: files["schedule.json"].content,
      speakers: files["speakers.json"].content,
    };
  } catch (err) {
    console.error(err);
  }

  return {};
}

async function init() {
  const { schedule, speakers } = await getData();

  console.log(schedule, speakers);
}

init();

const conference: Conference = {
  id: "reason-conf-2019",
  series: "ReasonConf",
  name: "ReasonConf 2019",
  organizer: allSponsors.reasonconf,
  slogan: "The ReasonML conference for web developers & OCaml enthusiasts",
  year: "2019",
  websiteUrl: "https://www.reason-conf.com/",
  locations: [locations.wuWien],
  mcs: [],
  organizers: [
    people.andreyOkonetchnikov,
    people.nikGraf,
    people.patrickStapfer,
  ],
  schedules: [],
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

export default conference;
