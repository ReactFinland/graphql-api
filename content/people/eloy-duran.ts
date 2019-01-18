import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Eloy Durán",
  about:
    "Eloy works at Artsy, where they’ve been using GraphQL in novel ways since its inception. Being big on ‘OSS by default’, for instance creating CocoaPods, he came to the JavaScript ecosystem from a native background via React Native and chose Relay as the place where in the React/GraphQL community he can best contribute.",
  image: {
    url: "people/eloy.png",
  },
  social: {
    twitter: "alloy",
    github: "alloy",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  keywords: [keywords.GRAPHQL],
  type: [ContactType.SPEAKER],
};

export default person;
