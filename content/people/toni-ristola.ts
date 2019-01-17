import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

const person: Contact = {
  name: "Toni Ristola",
  about:
    "Toni Ristola is a Software Architect at Robu Oy and an organizer for the React Finland conference and contributor for the React Finland App.",
  image: {
    url: "people/toni.png",
  },
  social: {
    homepage: "",
    twitter: "toniristola",
    github: "tristola",
    linkedin: "toniristola",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
  },
  keywords: [],
  type: [ContactType.ORGANIZER, ContactType.SPEAKER],
};

export default person;
