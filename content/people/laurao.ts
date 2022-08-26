import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Laura Ojala",
  about:
    "Laura Ojala (they/she) has over 15 years of experience in various agile testing roles from Quality Manager in Medical Device start-up to Test Manager in the Financial sector. Since early 2020 they’ve been a Senior Test Automation Developer. Laura enjoys creative challenges and supporting others on their journey. One of their passions is Creative Group Process Facilitation.",
  image: {
    url: "people/laurao.jpg",
  },
  social: {
    homepage: "https://lauraojala.fi/",
    twitter: "laojala",
    github: "laojala",
    facebook: "",
    medium: "",
    instagram: "laojala",
    linkedin: "laojala",
    youtube: "",
    devto: "laojala",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Oulu",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
