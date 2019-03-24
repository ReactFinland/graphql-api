import { Conference } from "../../server/schema/Conference";
import Keyword from "../../server/schema/keywords";
import { SessionType } from "../../server/schema/Session";
import * as people from "../people";
import * as allSponsors from "../sponsors";

const sponsors = [];
const partners = [];
const goldSponsors = [];
const silverSponsors = [];
const bronzeSponsors = [];

const conference: Conference = {
  id: "typeof-2019",
  series: "typeof",
  name: "typeof 2019",
  organizer: allSponsors.typeof,
  slogan: "web craftsmanship conference",
  year: "2019",
  websiteUrl: "https://typeofconf.com/",
  locations: [],
  mcs: [],
  organizers: [],
  schedules: [
    {
      day: "2019-03-27",
      description: "Workshop day",
      intervals: [],
    },
    {
      day: "2019-03-28",
      description: "Presentation day",
      intervals: [],
    },
    {
      day: "2019-03-29",
      description: "Presentation day",
      intervals: [
        {
          begin: "13:15",
          end: "13:45",
          title: "GraphQL",
          sessions: [
            {
              people: [people.juhoVepsalainen],
              title: "GraphQL Without GraphQL",
              description:
                "GraphQL has changed the way we develop software. In this talk, I'll discuss my journey with the technology and show how to use GraphQL without GraphQL by abstracting schema and query generation.",
              type: SessionType.TALK,
              keywords: [Keyword.GRAPHQL],
            },
          ],
        },
      ],
    },
  ],
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

export default conference;
