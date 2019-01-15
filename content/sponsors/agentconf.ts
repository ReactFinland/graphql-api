import { Contact } from "../../server/schema/Contact";

export default {
  name: "Agent Conf",
  about: "The international event for coding inspiration",
  image: {
    url: "sponsors/agent.png",
  },
  social: {
    homepage: "https://www.agent.sh/",
    facebook: "agentsh",
    instagram: "teamagent",
    twitter: "agentconf",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Dornbirn",
  },
} as Contact;
