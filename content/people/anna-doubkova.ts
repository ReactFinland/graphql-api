import { ContactType } from "../../server/schema";

export default {
  name: "Anna Doubková",
  about: "Senior software engineer at Hive.",
  image: "people/anna.jpg",
  social: {
    twitter: "lithinn",
    github: "lithin",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};
