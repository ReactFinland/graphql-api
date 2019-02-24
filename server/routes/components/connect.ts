import { request } from "graphql-request";
import * as React from "react";

// TODO: Extract apiUrl to context?
function connect(apiUrl, query, variables = {}, propsToVars = props => props) {
  return component => {
    let queryCache = {};

    interface ConnectState {
      data: {};
    }

    class Connect<P = {}> extends React.Component<P, ConnectState> {
      public state: ConnectState = {
        data: {},
      };
      constructor(props) {
        super(props);

        this.state = { data: queryCache };
      }
      public componentDidMount() {
        this.fetchData().then(data => this.setState(() => data));
      }
      public render() {
        if (this.state.data === null) {
          return null;
        } else {
          return React.createElement(component, {
            ...this.props,
            ...this.state.data,
          });
        }
      }
      public fetchData() {
        if (propsToVars) {
          variables = {
            ...variables,
            ...propsToVars(this.props),
          };
        }
        return request(apiUrl, query, variables).then(data => {
          queryCache = data;

          return { data };
        });
      }
    }

    return Connect;
  };
}

export default connect;
