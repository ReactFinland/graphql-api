"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const exclude_props_1 = __importDefault(require("./exclude-props"));
const slide_layouts_1 = __importDefault(require("./slide-layouts"));
/*import { EmbedContent } from "./slide-layouts/EmbedContent";
import { GridContent } from "./slide-layouts/GridContent";
import { MarkdownContent } from "./slide-layouts/MarkdownContent";
import { SectionContent } from "./slide-layouts/SectionContent";
import { TitleContent } from "./slide-layouts/TitleContent";*/
const SlideContainer = styled_1.default.div ``;
const Slide = styled_1.default.div ``;
const SlideNumber = styled_1.default(exclude_props_1.default("index", "div")) `
  position: absolute;
  top: ${({ index }) => (index + 1) * 100 - 5}vh;
  right: 3vw;
  opacity: 0.8;
`;
const SlideProgress = styled_1.default(exclude_props_1.default(["color", "ratio"], "div")) `
  position: fixed;
  width: ${({ ratio }) => ratio * 100}%;
  height: 3vh;
  top: 97vh;
  background-color: ${(props) => props.color};
  opacity: 0.8;
`;
function Slides({ selectedSlide, slides = [], theme, presentationID, conferenceId, features, }) {
    return (react_1.default.createElement(SlideContainer, null,
        slides.map((slide, index) => {
            const slideKey = `slide-${index}`;
            // Slides are given class names for keyboard navigation to work.
            return (react_1.default.createElement(Slide, { className: slideKey, key: slideKey },
                react_1.default.createElement(getLayout(slide.layout), Object.assign(Object.assign({}, slide), { conferenceId,
                    theme,
                    presentationID })),
                features.showSlideNumber && index ? (react_1.default.createElement(SlideNumber, { index: index },
                    index,
                    "/",
                    slides.length - 1)) : null));
        }),
        features.showSlideProgress && selectedSlide ? (react_1.default.createElement(SlideProgress, { color: theme.colors.secondary, ratio: selectedSlide / (slides.length - 1) }, "\u00A0")) : null));
}
function getLayout(id) {
    if (!slide_layouts_1.default[id]) {
        throw new Error(`No layout found for ${id}`);
    }
    return slide_layouts_1.default[id];
}
exports.default = Slides;
//# sourceMappingURL=Slides.js.map