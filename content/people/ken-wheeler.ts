import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ken Wheeler",
  about:
    "Ken is the Director of Open Source at Formidable, the author of several popular open source libraries, and a frequent conference speaker often focusing on alternative uses of React.\n\nHe is the creator of libraries such as Spectacle, react-music, react-game-kit and Webpack Dashboard. He also maintains a healthy Twitter presence, and enjoys red meat, whiskey and recreational archery.",
  image: {
    url: "people/ken.jpg",
  },
  social: {
    homepage: "",
    twitter: "ken_wheeler",
    github: "kenwheeler",
    linkedin: "kennywheeler",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Allenwood",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
