"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const Session_1 = require("../../../server/schema/Session");
const juha_linnanen_1 = __importDefault(require("../../people/juha-linnanen"));
const talk = {
    people: [juha_linnanen_1.default],
    title: "CI/CD for React Native",
    description: `Both continuous integration and continuous delivery (CI/CD) are elements of software development best practices. Setting up CI/CD can be time consuming, even more so for a mobile project. Understanding the basics of how to apply CI/CD practices in React Native mobile application development to automate software release tasks will improve performance and will free up time more usefully spent elsewhere in the project.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.REACT_NATIVE],
    urls: {
        slides: "https://slides.react-finland.fi/2019/juha-linnanen.pdf",
        video: "https://www.youtube.com/watch?v=Lid-2xFU4vg",
    },
};
exports.default = talk;
//# sourceMappingURL=juha-linnanen.js.map