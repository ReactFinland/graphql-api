"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const ImageContainer = styled_1.default.div `
  display: grid;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  padding: 2em;
  box-sizing: border-box;
`;
const ImageElement = styled_1.default.img `
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  align-self: center;
  justify-self: center;
`;
const ImageContent = ({ content, css }) => (core_1.jsx(ImageContainer, { css: css },
    core_1.jsx(ImageElement, { src: content.url, title: content.title || "", height: "100%" })));
exports.default = ImageContent;
//# sourceMappingURL=ImageContent.js.map