import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Mike Berman",
  about:
    "Engineer @ Facebook, former organizer of Sydney Zombie Walk, & big fan of breakfast foods • 🎹 • ‍🤹 • ⛷ • 🦘🇦🇺‍",
  image: {
    url: "people/mike.jpg",
  },
  social: {
    homepage: "https://berman.xyz",
    twitter: "",
    github: "",
    linkedin: "mikeyberman",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [keywords.REACT, keywords.REDUX],
  type: [ContactType.SPEAKER],
};

export default person;
