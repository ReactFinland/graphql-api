"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conferenceDayQuery = `
query ConferenceDayQuery {
  allSeries {
    id
    name
    conferences {
      id
      name
      schedules {
        day
      }
    }
  }
}
`;
exports.default = conferenceDayQuery;
//# sourceMappingURL=conferenceDayQuery.js.map