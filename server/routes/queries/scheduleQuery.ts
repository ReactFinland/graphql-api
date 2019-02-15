const scheduleQuery = `
query PageQuery($conferenceSeriesId: ID!, $conferenceId: ID!, $day: String!) {
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
  theme(conferenceId: $conferenceSeriesId) {
    primaryColor
    secondaryColor
    textColor
    backgroundColor
    whiteLogoWithText {
      url
    }
  }
}
`;

export default scheduleQuery;
