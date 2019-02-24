import * as React from "react";
import { Theme } from "../../schema/Theme";

interface GenerateTextProps {
  theme: Theme;
}

function GenerateText({ theme }: GenerateTextProps) {
  // TODO: This renders just ThemeTemplate for now -> generalize
  return <ThemeTemplate theme={theme} />;
}

interface ThemeTemplateProps {
  theme: Theme;
}

function ThemeTemplate({ theme }: ThemeTemplateProps) {
  console.log({ theme });

  return <div>theme template</div>;
}

export default GenerateText;
