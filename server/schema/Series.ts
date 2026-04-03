import { Conference } from "./Conference";

export interface Series {
  id: string;
  name: string;
  conferences: Conference[];
}
