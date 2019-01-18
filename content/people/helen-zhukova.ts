import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Helen Zhukova",
  about:
    "Helen creates user interfaces for Web and mobile mainly for live video streaming and video post-production for the movie studios. JavaScript is her first love but she is open to any technologies and skills that give her creations the best look and feel. She is a lifelong learner and loves to share her knowledge.",
  image: {
    url: "people/helen.jpg",
  },
  social: {
    twitter: "zhukova_h",
    github: "zhukovka",
  },
  location: {
    country: {
      name: "Ukraine",
      code: "UA",
    },
    city: "Kiev",
  },
  keywords: [keywords.GRAPHQL, keywords.GRAPHQLJS],
  type: [ContactType.SPEAKER, ContactType.LIGHTNING_TALK],
};

export default person;
