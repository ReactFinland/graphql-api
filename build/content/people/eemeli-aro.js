"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Eemeli Aro",
    about: "Eemeli has been falling down the rabbit hole of JavaScript localization for about six years now, and keeps wondering at what the next level might be. For work he makes complicated systems seem simple, for fun he writes open-source libraries, and in his spare time he organises science fiction conventions.",
    image: {
        url: "people/eemeli.jpg",
    },
    social: {
        homepage: "",
        twitter: "eemeli_aro",
        github: "eemeli",
    },
    location: {
        country: {
            name: "Finland",
            code: "FI",
        },
        city: "Helsinki",
    },
    keywords: [keywords_1.default.TOOLING, keywords_1.default.REACT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=eemeli-aro.js.map