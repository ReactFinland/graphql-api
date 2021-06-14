import freezingEdge2020 from "../content/freezing-edge-2020";
import graphQLFinland2018 from "../content/graphql-finland-2018";
import graphQLFinland2020 from "../content/graphql-finland-2020";
import halfstackVienna2019 from "../content/halfstack-vienna-2019";
import reactFinland2018 from "../content/react-finland-2018";
import reactFinland2019 from "../content/react-finland-2019";
import reactFinland2020 from "../content/react-finland-2020";
import reactFinland2021 from "../content/react-finland-2021";
import reasonConf2019 from "../content/reason-conf-2019";
import techMovieNight from "../content/techmovienight";
import typeof2019 from "../content/typeof-2019";
import { Conference } from "./schema/Conference";

const conferences: { [id: string]: Conference } = {
  ["freezing-edge-2020"]: freezingEdge2020,
  ["techmovienight"]: techMovieNight,
  ["halfstack-vienna-2019"]: halfstackVienna2019,
  ["reason-conf-2019"]: reasonConf2019,
  ["react-finland-2018"]: reactFinland2018,
  ["react-finland-2019"]: reactFinland2019,
  ["react-finland-2020"]: reactFinland2020,
  ["react-finland-2021"]: reactFinland2021,
  ["typeof-2019"]: typeof2019,
  ["graphql-finland-2018"]: graphQLFinland2018,
  ["graphql-finland-2020"]: graphQLFinland2020,
};

export default conferences;
