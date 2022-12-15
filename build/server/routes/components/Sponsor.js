"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const SponsorContent = styled_1.default.img `
  vertical-align: middle;
  justify-self: center;
  display: ${({ rules, type }) => rules[type].display};
  max-height: ${({ rules, type }) => rules[type]["max-height"]};
  max-width: ${({ rules, type }) => rules[type]["max-width"]};
  width: ${({ rules, type }) => rules[type]["width"]};
  margin: ${({ rules, type }) => rules[type].margin};
`;
const Sponsor = ({ name, image, logoProps, rules, type }) => (react_1.default.createElement(SponsorContent, { src: image.url, name: name, props: logoProps, rules: rules, type: type }));
exports.default = Sponsor;
//# sourceMappingURL=Sponsor.js.map