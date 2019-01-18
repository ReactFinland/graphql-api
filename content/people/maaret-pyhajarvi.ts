import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Maaret Pyhäjärvi",
  about:
    "Feedback fairy with a day-job at F-Secure as Eng Manager. Tester, (Polyglot) Programmer, Speaker, Author, Conference Organizer. She/Her.",
  image: {
    url: "people/maaret.jpg",
  },
  social: {
    homepage: "http://maaretp.com/",
    twitter: "maaretp",
    github: "maaretp",
    linkedin: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.REACT, keywords.TESTING],
  type: [ContactType.SPEAKER],
};

export default person;
