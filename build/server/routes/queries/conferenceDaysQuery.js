"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Separate location query
const conferenceDaysQuery = `
query ConferenceDaysQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    slogan
    schedules {
      day
    }
    locations {
      city
      country {
        name
      }
    }
  }
}
`;
exports.default = conferenceDaysQuery;
//# sourceMappingURL=conferenceDaysQuery.js.map