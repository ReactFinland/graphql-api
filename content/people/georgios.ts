import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Georgios Diamantopoulos",
  about: `As an engineer, Georgios prides himself for being pragmatic and a generalist - engineering at its best is meant to bring an intention to life. To build a system that fulfills specific requirements over time. With over 12 years of experience working with or for startup organizations, he really knows what it takes to kickstart a project without sacrificing long-term goals like maintainability or scalability. Since he co-founded Zero to MVP in 2019, Georgios and his team have built over 25 systems that can pivot and scale.`,
  image: {
    url: "people/georgios.jpeg",
  },
  social: {
    homepage: "https://zerotomvp.dev/",
    mastodon: "", // This has to be a whole link
    twitter: "georgiosd",
    github: "georgiosd",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "georgiosd",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Greece",
      code: "GR",
    },
    city: "Athens",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
