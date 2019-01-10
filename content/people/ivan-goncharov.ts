import enums from '../../src/enums';
import keywords from '../keywords';

export default {
  name: "Ivan Goncharov",
  about:
    "Ivan is very active in GraphQL community and one of the core contributors to graphql-js. He is co-founder of APIs.guru which specializes in API consulting. During last few years they released a bunch of popular GraphQL tools including GraphQL Voyager.",
  aboutShort:
    "Ivan is one of the core contributors to graphql-js and a co-founder of APIs.guru, which built GraphQL Voyager.",
  image: "people/ivan.jpg",
  social: {
    homepage: "https://apis.guru/",
    twitter: "E1Goncharov",
    github: "IvanGoncharov",
  },
  location: {
    country: {
      name: "Ukraine",
      code: "UA",
    },
    city: "Lviv",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [enums.SPEAKER, enums.LIGHTNING_TALK],
};
