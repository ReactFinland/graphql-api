import { Image } from "./Image";

export interface Colors {
  primary: string;
  secondary: string;
  text: string;
  background: string;
}

export interface Font {
  family?: string;
  weight?: string;
  style?: string;
  fileName?: string;
  formats?: string[];
  href?: string;
}

export interface Fonts {
  primary: string;
  secondary: string;
  variants: Font[];
}

export interface WithWithoutText {
  withoutText: Image;
  withText: Image;
}

export interface Logos {
  black: WithWithoutText;
  colored: WithWithoutText;
  white: WithWithoutText;
}

export interface Theme {
  id: string;
  fonts: Fonts;
  textures: Image[];
  colors: Colors;
  logos: Logos;
}
