import enums from '../../../src/enums';
import keywords from '../../keywords';
import speaker from '../../people/jimmy-jia';

export default {
  speakers: [speaker],
  title: "Building efficient, waterfall-free GraphQL applications",
  description: `GraphQL makes it easy to query your back end efficiently. However, when building large applications, this is not always enough on its own. For these larger projects, it’s easy to run into situations where requests still wait on each other, to the detriment of user experience. In this talk, we’ll explore how these problems arise, and look at strategies for mitigating these problems.`,
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "http://slides.graphql-finland.fi/2018/05-jimmy-jia.pdf",
    video: "https://www.youtube.com/watch?v=sgWQX0dzJFI",
  },
};
