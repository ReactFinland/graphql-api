import * as React from "react";
import { Theme } from "../../schema/Theme";
import ThemeTemplate from "../templates/ThemeTemplate";

interface GenerateTextProps {
  theme: Theme;
}

function GenerateText({ theme }: GenerateTextProps) {
  // TODO: This renders just ThemeTemplate for now -> generalize
  return <ThemeTemplate theme={theme} />;
}

export default GenerateText;
