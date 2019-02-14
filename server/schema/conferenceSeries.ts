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
      blackLogoWithText: {
        url: "react-finland/logo/v2/logo-black-with-text.svg",
      },
      blackLogoWithoutText: { url: "react-finland/logo/v2/logo-black.svg" },
      coloredLogoWithText: {
        url: "react-finland/logo/v2/logo-colored-with-text.svg",
      },
      coloredLogoWithoutText: { url: "react-finland/logo/v2/logo-colored.svg" },
      whiteLogoWithText: {
        url: "react-finland/logo/v2/logo-white-with-text.svg",
      },
      whiteLogoWithoutText: { url: "react-finland/logo/v2/logo-white.svg" },
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
      blackLogoWithText: {
        url: "graphql-finland/logo/v2/logo-black-with-text.svg",
      },
      blackLogoWithoutText: { url: "graphql-finland/logo/v2/logo-black.svg" },
      coloredLogoWithText: {
        url: "graphql-finland/logo/v2/logo-colored-with-text.svg",
      },
      coloredLogoWithoutText: {
        url: "graphql-finland/logo/v2/logo-colored.svg",
      },
      whiteLogoWithText: {
        url: "graphql-finland/logo/v2/logo-white-with-text.svg",
      },
      whiteLogoWithoutText: { url: "graphql-finland/logo/v2/logo-white.svg" },
    },
  },
};

export default conferenceSeries;
