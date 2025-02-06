import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Julien Sulpis",
  about: "Tech lead and web consultant at Zenika. Passionate about web technologies, he likes well-crafted UIs that make no compromise between performance, accessibility, and standout design.",
  image: {
    url: "people/julien.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "",
    bluesky: "jsulpis.dev",
    twitter: "jsulpis",
    github: "jsulpis",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "julien-sulpis",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "France",
      code: "FR",
    },
    city: "Lyon",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
