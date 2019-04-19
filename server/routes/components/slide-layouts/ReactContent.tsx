import styled from "@emotion/styled";
import React from "react";
import { Theme } from "../../../schema/Theme";

const ReactPageContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;

interface TitleContentProps {
  content: JSX.Element;
  theme: Theme;
}

function TitleContent({ content, theme }: TitleContentProps) {
  return <ReactPageContainer>{content}</ReactPageContainer>;
}

export default TitleContent;
