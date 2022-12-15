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
const graphql_request_1 = require("graphql-request");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const React = __importStar(require("react"));
// TODO: Extract apiUrl to context?
function connect(apiUrl, query, variables = {}, propsToVars = props => props) {
    return function getConnect(component) {
        let queryCache = {};
        class Connect extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    data: {},
                };
                this.state = { data: queryCache };
            }
            componentDidMount() {
                this.fetchData().then(data => this.setState(() => data));
            }
            componentDidUpdate(prevProps) {
                if (!isEqual_1.default(prevProps, this.props)) {
                    this.fetchData().then(data => this.setState(() => data));
                }
            }
            render() {
                if (this.state.data === null) {
                    return null;
                }
                return React.createElement(component, Object.assign(Object.assign({}, this.props), this.state.data));
            }
            fetchData() {
                if (propsToVars) {
                    variables = Object.assign(Object.assign({}, variables), propsToVars(this.props));
                }
                return graphql_request_1.request(apiUrl, query, variables)
                    .then(data => {
                    queryCache = data;
                    return { data };
                })
                    .catch(err => console.error(err));
            }
        }
        return Connect;
    };
}
exports.default = connect;
//# sourceMappingURL=connect.js.map