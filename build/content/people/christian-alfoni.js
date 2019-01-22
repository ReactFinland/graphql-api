"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../server/schema");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Christian Alfoni",
    about: "Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.",
    image: {
        url: "people/christian.jpg",
    },
    social: {
        homepage: "http://www.christianalfoni.com/",
        twitter: "christianalfoni",
        github: "christianalfoni",
    },
    location: {
        country: {
            name: "Norway",
            code: "NO",
        },
        city: "Trondheim",
    },
    keywords: [keywords_1.default.CEREBRAL, keywords_1.default.REACT, keywords_1.default.STATE_MANAGEMENT],
    type: [schema_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=christian-alfoni.js.map