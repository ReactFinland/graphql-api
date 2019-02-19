const conferenceDaysQuery = `
query ConferenceDaysQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    schedules {
      day
    }
  }
}
`;

export default conferenceDaysQuery;
