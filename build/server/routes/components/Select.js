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
const React = __importStar(require("react"));
const SelectContainer = styled_1.default.select `
  width: ${({ width }) => width || ""};
`;
function Select({ width, onChange, options, selected }) {
    return (React.createElement(SelectContainer, { width: width, onChange: onChange, value: selected || getSelectedValue(options) }, options.map(({ value, label }) => (React.createElement("option", { key: value, value: value }, label)))));
}
function getSelectedValue(options) {
    if (options.length <= 0) {
        return;
    }
    const selectedOptions = options.filter(({ selected }) => selected);
    if (selectedOptions.length <= 0) {
        return;
    }
    // TODO: This picks just the first one. Likely we should not even do this.
    return selectedOptions[0].value;
}
exports.default = Select;
//# sourceMappingURL=Select.js.map