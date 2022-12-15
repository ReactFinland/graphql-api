"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Carolyn Stransky",
    about: "Carolyn Stransky (she/her) is a software developer and journalist based in Berlin, Germany. Her work focuses on creating accessible, user-centric interfaces. Out of the office, she tries to convince everyone that documentation is cool while also maintaining an admittedly ridiculous skincare routine. You can find her most places on the Internet @carolstran.",
    image: {
        url: "people/carolyn.jpg",
    },
    social: {
        twitter: "carolstran",
        github: "carolstran",
    },
    location: {
        country: {
            name: "Germany",
            code: "DE",
        },
        city: "Berlin",
    },
    keywords: [keywords_1.default.GRAPHQL, keywords_1.default.GRAPHQLJS],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=carolyn-stransky.js.map