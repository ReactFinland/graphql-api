const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../people/gant-laborde")],
  title: "React Native",
  description: `In this beginner workshop you will learn what React Native (RN) consists of, how to write basic applications, how to use Storybook with RN, how to test RN, and finally how to kickstart your own project.`,
  tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/mgxvr-pqelw",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/mkvpkhbfxfo",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/i0jwfrjd6so",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/w-nkcuf9k-a",
    },
  ],
  keywords: require("../people/gant-laborde").keywords,
  location: require("../locations/valkoinen-sali"),
};
