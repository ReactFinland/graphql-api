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
      blackWithText {
        url
      }
      blackWithoutText {
        url
      }
      coloredWithText {
        url
      }
      coloredWithoutText {
        url
      }
      whiteWithText {
        url
      }
      whiteWithoutText {
        url
      }
    }
  }
}
`;

export default themeQuery;
