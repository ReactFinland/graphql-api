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
const file_saver_1 = require("file-saver");
const history_1 = require("history");
const fromPairs_1 = __importDefault(require("lodash/fromPairs"));
const get_1 = __importDefault(require("lodash/get"));
const map_1 = __importDefault(require("lodash/map"));
const set_1 = __importDefault(require("lodash/set"));
const query_string_1 = __importDefault(require("query-string"));
const React = __importStar(require("react"));
const retina_dom_to_image_1 = __importDefault(require("retina-dom-to-image"));
const components = __importStar(require("../components"));
const connect_1 = __importDefault(require("../components/connect"));
const GlobalStyles_1 = __importDefault(require("../components/GlobalStyles"));
const Select_1 = __importDefault(require("../components/Select"));
const VariableSelector_1 = __importDefault(require("../components/VariableSelector"));
const queries_1 = require("../queries");
const templates = __importStar(require("../templates"));
const AssetDesignerContainer = styled_1.default.article `
  background: #ddd;
  display: grid;
  grid-template-columns: ${({ width }) => width} 1fr;

  @media print {
    display: auto;
    grid-template-columns: auto;
  }
`;
const Sidebar = styled_1.default.aside `
  padding: 1em;
  vertical-align: top;
  height: 100vh;
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media print {
    display: none;
  }
`;
const SidebarHeader = styled_1.default.h2 ``;
const SidebarItem = styled_1.default.div `
  margin-bottom: 1em;
`;
const Main = styled_1.default.main `
  overflow: auto;
  margin: auto;
  align-self: center;
`;
const ExportButton = styled_1.default.button ``;
const VariableContainer = styled_1.default.div ``;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["UPDATE_SELECTION_ID"] = 0] = "UPDATE_SELECTION_ID";
    ActionTypes[ActionTypes["UPDATE_THEME_ID"] = 1] = "UPDATE_THEME_ID";
    ActionTypes[ActionTypes["UPDATE_VARIABLE"] = 2] = "UPDATE_VARIABLE";
    ActionTypes[ActionTypes["TOGGLE_SIDEBAR"] = 3] = "TOGGLE_SIDEBAR";
})(ActionTypes || (ActionTypes = {}));
function assetDesignerReducer(state, action) {
    const { field, value } = action;
    switch (action.type) {
        case ActionTypes.UPDATE_SELECTION_ID:
            updateQuery("selectionId", value);
            return Object.assign(Object.assign({}, state), { selectionId: value, variables: initializeVariables(value) });
        case ActionTypes.UPDATE_THEME_ID:
            updateQuery("themeId", value);
            return Object.assign(Object.assign({}, state), { themeId: value });
        case ActionTypes.UPDATE_VARIABLE:
            const newVariables = Object.assign({}, state.variables);
            // Needed to support nested access (mutates!)
            set_1.default(newVariables, field, value);
            updateQuery("variables", JSON.stringify(newVariables));
            return Object.assign(Object.assign({}, state), { variables: newVariables });
        case ActionTypes.TOGGLE_SIDEBAR:
            const showSidebar = !state.showSidebar;
            updateQuery("showSidebar", showSidebar);
            return Object.assign(Object.assign({}, state), { showSidebar });
        default:
            throw new Error("No matching reducer found!");
    }
}
function updateQuery(field, value) {
    const history = history_1.createBrowserHistory();
    const query = query_string_1.default.stringify(Object.assign(Object.assign({}, query_string_1.default.parse(location.search)), { [field]: value }));
    history.push(`?${query}`);
}
function AssetDesignerPage({ initialState = {
    selectionId: "",
    showSidebar: true,
}, themes, }) {
    if (!themes) {
        return null;
    }
    // TODO: How to make sure these won't capture from inputs?
    React.useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
    function handleUserKeyPress({ key }) {
        if (key === "s") {
            dispatch({ type: ActionTypes.TOGGLE_SIDEBAR });
        }
    }
    const [state, dispatch] = React.useReducer(assetDesignerReducer, initialState, ({ selectionId }) => ({
        selectionId,
        showSidebar: initializeShowSidebar(),
        themeId: initializeThemeId(),
        variables: initializeVariables(selectionId),
    }));
    const theme = themes.find(({ id }) => id === state.themeId) || themes[0];
    const { selectionId, showSidebar } = state;
    const selection = getSelection(selectionId) || NoSelectionFound;
    const sideBarWidth = showSidebar ? "18em" : 0;
    const assetDesignTemplateId = "asset-design-template-id";
    return (React.createElement(AssetDesignerContainer, { width: sideBarWidth },
        React.createElement(GlobalStyles_1.default, { fonts: theme.fonts }),
        showSidebar && (React.createElement(AssetDesignerSidebar, { themes: themes, theme: theme, assetDesignTemplateId: assetDesignTemplateId, selection: selection, selectionId: selectionId, variables: state.variables, onUpdateTheme: (field, value) => dispatch({ type: ActionTypes.UPDATE_THEME_ID, field, value }), onUpdateSelection: (value) => dispatch({ type: ActionTypes.UPDATE_SELECTION_ID, value }), onUpdateVariable: (field, value) => dispatch({ type: ActionTypes.UPDATE_VARIABLE, field, value }) })),
        React.createElement(Main, null, React.createElement(selection, Object.assign(Object.assign({}, state.variables), { theme,
            sideBarWidth, id: assetDesignTemplateId })))));
}
function initializeShowSidebar() {
    return Boolean(get_1.default(query_string_1.default.parse(location.search), "showSidebar", true));
}
function initializeThemeId() {
    return get_1.default(query_string_1.default.parse(location.search), "themeId", `""`);
}
function initializeVariables(selectionId) {
    const selection = getSelection(selectionId) || {};
    const queryParameters = get_1.default(query_string_1.default.parse(location.search), "variables", "{}");
    let queryVariables = {};
    try {
        // TODO: Figure out how to eliminate "as"
        queryVariables = JSON.parse(queryParameters);
    }
    catch (err) {
        console.log(err);
    }
    return Object.assign(Object.assign({}, fromPairs_1.default(map_1.default(selection.variables, ({ id, validation }) => {
        return [id, get_1.default(validation, "default")];
    }))), queryVariables);
}
function getSelection(selectionId) {
    return templates[selectionId] || components[selectionId];
}
function NoSelectionFound() {
    return React.createElement(React.Fragment, null, "No selection found!");
}
function AssetDesignerSidebar({ themes, theme, assetDesignTemplateId, selection, selectionId, variables, onUpdateTheme, onUpdateSelection, onUpdateVariable, }) {
    const selectionVariables = selection.variables;
    const variableOptions = selectionVariables
        ? map_1.default(selectionVariables, (variable) => (Object.assign(Object.assign({}, variable), { value: variables[variable.id] })))
        : []; // TODO: Overlay to selection
    return (React.createElement(Sidebar, { backgroundColor: theme ? theme.colors.background : "" },
        React.createElement(SidebarHeader, null, "Asset designer"),
        React.createElement(SidebarItem, null,
            React.createElement(ExportButton, { onClick: () => {
                    const domNode = document.getElementById(assetDesignTemplateId);
                    if (domNode) {
                        retina_dom_to_image_1.default
                            .toBlob(domNode)
                            .then((blob) => {
                            // TODO: Improve this further (i.e. name of the speaker for tweets etc.)
                            file_saver_1.saveAs(blob, `${selection.filename}.png`);
                        })
                            .catch((err) => console.error(err));
                    }
                } }, "Export image as PNG")),
        React.createElement(SidebarItem, null,
            React.createElement(ExportButton, { onClick: () => {
                    const domNode = document.getElementById(assetDesignTemplateId);
                    if (domNode) {
                        retina_dom_to_image_1.default
                            .toSvg(domNode)
                            .then((svg) => {
                            // TODO: Improve this further (i.e. name of the speaker for tweets etc.)
                            file_saver_1.saveAs(svg, `${selection.filename}.svg`);
                        })
                            .catch((err) => console.error(err));
                    }
                } }, "Export image as SVG")),
        React.createElement(SidebarItem, null,
            React.createElement(SidebarHeader, null, "Themes"),
            React.createElement(ThemeSelector, { themes: themes, selectedTheme: theme.id, onChange: onUpdateTheme })),
        React.createElement(SidebarItem, null,
            React.createElement(SidebarHeader, null, "Templates"),
            React.createElement(ComponentSelector, { templates: Object.keys(templates), selectedTemplate: selectionId, onChange: onUpdateSelection })),
        React.createElement(SidebarItem, null,
            React.createElement(SidebarHeader, null, "Components"),
            React.createElement(ComponentSelector, { templates: Object.keys(components), selectedTemplate: selectionId, onChange: onUpdateSelection })),
        variableOptions.length > 0 && (React.createElement(SidebarItem, null,
            React.createElement(SidebarHeader, null, "Variables"),
            map_1.default(variableOptions, (variable) => (React.createElement(VariableContainer, { key: variable.id },
                React.createElement(VariableSelector_1.default, { variables: variables, field: variable.id, selectedVariable: get_1.default(variable, "value"), query: variable.query, mapToCollection: variable.mapToCollection, mapToOption: variable.mapToOption, validation: variable.validation, onChange: onUpdateVariable }))))))));
}
function ThemeSelector({ themes, selectedTheme, onChange, }) {
    return (React.createElement(Select_1.default, { options: themes
            ? map_1.default(themes, (theme) => ({
                value: theme.id,
                label: theme.id,
            }))
            : [], selected: selectedTheme, onChange: ({ target: { value } }) => {
            onChange("conferenceSeriesId", value);
        } }));
}
const ComponentSelectorContainer = styled_1.default.div ``;
const ComponentSelectorSelectedOption = styled_1.default.div ``;
const ComponentSelectorOption = styled_1.default.a `
  display: block;
`;
function ComponentSelector({ templates, selectedTemplate, onChange, }) {
    return (React.createElement(ComponentSelectorContainer, null, map_1.default(templates, (templateId) => templateId === selectedTemplate ? (React.createElement(ComponentSelectorSelectedOption, { key: templateId }, templateId)) : (React.createElement(ComponentSelectorOption, { key: templateId, href: "#", onClick: (e) => {
            e.preventDefault();
            onChange(templateId);
        } }, templateId)))));
}
const ConnectedAssetDesignerPage = connect_1.default("/graphql", queries_1.themesQuery)(AssetDesignerPage);
exports.default = ConnectedAssetDesignerPage;
//# sourceMappingURL=AssetDesignerPage.js.map