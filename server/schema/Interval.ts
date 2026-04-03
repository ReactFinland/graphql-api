import { Contact } from "./Contact";
import { Location } from "./Location";
import { Session, SessionUrls } from "./Session";

export interface Interval {
  begin: string;
  end: string;
  title?: string;
  sessions: Session[];
  location?: Location;
  mc?: Contact;
  urls?: SessionUrls;
  drawing?: string;
}
