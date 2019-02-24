import styled from "@emotion/styled";
import { Color } from "csstype";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import { Location } from "../../schema/Location";
import { Schedule } from "../../schema/Schedule";
import { Theme } from "../../schema/Theme";

interface HeaderContainerProps {
  primaryColor: Color;
  secondaryColor: Color;
}

const HeaderPageContainer = styled.div`
  background-image: ${({
    primaryColor,
    secondaryColor,
  }: HeaderContainerProps) => `linear-gradient(
      ${primaryColor},
      ${hexToRgba(secondaryColor, 0.79)}
    ),
    url("/media/assets/wave.svg")`};
  background-size: cover;
  position: relative;
  margin: auto;
  padding: 0;
  width: 1024px;
  height: 512px;
  overflow: hidden;
  color: white;
`;

const PrimaryRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
`;

const SecondaryRow = styled.div`
  display: grid;
  padding-left: 5em;
`;

const HeaderInfoContainer = styled.div`
  text-align: right;
  padding-right: 50px;
`;

const HeaderLogo = styled.img`
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 1.8em;
  width: 100%;
`;

const HeaderConferenceDays = styled.h1`
  padding-top: 2em;
`;

const HeaderLocation = styled.h2`
  padding-top: 1em;
`;

const HeaderSlogan = styled.h2`
  padding-top: 1em;
`;

const HeaderCoupon = styled.h3`
  padding-top: 2em;
  font-family: "Courier New", Courier, monospace;
`;

interface HeaderPageProps {
  conferenceDays: Schedule[];
  location: Location;
  theme: Theme;
  slogan: string;
  coupon: string;
}

function HeaderPage({
  conferenceDays,
  location,
  theme,
  slogan,
  coupon,
}: HeaderPageProps) {
  const firstDay = conferenceDays[0];
  const lastDay = conferenceDays[conferenceDays.length - 1];

  return (
    <HeaderPageContainer
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
    >
      <PrimaryRow>
        <HeaderLogo src={theme.logos.whiteWithText.url} />
        <HeaderInfoContainer>
          <HeaderConferenceDays>
            {firstDay}-{lastDay}
          </HeaderConferenceDays>
          <HeaderLocation>
            {location.city}, {location.country}
          </HeaderLocation>
        </HeaderInfoContainer>
      </PrimaryRow>
      <SecondaryRow>
        <HeaderSlogan>{slogan}</HeaderSlogan>
        <HeaderCoupon>
          Use discount code {coupon} for a 10% discount!
        </HeaderCoupon>
      </SecondaryRow>
    </HeaderPageContainer>
  );
}

export default HeaderPage;
