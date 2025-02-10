import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Aurora Scharff",
  about:
    "Aurora Scharff is a web developer from Norway. She holds a bachelor's degree in Robotics and Intelligent Systems and is knowledgeable in engineering mathematics, robotics, algorithms, data structures, and computer architecture. After working for a few years at a financial technology startup, she continues developing as a consultant at Inmeta. Aurora is actively building with React Server Components in her current consultancy project and is eager to share her knowledge.",
  image: {
    url: "people/aurora.jpg",
  },
  social: {
    homepage: "https://aurorascharff.no/",
    mastodon: "", // This has to be a whole link
    twitter: "aurorascharff", // Handle without @ is enough
    bluesky: "aurorascharff.no",
    github: "aurorascharff",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "aurora-scharff-a86b88188",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Norway",
      code: "NO",
    },
    city: "Oslo",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
