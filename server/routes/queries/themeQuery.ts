const themeQuery = `
query ThemeQuery($conferenceSeriesId: ID!) {
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

export default themeQuery;
