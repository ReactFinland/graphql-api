"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const juho_vepsalainen_1 = __importDefault(require("../../people/juho-vepsalainen"));
const talk = {
    people: [juho_vepsalainen_1.default],
    title: "Static Websites - The Final Frontier",
    description: "What was it like to build sites in the 90s? What did we learn? And how to do it now?",
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.REACT, keywords_1.default.STATIC_SITE_GENERATATION, keywords_1.default.WEBPACK],
    urls: {
        web: "https://docs.google.com/presentation/d/1dYwzzByKugHIrfA48cdhV0N-b2S2Ms_Ojd8I4ux_QRg/edit?usp=sharing",
    },
};
exports.default = talk;
//# sourceMappingURL=juho-vepsalainen.js.map