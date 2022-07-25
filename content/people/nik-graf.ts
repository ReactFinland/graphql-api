import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Nik Graf",
  about:
    "Nik is the founder of Serenity and is passionate about cryptography, CRDTs, GraphQL and React. He co-created several popular open source projects like DraftJS Plugins and Polished and participated in Stripe’s Open Source Retreat. In his spare-time he enjoys ski touring, cycling and organising the ReactJS Vienna meetup.",
  image: {
    url: "people/nik.jpg",
  },
  social: {
    homepage: "http://www.nikgraf.com/",
    twitter: "nikgraf",
    github: "nikgraf",
    linkedin: "nikolausgraf",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [Keyword.REASON, Keyword.GRAPHQL, Keyword.REACT, Keyword.REACT_VR],
  type: [ContactType.SPEAKER],
};

export default person;
