"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Contacts = ({ items = [], render, renderProps = {} }) => (react_1.default.createElement(react_1.default.Fragment, null, items.map((contact, key) => react_1.default.createElement(render, Object.assign(Object.assign(Object.assign({}, contact), renderProps), { key })))));
exports.default = Contacts;
//# sourceMappingURL=Contacts.js.map