import { Contact } from "./Contact";
import { Interval } from "./Interval";
import Keyword from "./keywords";
import Level from "./Level";
import { Location } from "./Location";
import SessionType from "./SessionType";

export interface SessionUrls {
  web?: string;
  slides?: string;
  video?: string;
  demo?: string;
  drawing?: string;
}

export interface Session {
  type: SessionType;
  level?: Level;
  title: string;
  hasTitle?: boolean;
  description?: string;
  keywords?: Keyword[];
  location?: Location;
  people?: Contact[];
  urls?: SessionUrls;
  sessions?: Session[];
  parent?: Interval;
  day?: string;
  begin?: string;
  end?: string;
}

export { SessionType, Level };
