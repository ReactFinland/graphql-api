import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Andrey Okonetchnikov",
  about:
    "Andrey is a front-end engineer and UI designer from Russia who lives in Austria and works on modern user interfaces using web technologies. As an active Open Source contributor, he contributed to Webpack, React.js, and Jest; designed the PostCSS official website and created a bunch of logos for other OSS projects.\n\nAndrey is a co-organizer of the ReactVienna community, designer, and co-creator of ColorSnapper. He loves mountain biking, snowboarding, and specialty coffee.",
  image: {
    url: "people/andrey.jpg",
  },
  social: {
    homepage: "http://okonet.ru/",
    twitter: "okonetchnikov",
    github: "okonet",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [
    keywords.REACT,
    keywords.STYLING,
    keywords.STYLE_GUIDES,
    keywords.TOOLING,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
