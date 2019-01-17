import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Nik Graf",
  about:
    "Nik cares about good UX and development tools. He co-created several popular open source projects like DraftJS Plugins and Polished. Nik participated in Stripe’s Open Source Retreat and joined Serverless Inc. to deploy auto-scaling infrastructures. In his spare-time he enjoys writing code in Reason and play with WebVR as well as organising the ReactJS Vienna meetup.",
  aboutShort:
    "Nik cares about good UX and development tools. He co-created several popular open source projects like DraftJS Plugins and Polished. Nik isa also organizer of Reason Conf and React Vienna meetup.",
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
  keywords: [
    keywords.REASON,
    keywords.GRAPHQL,
    keywords.REACT,
    keywords.REACT_VR,
  ],
  type: [ContactType.SPEAKER, ContactType.TALK, ContactType.WORKSHOP],
};

export default person;
