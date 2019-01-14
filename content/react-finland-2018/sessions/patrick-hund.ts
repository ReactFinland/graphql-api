import enums from "../../../src/enums";
import speaker from "../../people/patrick-hund";

export default {
  speakers: [speaker],
  title: "Get Rich Quick With React Context",
  description: `
With React 16.3, the context API has been completely revamped. This talk will demonstrate a good use 
case for context: Putting ad placements on your web page to *get rich quick!* You'll learn how easy 
it is to use context now and how to migrate your old context code to the new API.
  `,
  type: ContactType.LIGHTNING_TALK,
  keywords: speaker.keywords,
  urls: {
    web:
      "https://technology-ebay-de.github.io/get-rich-quick-with-react-context/#/",
  },
};
