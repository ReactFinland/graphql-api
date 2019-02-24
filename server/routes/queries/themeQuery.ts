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
      black {
        ...logoFragment
      }
      colored {
        ...logoFragment
      }
      white {
        ...logoFragment
      }
    }
  }
}

fragment logoFragment on WithWithoutText {
  withText {
    url
  }
  withoutText {
    url
  }
}
`;

export default themeQuery;
