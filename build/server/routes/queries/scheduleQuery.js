"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleQuery = `
query ScheduleQuery($conferenceId: ID!, $day: String!) {
  schedule(conferenceId: $conferenceId, day: $day) {
    day
    description
    intervals {
      title
      begin
      end
      sessions {
        type
        title
        people {
          name
          image {
            url
          }
        }
      }
    }
  }
}
`;
exports.default = scheduleQuery;
//# sourceMappingURL=scheduleQuery.js.map