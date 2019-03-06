import styled from "@emotion/styled";
import Markdown from "markdown-to-jsx";
import * as React from "react";
import { Theme } from "../../schema/Theme";
import BusinessCard from "../components/BusinessCard";

interface BusinessCardTemplateContainerProps {
  id: string;
}

const BusinessCardTemplateContainer = styled.section`` as React.FC<
  BusinessCardTemplateContainerProps
>;

interface BusinessCardTemplateProps {
  theme: Theme;
  id: string;
  showFront: boolean;
  width: string;
  height: string;
  amount: number;
  front: string;
  back: string;
}

function BusinessCardTemplate({
  id,
  theme,
  showFront,
  width,
  height,
  front = "",
  back = "",
}: BusinessCardTemplateProps) {
  const frontText = front.replace(/\r?\n/g, "<br />");
  const backText = back.replace(/\r?\n/g, "<br />");

  return (
    <BusinessCardTemplateContainer id={id}>
      <BusinessCard.Container width={width} height={height}>
        <BusinessCard.Front
          backgroundColor={theme.colors.background}
          textColor={theme.colors.text}
        >
          <Markdown>{showFront ? frontText : backText}</Markdown>
        </BusinessCard.Front>
        <BusinessCard.Back
          backgroundColor={theme.colors.background}
          textColor={theme.colors.text}
        >
          <Markdown>{showFront ? backText : frontText}</Markdown>
        </BusinessCard.Back>
      </BusinessCard.Container>
    </BusinessCardTemplateContainer>
  );
}

BusinessCardTemplate.filename = "business-card";

BusinessCardTemplate.variables = [
  {
    id: "showFront",
    validation: { type: Boolean, default: true },
  },
  {
    id: "width",
    validation: { type: String, default: "85mm" },
  },
  {
    id: "height",
    validation: { type: String, default: "55mm" },
  },
  {
    id: "front",
    // TODO: Use proper TS enum for modifiers
    validation: {
      type: String,
      modifier: "long",
      default: `John Woo
**+1234567890**

Woo Corp. - CO123456789
demo@localhost`,
    },
  },
  {
    id: "back",
    // TODO: Use proper TS enum for modifiers
    validation: {
      type: String,
      modifier: "long",
      default: `Martial Artist`,
    },
  },
];

export default BusinessCardTemplate;
