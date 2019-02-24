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
      colors: {
        primary: "#002fa9",
        secondary: "#5297e9",
        text: "#111",
        background: "#eee",
      },
      logos: {
        blackWithText: {
          url: "/media/react-finland/logo/v2/logo-black-with-text.svg",
        },
        blackWithoutText: {
          url: "/media/react-finland/logo/v2/logo-black.svg",
        },
        coloredWithText: {
          url: "/media/react-finland/logo/v2/logo-colored-with-text.svg",
        },
        coloredWithoutText: {
          url: "/media/react-finland/logo/v2/logo-colored.svg",
        },
        whiteWithText: {
          url: "/media/react-finland/logo/v2/logo-white-with-text.svg",
        },
        whiteWithoutText: {
          url: "/media/react-finland/logo/v2/logo-white.svg",
        },
      },
    },
  },
  ["graphql-finland"]: {
    id: "graphql-finland",
    name: "GraphQL Finland",
    conferences: ["graphql-finland-2018"],
    theme: {
      colors: {
        primary: "#e10098",
        secondary: "#e10098",
        text: "#233239",
        background: "#eee",
      },
      logos: {
        blackWithText: {
          url: "/media/graphql-finland/logo/v1/logo-black-with-text.svg",
        },
        blackWithoutText: {
          url: "/media/graphql-finland/logo/v1/logo-black.svg",
        },
        coloredWithText: {
          url: "/media/graphql-finland/logo/v1/logo-colored-with-text.svg",
        },
        coloredWithoutText: {
          url: "/media/graphql-finland/logo/v1/logo-colored.svg",
        },
        whiteWithText: {
          url: "/media/graphql-finland/logo/v1/logo-white-with-text.svg",
        },
        whiteWithoutText: {
          url: "/media/graphql-finland/logo/v1/logo-white.svg",
        },
      },
    },
  },
};

export default conferenceSeries;
