import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Laura Ojala",
  about:
    "I have 15 years of full-time experience in leading high-performing agile project teams. Working hands-on in successful technology start-ups ensuring their cyber security governance, software testing, medical device ISO regulations standards and submitting US medical device premarket submission FDA 510(k). One of my passions is Creative Group Process Facilitation.",
  image: {
    url: "people/laurao.jpg",
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
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
