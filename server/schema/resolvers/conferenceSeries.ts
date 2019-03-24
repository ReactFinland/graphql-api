import { Theme } from "../Theme";

const conferenceSeries: {
  [key: string]: {
    id: string;
    name: string;
    conferences: string[];
    theme: Theme;
  };
} = {
  typeof: {
    id: "typeof",
    name: "typeof",
    conferences: [], // TODO
    theme: {
      id: "typeof",
      textures: [{ url: "/media/assets/typeof.png" }],
      colors: {
        primary: "#9013fe",
        secondary: "#2d2a96",
        text: "#09020f",
        background: "white",
      },
      fonts: {
        primary: "Nunito",
        secondary: "Nunito",
        variants: [
          {
            href: "https://fonts.googleapis.com/css?family=Nunito",
          },
        ],
      },
      logos: {
        black: {
          withText: {
            url: "/media/typeof/logo/logo-black-with-text.svg",
          },
          withoutText: {
            url: "/media/typeof/logo/logo-black.svg",
          },
        },
        colored: {
          withText: {
            url: "/media/typeof/logo/logo-colored-with-text.svg",
          },
          withoutText: {
            url: "/media/typeof/logo/logo-colored.svg",
          },
        },
        white: {
          withText: {
            url: "/media/typeof/logo/logo-white-with-text.svg",
          },
          withoutText: {
            url: "/media/typeof/logo/logo-white.svg",
          },
        },
      },
    },
  },
  "reason-conf": {
    id: "reason-conf",
    name: "ReasonConf",
    conferences: ["reason-conf-2019"],
    theme: {
      id: "reason-conf",
      textures: [{ url: "/media/reason-conf/texture.png" }],
      colors: {
        primary: "#dd4b39",
        secondary: "#385571",
        text: "#5e574d",
        background: "#F6F4F1",
      },
      fonts: {
        primary: "Montserrat",
        secondary: "Work Sans",
        variants: [
          {
            href: "https://fonts.googleapis.com/css?family=Montserrat",
          },
          {
            href: "https://fonts.googleapis.com/css?family=Work+Sans",
          },
        ],
      },
      logos: {
        black: {
          withText: {
            url: "/media/reason-conf/logo/logo-black-with-text.svg",
          },
          withoutText: {
            url: "/media/reason-conf/logo/logo-black.svg",
          },
        },
        colored: {
          withText: {
            url: "/media/reason-conf/logo/logo-colored-with-text.svg",
          },
          withoutText: {
            url: "/media/reason-conf/logo/logo-colored.svg",
          },
        },
        white: {
          withText: {
            url: "/media/reason-conf/logo/logo-white-with-text.svg",
          },
          withoutText: {
            url: "/media/reason-conf/logo/logo-white.svg",
          },
        },
      },
    },
  },
  "react-finland": {
    id: "react-finland",
    name: "React Finland",
    conferences: ["react-finland-2018", "react-finland-2019"],
    theme: {
      id: "react-finland",
      textures: [{ url: "/media/assets/wave.svg" }],
      colors: {
        primary: "#002fa9",
        secondary: "#5297e9",
        text: "#111",
        background: "#eee",
      },
      fonts: {
        primary: "Finlandica",
        secondary: "Work Sans",
        variants: [
          {
            family: "Finlandica",
            weight: "normal",
            style: "normal",
            fileName: "/media/fonts/finlandica-regular",
            formats: ["woff2", "woff", "ttf"],
          },
          {
            family: "Work Sans",
            weight: "normal",
            style: "normal",
            fileName: "/media/fonts/worksans-regular",
            formats: ["woff2"],
          },
        ],
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
  "graphql-finland": {
    id: "graphql-finland",
    name: "GraphQL Finland",
    conferences: ["graphql-finland-2018"],
    theme: {
      id: "graphql-finland",
      textures: [{ url: "/media/assets/wave.svg" }],
      colors: {
        primary: "#e10098",
        secondary: "#ff1eb6",
        text: "#233239",
        background: "#eee",
      },
      fonts: {
        primary: "Finlandica",
        secondary: "Work Sans",
        variants: [
          {
            family: "Finlandica",
            weight: "normal",
            style: "normal",
            fileName: "/media/fonts/finlandica-regular",
            formats: ["woff2", "woff", "ttf"],
          },
          {
            family: "Work Sans",
            weight: "normal",
            style: "normal",
            fileName: "/media/fonts/worksans-regular",
            formats: ["woff2"],
          },
        ],
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
