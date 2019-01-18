import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Rotem Mizrachi-Meidan",
  about:
    "Rotem is a Software Engineer, open source advocate, passionate about Android, React Native, mobile performance, writing developer tools and Lego! In his current position at Wix, Rotem is working with React Native, writing infrastructure and testing tools.",
  image: {
    url: "people/rotem.jpg",
  },
  social: {
    homepage: "",
    twitter: "rotemmiz",
    github: "rotemmiz",
    linkedin: "rotem-mizrachi-meidan-a2306a14",
  },
  location: {
    country: {
      name: "Israel",
      code: "IL",
    },
    city: "Tel Aviv",
  },
  keywords: [
    keywords.DETOX,
    keywords.REACT,
    keywords.REACT_NATIVE,
    keywords.TESTING,
    keywords.TOOLING,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
