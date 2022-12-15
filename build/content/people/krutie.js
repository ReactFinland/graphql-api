"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Krutie Patel",
    about: `I'm a front-end developer. I create interactive web stuff using Vue js and Nuxt js. Some other frameworks and libraries I also enjoy working with include GSAP, Laravel ⚡️ and Jamstack (JavaScript, APIs + Markup). I love writing ✏️ articles about what I learn and share with Vue/Nuxt community. You can find my blog-posts on my [ website](https://krutiepatel.com/blog), which is also created using 👑 Nuxt js.

Apart from this, I also love creating [colour-coded diagrams](https://krutiepatel.com/diagrams). I create them to capture and document my learning. Diagraming have been an effective tool in my learning journey of Laravel, Vue js and of course, my absolute favourite, Nuxt js.`,
    image: {
        url: "people/krutie.jpg",
    },
    social: {
        homepage: "https://krutiepatel.com/",
        twitter: "KrutiePatel",
        github: "Krutie",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Australia",
            code: "AU",
        },
        city: "",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=krutie.js.map