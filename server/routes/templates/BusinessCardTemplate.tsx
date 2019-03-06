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
  width: string;
  height: string;
}

const BusinessCard = styled.section`
  width: ${({ width }: BusinessCardProps) => width};
  height: ${({ height }: BusinessCardProps) => height};

  /* Animation */
  perspective: 100%;
  transform-style: preserve-3d;
  transition-duration: 500ms;

  &:hover {
    &:nth-of-type(1) {
      transform: rotateY(180deg);
    }

    &:nth-of-type(2) {
      transform: rotateY(0deg);
    }
  }
` as React.FC<BusinessCardProps>;

interface BusinessCardCommonProps {
  backgroundColor: Color;
  textColor: Color;
}

const BusinessCardCommon = styled.div`
  position: absolute;
  padding: 5mm;

  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }: BusinessCardCommonProps) =>
    backgroundColor};
  color: ${({ textColor }: BusinessCardCommonProps) => textColor};
  backface-visibility: hidden;
` as React.FC<BusinessCardCommonProps>;

const BusinessCardFront = styled(BusinessCardCommon)``;
const BusinessCardBack = styled(BusinessCardCommon)`
  transform: rotateY(-180deg);
`;

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
      <BusinessCard width={width} height={height}>
        <BusinessCardFront
          backgroundColor={theme.colors.background}
          textColor={theme.colors.text}
        >
          <Markdown>{showFront ? frontText : backText}</Markdown>
        </BusinessCardFront>
        <BusinessCardBack
          backgroundColor={theme.colors.background}
          textColor={theme.colors.text}
        >
          <Markdown>{showFront ? backText : frontText}</Markdown>
        </BusinessCardBack>
      </BusinessCard>
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
