import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];

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
  schedules,
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

export default conference;
