import styled from "@emotion/styled";
import { Color } from "csstype";
import * as React from "react";

interface BusinessCardContainerProps {
  width: string;
  height: string;
}

interface BusinessCardBaseProps {
  backgroundColor: Color;
  textColor: Color;
}

const BusinessCardBase = styled.div`
  position: absolute;
  padding: 5mm;

  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }: BusinessCardBaseProps) =>
    backgroundColor};
  color: ${({ textColor }: BusinessCardBaseProps) => textColor};
  backface-visibility: hidden;
` as React.FC<BusinessCardBaseProps>;

const BusinessCard = {
  Container: styled.section`
    width: ${({ width }: BusinessCardContainerProps) => width};
    height: ${({ height }: BusinessCardContainerProps) => height};

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
  ` as React.FC<BusinessCardContainerProps>,
  Front: styled(BusinessCardBase)``,
  Back: styled(BusinessCardBase)`
    transform: rotateY(-180deg);
  `,
};

export default BusinessCard;
