"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const React = __importStar(require("react"));
const Card_1 = __importDefault(require("../components/Card"));
const BusinessCardTemplateContainer = styled_1.default.section ``;
const BusinessCardContainer = styled_1.default(Card_1.default.Container) ``;
const BusinessCardFront = styled_1.default(Card_1.default.Front) `
  padding: 5mm;
`;
const BusinessCardBack = styled_1.default(Card_1.default.Back) `
  padding: 5mm;
`;
function BusinessCardTemplate({ id, theme, showFront, width, height, front = "", back = "", }) {
    const frontText = front.replace(/\r?\n/g, "<br />");
    const backText = back.replace(/\r?\n/g, "<br />");
    return (React.createElement(BusinessCardTemplateContainer, { id: id },
        React.createElement(BusinessCardContainer, { width: width, height: height },
            React.createElement(BusinessCardFront, { backgroundColor: theme.colors.background, textColor: theme.colors.text },
                React.createElement(markdown_to_jsx_1.default, null, showFront ? frontText : backText)),
            React.createElement(BusinessCardBack, { backgroundColor: theme.colors.background, textColor: theme.colors.text },
                React.createElement(markdown_to_jsx_1.default, null, showFront ? backText : frontText)))));
}
BusinessCardTemplate.filename = "business-card";
BusinessCardTemplate.variables = [
    {
        id: "showFront",
        validation: { type: Boolean, default: true },
    },
    {
        id: "width",
        validation: { type: String, default: "85mm" },
    },
    {
        id: "height",
        validation: { type: String, default: "55mm" },
    },
    {
        id: "front",
        // TODO: Use proper TS enum for modifiers
        validation: {
            type: String,
            modifier: "long",
            default: `John Woo
**+1234567890**

Woo Corp. - CO123456789
demo@localhost`,
        },
    },
    {
        id: "back",
        // TODO: Use proper TS enum for modifiers
        validation: {
            type: String,
            modifier: "long",
            default: `Martial Artist`,
        },
    },
];
exports.default = BusinessCardTemplate;
//# sourceMappingURL=BusinessCardTemplate.js.map