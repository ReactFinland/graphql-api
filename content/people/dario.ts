import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Darío Gutiérrez Mori",
  about: `Born in Asturias, with Guatemalan spice. Mushroom forager, mountain climber, hobbyist game developer (not all could be nature-related), always looking for projects to take part in. Currently in my ‘fermenting’ era, trying to figure out my place in the world (aren’t we all?). Don’t ask me to talk about work.`,
  image: {
    url: "people/dario.jpg",
  },
  social: {
    homepage: "https://dariogmori.com/",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  keywords: [], // [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
