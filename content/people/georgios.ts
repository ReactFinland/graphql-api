import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Georgios Diamantopoulos",
  about: `Founder at Zero to MVP. I leave no stone unturned. I focus on what matters and take action using a balanced approach. By applying engineering principles to create technical architectures that are fit-for-purpose, I maintain efficiency. With a strong knack for entrepreneurship I can confidently manage needs in both business and technology. Ten years of bringing new products and applications to life, leading from the front. I founded Zero to MVP because I believe that entrepreneurs and executives should be able to focus on running and growing their business and not software development. `,
  image: {
    url: "people/georgios.jpeg",
  },
  social: {
    homepage: "https://zerotomvp.dev/",
    mastodon: "", // This has to be a whole link
    twitter: "georgiosd",
    github: "",
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
    city: "Attiki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
