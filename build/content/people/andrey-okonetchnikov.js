"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Andrey Okonetchnikov",
    about: "Andrey is a front-end engineer and UI designer from Russia who lives in Austria and works on modern user interfaces using web technologies. As an active Open Source contributor, he contributed to Webpack, React.js, and Jest; designed the PostCSS official website and created a bunch of logos for other OSS projects.\n\nAndrey is a co-organizer of the ReactVienna community, designer, and co-creator of ColorSnapper. He loves mountain biking, snowboarding, and specialty coffee.",
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
        keywords_1.default.REACT,
        keywords_1.default.STYLING,
        keywords_1.default.STYLE_GUIDES,
        keywords_1.default.TOOLING,
    ],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=andrey-okonetchnikov.js.map