import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jen Luker",
  about: `Jen Luker is a Senior Staff Software Engineer who has spent the majority of her career as a full-stack developer using PHP, Javascript, ReactJS, and React Native but has a particular fondness for frontend technologies. She is a leader on engineering teams, and trains others in ReactJS, Accessibility, and beating imposter syndrome.

  Her motivations are fueled by a desire to make lives better, whether that be the teams she works with or the customers she supports. She is often heard repeating, “All problems are people problems, even the technical ones,” and believes that through collaboration and curiosity, solutions can be found for every problem.`,
  image: {
    url: "people/jen.jpg",
  },
  social: {
    homepage: "https://jenluker.com",
    twitter: "knitcodemonkey",
    github: "knitcodemonkey",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "knitcodemonkey",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Orem",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
