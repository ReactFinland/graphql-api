import enums from '../../../src/enums';
import keywords from '../../keywords';
import speaker from '../../people/michal-chudziak';

export default {
  speakers: [speaker],
  title: "World Class experience with React Native",
  description:
    "A case study of the app I'm currently working on with my team. I'll show you how we managed to set up a friendly environment with the best DX, spot bugs in early stage and deliver continuous builds to QA (just by merging the PR’s). I'll also cover dropping classic state management thanks to apollo-link-state and overcoming react-native and metro-bundler limitations. You can't miss this one!",
  type: enums.TALK,
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
};
