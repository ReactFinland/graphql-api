import styled from "@emotion/styled";
import { Color } from "csstype";
import hexToRgba from "hex-to-rgba";
import { get, map } from "lodash";
import * as React from "react";
import { Conference } from "../../schema/Conference";
import { Theme } from "../../schema/Theme";
import connect from "../components/connect";
import { dayToFinnishLocale } from "../date-utils";
import conferenceDaysQuery from "../queries/conferenceDaysQuery";

interface HeaderContainerProps {
  primaryColor: Color;
  secondaryColor: Color;
}

// TODO: Move texture to the theme API
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

interface HeaderTemplateProps {
  conference?: Conference;
  theme?: Theme;
  coupon?: string; // TODO: Get from selected? Expose to the user somehow
  id: string;
}

function HeaderTemplate({
  conference,
  theme,
  coupon,
  id,
}: HeaderTemplateProps) {
  const { locations, schedules, slogan } = conference || {
    locations: [],
    schedules: [],
    slogan: "",
  };
  const location =
    locations && locations.length > 0 && locations[0]
      ? {
          city: locations[0].city,
          country: locations[0].country && locations[0].country.name,
        }
      : {};
  const conferenceDays = map(schedules, ({ day }) => dayToFinnishLocale(day));
  const firstDay = conferenceDays[0];
  const lastDay = conferenceDays[conferenceDays.length - 1];

  return (
    <HeaderPageContainer
      id={id}
      primaryColor={get(theme, "colors.primary")}
      secondaryColor={get(theme, "colors.secondary")}
    >
      <PrimaryRow>
        <HeaderLogo src={get(theme, "logos.white.withText.url")} />
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
        {coupon && (
          <HeaderCoupon>Use {coupon} for a 10% discount!</HeaderCoupon>
        )}
      </SecondaryRow>
    </HeaderPageContainer>
  );
}

const ConnectedHeaderTemplate = connect(
  "/graphql",
  conferenceDaysQuery,
  {},
  ({ selected }) => ({ ...selected })
)(HeaderTemplate);

// TODO: Better use enums here
ConnectedHeaderTemplate.variables = [
  {
    id: "conferenceId",
    query: `query ConferenceIdQuery {  
  allConferences {
    id
    name
  }
}`,
    mapToCollection({ allConferences }) {
      return allConferences;
    },
    mapToOption({ id, name }) {
      return {
        value: id,
        label: name,
      };
    },
  },
];

export default ConnectedHeaderTemplate;
