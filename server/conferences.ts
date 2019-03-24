import graphQLFinland2018 from "../content/graphql-finland-2018";
import reactFinland2018 from "../content/react-finland-2018";
import reactFinland2019 from "../content/react-finland-2019";
import reasonConf2019 from "../content/reason-conf-2019";
import typeof2019 from "../content/typeof-2019";
import { Conference } from "./schema/Conference";

const conferences: { [id: string]: Conference } = {
  ["reason-conf-2019"]: reasonConf2019,
  ["react-finland-2018"]: reactFinland2018,
  ["react-finland-2019"]: reactFinland2019,
  ["typeof-2019"]: typeof2019,
  ["graphql-finland-2018"]: graphQLFinland2018,
};

export default conferences;
