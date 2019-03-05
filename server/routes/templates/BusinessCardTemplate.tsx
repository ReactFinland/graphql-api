import styled from "@emotion/styled";
import { Color } from "csstype";
import range from "lodash/range";
import Markdown from "markdown-to-jsx";
import * as React from "react";
import { Theme } from "../../schema/Theme";

interface BusinessCardContainerProps {
  id: string;
}

const BusinessCardTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
` as React.FC<BusinessCardContainerProps>;

interface BusinessCardProps {
  backgroundColor: Color;
  textColor: Color;
  width: string;
  height: string;
}

const BusinessCard = styled.section`
  /* TODO: How to avoid breaking a page inside a card properly when printing? */
  margin: 7.5mm 5mm 7.5mm 5mm;
  padding: 5mm;
  width: ${({ width }: BusinessCardProps) => width};
  height: ${({ height }: BusinessCardProps) => height};
  background-color: ${({ backgroundColor }: BusinessCardProps) =>
    backgroundColor};
  color: ${({ textColor }: BusinessCardProps) => textColor};
` as React.FC<BusinessCardProps>;

interface BusinessCardTemplateProps {
  theme: Theme;
  id: string;
  width: string;
  height: string;
  amount: number;
  information: string;
}

function BusinessCardTemplate({
  id,
  theme,
  width,
  height,
  amount,
  information,
}: BusinessCardTemplateProps) {
  console.log(information);

  return (
    <BusinessCardTemplateContainer id={id}>
      {range(amount).map(key => (
        <BusinessCard
          key={key}
          backgroundColor={theme.colors.background}
          textColor={theme.colors.text}
          width={width}
          height={height}
        >
          <Markdown>{information.replace(/\r?\n/g, "<br />")}</Markdown>
        </BusinessCard>
      ))}
    </BusinessCardTemplateContainer>
  );
}

BusinessCardTemplate.filename = "business-card";

BusinessCardTemplate.variables = [
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
  {
    id: "amount",
    validation: { type: Number, default: 20 },
  },
];

export default BusinessCardTemplate;
