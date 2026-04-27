import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tony Ennis",
  about: `Tony is an entrepreneur and engineer who is passionate about building web products using the modern web. He authored [the HTML First manifesto](https://html-first.com/) - a set of arguments for applying the principle of least power, [Base Styles](https://base-styles.com/) - a set of css components and conventions, and [Mini](https://mini-js.com/) - a 4kb web component for keeping a handle on interactivity in vanilla web apps. His 2025 talk, "The Platform & A Stylesheet", explored the progress being made in the html spec, and a future where html first experiences are on par with meta-framework driven ones.`,
  image: {
    url: "people/tony-ennis.jpeg",
  },
  social: {
    homepage: "https://www.tonyennis.com/",
    mastodon: "", // This has to be a whole link
    twitter: "tonyennis", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "tonyennis1",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Ireland",
      code: "IE",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
