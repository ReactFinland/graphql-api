import { Theme } from "./Theme";

const conferenceSeries: {
  [key: string]: {
    id: string;
    name: string;
    conferences: string[];
    theme: Theme;
  };
} = {
  ["react-finland"]: {
    id: "react-finland",
    name: "React Finland",
    conferences: ["react-finland-2018", "react-finland-2019"],
    theme: {
      primaryColor: "#002fa9",
      secondaryColor: "#5297e9",
      textColor: "#111",
      backgroundColor: "#eee",
    },
  },
  ["graphql-finland"]: {
    id: "graphql-finland",
    name: "GraphQL Finland",
    conferences: ["graphql-finland-2018"],
    theme: {
      primaryColor: "#e10098",
      secondaryColor: "#e10098",
      textColor: "#233239",
      backgroundColor: "#eee",
    },
  },
};

export default conferenceSeries;
