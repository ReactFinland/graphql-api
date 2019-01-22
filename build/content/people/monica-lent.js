"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Monica Lent",
    about: "Frontend Lead @SumUp. Balcony-gardener, and taco fanatic from Tucson, Arizona. I like cycling, craft beer, picnics, and knitwear. IPAs ⟩ IDEs.",
    image: {
        url: "people/monica.jpg",
    },
    social: {
        homepage: "https://monicalent.com/",
        twitter: "monicalent",
        github: "mlent",
        linkedin: "monica-lent-542122145",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.REACT, keywords_1.default.STYLING, keywords_1.default.TOOLING],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=monica-lent.js.map