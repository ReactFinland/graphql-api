import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Tanja Malo",
  about:
    "Senior International HR and Global Mobility Specialist with ten years of experience in working with project management and organisational development. Passionate about internationalisation and process development for talent attraction and retention within companies/ organisations. ",
  image: {
    url: "people/tanja.jpg",
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "tanja-malo-98a8752b",
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
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
