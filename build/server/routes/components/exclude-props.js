"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const omit_1 = __importDefault(require("lodash/omit"));
const react_1 = __importDefault(require("react"));
function excludeProps(exclude, element) {
    const ExcludedStyled = props => react_1.default.createElement(element, omit_1.default(props, exclude));
    return ExcludedStyled;
}
exports.default = excludeProps;
//# sourceMappingURL=exclude-props.js.map