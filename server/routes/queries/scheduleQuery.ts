const scheduleQuery = `
query PageQuery($conferenceId: ID!, $day: String!) {
  schedule(conferenceId: $conferenceId, day: $day) {
    day
    description
    intervals {
      begin
      end
      sessions {
        type
        title
        people {
          name
        }
      }
    }
  }
}
`;

export default scheduleQuery;
