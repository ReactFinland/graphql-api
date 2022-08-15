import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Vismit Chawla",
  about:
    "Vismit is an experienced recruitment professional with over 10 years of recruiting background in Indian, Danish and Finnish market. Outside work, she likes meeting people with diverse cultural background to enhance on learning new personality & culture and love following healthy lifestyle focusing on nutrition. Passionate about DEI topics and mentoring international talents in integrating in Finnish job market.",
  image: {
    url: "people/vismit.jpg",
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "vismit-chawla",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
