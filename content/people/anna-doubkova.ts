import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

const person: Contact = {
  name: "Anna Doubková",
  about: "Senior software engineer at Hive.",
  image: {
    url: "people/anna.jpg",
  },
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

export default person;
