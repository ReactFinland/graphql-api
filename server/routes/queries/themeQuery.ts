// TODO: Add a fragment for logo lookups
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
        withText {
          url
        }
        withoutText {
          url
        }
      }
      colored {
        withText {
          url
        }
        withoutText {
          url
        }
      }
      white {
        withText {
          url
        }
        withoutText {
          url
        }
      }
    }
  }
}
`;

export default themeQuery;
