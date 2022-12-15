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
const map_1 = __importDefault(require("lodash/map"));
const complement_1 = __importDefault(require("polished/lib/color/complement"));
const invert_1 = __importDefault(require("polished/lib/color/invert"));
const React = __importStar(require("react"));
const ThemeTemplateContainer = styled_1.default.section ``;
const ThemeTemplateHeader = styled_1.default.h1 ``;
const FontsContainer = styled_1.default.section `
  margin-top: 1em;
  margin-bottom: 1em;
`;
const FontsPrimaryHeader = styled_1.default.h2 `
  margin-bottom: 0.5em;
`;
const FontsSecondaryHeader = styled_1.default.h3 `
  margin-bottom: 0.5em;
`;
const FontContainer = styled_1.default.div `
  font-family: "${({ fontFamily }) => fontFamily}";
`;
const TexturesContainer = styled_1.default.section `
  margin-top: 1em;
  margin-bottom: 1em;
`;
const TextureHeader = styled_1.default.h2 `
  margin-bottom: 0.5em;
`;
const Texture = styled_1.default.img `
  max-width: 8em;
  max-height: 8em;
`;
const ColorsContainer = styled_1.default.section `
  margin-top: 1em;
  margin-bottom: 1em;
`;
const ColorHeader = styled_1.default.h2 `
  margin-bottom: 0.5em;
`;
const Color = styled_1.default.div `
  padding: 1em;
  display: inline-block;
  width: 8em;
  height: 8em;
  background-color: ${({ color }) => color};
  color: ${({ color }) => tryTo(() => complement_1.default(invert_1.default(color)), "")};
`;
const LogosContainer = styled_1.default.section `
  margin-top: 1em;
  margin-bottom: 1em;
`;
const LogoHeader = styled_1.default.h2 `
  margin-bottom: 0.5em;
`;
const LogoContainer = styled_1.default.section `
  margin-right: 1em;
  display: inline-block;
  vertical-align: top;
  font-style: italic;
`;
const Logo = styled_1.default.img `
  max-width: 8em;
  max-height: 8em;
  background-color: ${({ property }) => tryTo(() => invert_1.default(property), "")};
`;
const LogoLabel = styled_1.default.label ``;
function tryTo(fn, defaultValue) {
    try {
        return fn();
    }
    catch (err) {
        return defaultValue;
    }
}
function ThemeTemplate({ id, theme }) {
    return (React.createElement(ThemeTemplateContainer, { id: id },
        React.createElement(ThemeTemplateHeader, null, "Theme"),
        React.createElement(FontsContainer, null,
            React.createElement(FontsPrimaryHeader, null, "Fonts"),
            React.createElement(FontsSecondaryHeader, null, "Primary"),
            React.createElement(FontContainer, { fontFamily: theme.fonts.primary }, "The quick brown fox jumps over the lazy dog"),
            React.createElement(FontsSecondaryHeader, null, "Secondary"),
            React.createElement(FontContainer, { fontFamily: theme.fonts.secondary }, "The quick brown fox jumps over the lazy dog")),
        React.createElement(TexturesContainer, null,
            React.createElement(TextureHeader, null, "Textures"),
            map_1.default(theme.textures, (texture, index) => (React.createElement(Texture, { key: index, src: texture.url })))),
        React.createElement(ColorsContainer, null,
            React.createElement(ColorHeader, null, "Colors"),
            map_1.default(theme.colors, (color, colorProperty) => (React.createElement(Color, { color: color, key: color }, colorProperty)))),
        React.createElement(LogosContainer, null,
            React.createElement(LogoHeader, null, "Logos"),
            map_1.default(theme.logos, (logo, logoProperty) => map_1.default(logo, (image, imageProperty) => {
                const property = `${logoProperty}.${imageProperty}`;
                return (React.createElement(LogoContainer, { key: property },
                    React.createElement(LogoLabel, null, property),
                    React.createElement(Logo, { property: logoProperty, src: image.url, alt: property })));
            })))));
}
ThemeTemplate.filename = "theme";
exports.default = ThemeTemplate;
//# sourceMappingURL=ThemeTemplate.js.map