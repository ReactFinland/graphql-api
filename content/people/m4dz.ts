import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "m4dz 🥑🦄",
  about: `After being involved in numerous projects and companies, and confronted to many web-related technologies, I'm now delivering my about twenty years old knowledge to all communities that need it. Experienced speaker, I share my experience in various domains such as security, web-technologies, front-end development, privacy…

I run through the web in an endless quest for quality, innovation, and beauty of code. Passionate about web applications and the web platform, APIs, and webperfs, I teach, code, design, improve…
  
Because I'm convinced that the group is stronger than individuals, I always bet on Open source, communities, and diversity to make a better Web for future generations.`,
  image: {
    url: "people/m4dz.jpg",
  },
  social: {
    homepage: "https://m4dz.net/",
    twitter: "m4d_z",
    github: "m4dz",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "m4d-z",
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
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
