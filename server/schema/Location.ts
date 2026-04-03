import { Country } from "./Country";
import { Image } from "./Image";
import { Social } from "./Social";

export interface Location {
  name?: string;
  about?: string;
  image?: Image;
  social?: Social;
  country?: Country;
  city?: string;
  address?: string;
}
