const themeQuery = `
query ThemeQuery($conferenceSeriesId: ID!) {
  theme(conferenceId: $conferenceSeriesId) {
    colors {
      primary
      secondary
      text
      background
    }
    logos {
      whiteWithText {
        url
      }
    }
  }
}
`;

export default themeQuery;
