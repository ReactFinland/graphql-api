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
const get_1 = __importDefault(require("lodash/get"));
const map_1 = __importDefault(require("lodash/map"));
const React = __importStar(require("react"));
const connect_1 = __importDefault(require("./connect"));
const Select_1 = __importDefault(require("./Select"));
const SelectorLabel = styled_1.default.label `
  margin-right: 1em;
`;
const SelectorInput = styled_1.default.input `
  width: 100%;
`;
const SelectorTextArea = styled_1.default.textarea `
  width: 100%;
`;
const SelectorContainer = styled_1.default.div `
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
`;
function VariableSelector({ field, selectedVariable, query, mapToCollection, mapToOption, validation, onChange, variables, }) {
    if (!query) {
        return (React.createElement(VariableFields, { field: field, validation: validation, selectedVariable: selectedVariable, onChange: onChange }));
    }
    const ConnectedSelect = connect_1.default("/graphql", query, variables)(result => {
        const collection = mapToCollection(result);
        return (React.createElement(SelectorContainer, null,
            React.createElement(SelectorLabel, null, field),
            React.createElement(Select_1.default, { width: "100%", options: collection
                    ? [{ value: "", label: "" }].concat(collection.map(mapToOption))
                    : [], selected: selectedVariable, onChange: ({ target: { value } }) => {
                    onChange(field, value);
                } })));
    });
    return React.createElement(ConnectedSelect, null);
}
function VariableFields({ validation, selectedVariable, onChange, field }) {
    if (validation.type === String) {
        // TODO: Use an enum here instead
        if (validation.modifier === "long") {
            return (React.createElement(SelectorContainer, null,
                React.createElement(SelectorLabel, null, field),
                React.createElement(SelectorTextArea, { defaultValue: selectedVariable, onChange: ({ target: { value } }) => {
                        onChange(field, value);
                    }, rows: 8 })));
        }
        return (React.createElement(SelectorContainer, null,
            React.createElement(SelectorLabel, null, field),
            React.createElement(SelectorInput, { type: "text", defaultValue: selectedVariable, onChange: ({ target: { value } }) => {
                    onChange(field, value);
                } })));
    }
    if (validation.type === Number) {
        return (React.createElement(SelectorContainer, null,
            React.createElement(SelectorLabel, null, field),
            React.createElement(SelectorInput, { type: "number", defaultValue: selectedVariable, onChange: ({ target: { value } }) => {
                    onChange(field, Number(value));
                } })));
    }
    if (validation.type === Boolean) {
        return (React.createElement(SelectorContainer, null,
            React.createElement(SelectorLabel, null, field),
            React.createElement(SelectorInput, { type: "checkbox", checked: selectedVariable, onChange: ({ target: { checked } }) => {
                    onChange(field, checked);
                } })));
    }
    if (validation.type === "enum") {
        const values = validation.values;
        return (React.createElement(SelectorContainer, null,
            React.createElement(SelectorLabel, null, field),
            React.createElement(Select_1.default, { width: "100%", options: values
                    ? [{ value: "", label: "" }].concat(
                    /* TODO: This assumes uniqueness */
                    map_1.default(values, label => ({
                        value: label,
                        label,
                    })))
                    : [], selected: selectedVariable, onChange: ({ target: { value } }) => {
                    onChange(field, value);
                } })));
    }
    const fields = validation.type._fields[validation.type.name];
    if (fields) {
        const validationDefaults = validation.default;
        return (React.createElement(React.Fragment, null, map_1.default(fields, ({ type, values }, id) => (React.createElement(VariableFields, { key: id, validation: {
                id,
                type,
                values,
            }, selectedVariable: get_1.default(validationDefaults, id) || get_1.default(selectedVariable, id), onChange: onChange, field: `${field}.${id}` })))));
    }
    console.error(`Type ${validation.type} hasn't been implemented yet`);
    return null;
}
exports.default = VariableSelector;
//# sourceMappingURL=VariableSelector.js.map