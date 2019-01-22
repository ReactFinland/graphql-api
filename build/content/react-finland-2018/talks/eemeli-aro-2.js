"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../../server/schema");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const eemeli_aro_1 = __importDefault(require("../../people/eemeli-aro"));
const talk = {
    people: [eemeli_aro_1.default],
    title: "Why I YAML",
    description: 'I\'m writing my own YAML library, because none of the existing ones allowed me to manage comments within YAML files. Apparently this is not a thing one should do, as "The YAML spec is larger than the XML and XML Namespaces specs combined" and "No one in their right mind would want to write a parser for it."\n\nBut, well, here we are. Let me explain where "here" is, the route I took, and why any of this matters.',
    type: schema_1.SessionType.LIGHTNING_TALK,
    keywords: [keywords_1.default.TOOLING],
    urls: {
        web: "https://docs.google.com/presentation/d/e/2PACX-1vRFz5W8H1CavTWgQvPMRG6gud5ZXxy4TT9QNL82Zy8radlIGKhDps6cHMkCpjr1rP0t4j-Ofhceq6_M/pub?start=false&loop=false&delayms=3000&slide=id.p",
    },
};
exports.default = talk;
//# sourceMappingURL=eemeli-aro-2.js.map