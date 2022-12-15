"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const speakerTalkQuery = `
query SpeakerTalkQuery($conferenceId: ID!, $contactName: String!) {
  contact(contactName: $contactName, conferenceId: $conferenceId) {
    name
    image {
      url
    }
    talks {
      title
    }
  }
}
`;
exports.default = speakerTalkQuery;
//# sourceMappingURL=speakerTalkQuery.js.map