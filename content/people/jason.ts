import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jason Rametta",
  about: `Jason is a creative and passionate full-stack developer with over a decade of experience. His expertise and passion revolves around increasing productivity, efficiency and reliability of large scale systems.

Most recently, Jason was a senior developer at Unity 3D, leading the User Generated Content team. Currently, Jason is working on creating indie games with the Godot game engine.`,
  image: {
    url: "people/jason.jpeg",
  },
  social: {
    homepage: "https://rametta.org/",
    mastodon: "",
    twitter: "rametta",
    github: "rametta",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "rametta",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Canada",
      code: "CA",
    },
    city: "Montréal",
  },
  keywords: [Keyword.REACT, Keyword.TYPESCRIPT],
  type: [ContactType.SPEAKER],
};

export default person;
