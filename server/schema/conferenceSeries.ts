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
        url: "/media/react-finland/logo/v2/logo-black-with-text.svg",
      },
      blackLogoWithoutText: {
        url: "/media/react-finland/logo/v2/logo-black.svg",
      },
      coloredLogoWithText: {
        url: "/media/react-finland/logo/v2/logo-colored-with-text.svg",
      },
      coloredLogoWithoutText: {
        url: "/media/react-finland/logo/v2/logo-colored.svg",
      },
      whiteLogoWithText: {
        url: "/media/react-finland/logo/v2/logo-white-with-text.svg",
      },
      whiteLogoWithoutText: {
        url: "/media/react-finland/logo/v2/logo-white.svg",
      },
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
        url: "/media/graphql-finland/logo/v1/logo-black-with-text.svg",
      },
      blackLogoWithoutText: {
        url: "/media/graphql-finland/logo/v1/logo-black.svg",
      },
      coloredLogoWithText: {
        url: "/media/graphql-finland/logo/v1/logo-colored-with-text.svg",
      },
      coloredLogoWithoutText: {
        url: "/media/graphql-finland/logo/v1/logo-colored.svg",
      },
      whiteLogoWithText: {
        url: "/media/graphql-finland/logo/v1/logo-white-with-text.svg",
      },
      whiteLogoWithoutText: {
        url: "/media/graphql-finland/logo/v1/logo-white.svg",
      },
    },
  },
};

export default conferenceSeries;
