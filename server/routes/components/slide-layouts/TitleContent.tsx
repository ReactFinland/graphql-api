import styled from "@emotion/styled";
import modularScale from "polished/lib/helpers/modularScale";
import React from "react";
import { Theme } from "../../../schema/Theme";

const TitlePageContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
`;

const Presentation = styled.h1`
  font-size: ${modularScale(7)};
  margin-left: 10vw;
  color: ${props => props.color};
`;

const Author = styled.h2`
  font-size: ${modularScale(4)};
  margin-right: 5vw;
  justify-self: end;
  color: ${props => props.color};
`;

interface TitleContentProps {
  content: {
    title: string;
    author: string;
  };
  theme: Theme;
}

function TitleContent({ content, theme }: TitleContentProps) {
  return (
    <TitlePageContainer>
      <Presentation color={theme.colors.primary}>{content.title}</Presentation>
      <Author color={theme.colors.secondary}>{content.author}</Author>
    </TitlePageContainer>
  );
}

export default TitleContent;
