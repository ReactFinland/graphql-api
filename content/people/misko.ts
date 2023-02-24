import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Miško Hevery",
  about: `As CTO, Miško oversees the technology division that powers the Builder.io applications and software. Before joining Builder.io, he created Open Source platforms for Google, including Angular, AngularJS and was co-creator of Karma. While at Google, he brought a testing culture there with his blog. Before focusing on making the web better, he believes testing is the key to success.

  Miško started his career designing digital circuits and moved to databases, full-stack development and finally, front-end frameworks, giving him a unique perspective. He understands all of the layers from the web down to a transistor. In addition to Google, he worked for tech powerhouses Adobe Systems and Sun Microsystems.

  He holds an MS/BS from Rochester Institute of Technology and an MBA from Santa Clara University.
  `,
  image: {
    url: "people/misko.jpeg",
  },
  social: {
    homepage: "http://misko.hevery.com/",
    twitter: "mhevery",
    github: "mhevery",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "misko-hevery-3883b1",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Saratoga",
  },
  tagline: "Creator of Angular.js, Qwik",
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
