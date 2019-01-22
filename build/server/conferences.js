"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_finland_2018_1 = __importDefault(require("../content/graphql-finland-2018"));
const react_finland_2018_1 = __importDefault(require("../content/react-finland-2018"));
const react_finland_2019_1 = __importDefault(require("../content/react-finland-2019"));
const conferences = {
    ["react-finland-2018"]: react_finland_2018_1.default,
    ["react-finland-2019"]: react_finland_2019_1.default,
    ["graphql-finland-2018"]: graphql_finland_2018_1.default,
};
exports.default = conferences;
//# sourceMappingURL=conferences.js.map