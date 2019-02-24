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
      id: "react-finland",
      colors: {
        primary: "#002fa9",
        secondary: "#5297e9",
        text: "#111",
        background: "#eee",
      },
      logos: {
        black: {
          withText: {
            url: "/media/react-finland/logo/v2/logo-black-with-text.svg",
          },
          withoutText: {
            url: "/media/react-finland/logo/v2/logo-black.svg",
          },
        },
        colored: {
          withText: {
            url: "/media/react-finland/logo/v2/logo-colored-with-text.svg",
          },
          withoutText: {
            url: "/media/react-finland/logo/v2/logo-colored.svg",
          },
        },
        white: {
          withText: {
            url: "/media/react-finland/logo/v2/logo-white-with-text.svg",
          },
          withoutText: {
            url: "/media/react-finland/logo/v2/logo-white.svg",
          },
        },
      },
    },
  },
  ["graphql-finland"]: {
    id: "graphql-finland",
    name: "GraphQL Finland",
    conferences: ["graphql-finland-2018"],
    theme: {
      id: "graphql-finland",
      colors: {
        primary: "#e10098",
        secondary: "#ff1eb6",
        text: "#233239",
        background: "#eee",
      },
      logos: {
        black: {
          withText: {
            url: "/media/graphql-finland/logo/v1/logo-black-with-text.svg",
          },
          withoutText: {
            url: "/media/graphql-finland/logo/v1/logo-black.svg",
          },
        },
        colored: {
          withText: {
            url: "/media/graphql-finland/logo/v1/logo-colored-with-text.svg",
          },
          withoutText: {
            url: "/media/graphql-finland/logo/v1/logo-colored.svg",
          },
        },
        white: {
          withText: {
            url: "/media/graphql-finland/logo/v1/logo-white-with-text.svg",
          },
          withoutText: {
            url: "/media/graphql-finland/logo/v1/logo-white.svg",
          },
        },
      },
    },
  },
};

export default conferenceSeries;
