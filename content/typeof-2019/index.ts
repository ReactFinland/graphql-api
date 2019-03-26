import { Conference } from "../../server/schema/Conference";
import { SessionType } from "../../server/schema/Session";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import scheduleData from "./data.json";

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
  startDate: "2019-04-27",
  endDate: "2019-04-29",
  websiteUrl: "https://typeofconf.com/",
  locations: [],
  mcs: [],
  organizers: [],
  schedules: resolveSchedules(scheduleData),
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

function resolveSchedules(schedules) {
  return schedules.map(schedule => {
    return {
      ...schedule,
      intervals: schedule.intervals.map(interval => {
        return {
          ...interval,
          sessions: interval.sessions.map(session => {
            return {
              ...session,
              // TODO: Not correct but good enough for a demo
              type: SessionType.TALK,
              people:
                session.people &&
                session.people.map(person => {
                  const existingPerson = Object.values(people).find(
                    ({ name }) => {
                      return name === person.name;
                    }
                  );

                  return {
                    ...person,
                    ...existingPerson,
                  };
                }),
            };
          }),
        };
      }),
    };
  });

  /*return [
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
              title: "GraphQL without GraphQL",
              description:
                "GraphQL has changed the way we develop software. In this talk, I'll discuss my journey with the technology and show how to use GraphQL without GraphQL by abstracting schema and query generation.",
              type: SessionType.TALK,
              keywords: [Keyword.GRAPHQL],
            },
          ],
        },
      ],
    },
  ];*/
}

export default conference;
