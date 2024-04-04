import { Contact } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Maggie Appleton",
  about: `I sit at the intersection of design, anthropology, and programming. These three are at the core of everything I make. Combining them into a coherent career is a weird and ongoing challenge.

Titles and disciplines are fickle and fleeting. But my work fits under the umbrellas of UX design, visual interface design, and DX (developer experience). With some cultural analysis, writing, and visual illustration sprinkled on top.

I currently lead design atElicitwhere we're exploring how machine learning can help researchers with open-ended reasoning.`,
  image: {
    url: "people/maggie.jpeg",
  },
  social: {
    homepage: "https://maggieappleton.com/",
    mastodon: "https://indieweb.social/@maggie", // This has to be a whole link
    twitter: "Mappletons", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "maggieappleton",
    youtube: "",
    devto: "",
    // dribbble https://dribbble.com/mappleton
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [],
  type: [],
};

export default person;
