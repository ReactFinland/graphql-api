import styled from "@emotion/styled";
import { Color } from "csstype";
import Markdown from "markdown-to-jsx";
import * as React from "react";
import { Theme } from "../../schema/Theme";

interface BusinessCardContainerProps {
  id: string;
}

const BusinessCardTemplateContainer = styled.section`` as React.FC<
  BusinessCardContainerProps
>;

interface BusinessCardProps {
  backgroundColor: Color;
  textColor: Color;
  width: string;
  height: string;
}

const BusinessCard = styled.section`
  position: absolute;

  padding: 5mm;
  width: ${({ width }: BusinessCardProps) => width};
  height: ${({ height }: BusinessCardProps) => height};
  background-color: ${({ backgroundColor }: BusinessCardProps) =>
    backgroundColor};
  color: ${({ textColor }: BusinessCardProps) => textColor};

  /* Animation */
  perspective: 100vw;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition-duration: 500ms;
` as React.FC<BusinessCardProps>;

const BusinessCardFront = styled(BusinessCard)`
  &:hover {
    transform: rotateY(180deg);
  }
`;
const BusinessCardBack = styled(BusinessCard)`
  transform: rotateY(-180deg);

  &:hover {
    transform: rotateY(0deg);
  }
`;

interface BusinessCardTemplateProps {
  theme: Theme;
  id: string;
  showFront: boolean;
  width: string;
  height: string;
  amount: number;
  information: string;
}

function BusinessCardTemplate({
  id,
  theme,
  showFront,
  width,
  height,
  information = "",
}: BusinessCardTemplateProps) {
  console.log(showFront);

  return (
    <BusinessCardTemplateContainer id={id}>
      <BusinessCardFront
        backgroundColor={theme.colors.background}
        textColor={theme.colors.text}
        width={width}
        height={height}
      >
        <Markdown>{information.replace(/\r?\n/g, "<br />")}</Markdown>
      </BusinessCardFront>
      <BusinessCardBack
        backgroundColor={theme.colors.background}
        textColor={theme.colors.text}
        width={width}
        height={height}
      >
        <Markdown>{information.replace(/\r?\n/g, "<br />")}</Markdown>
      </BusinessCardBack>
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
    id: "information",
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
];

export default BusinessCardTemplate;
