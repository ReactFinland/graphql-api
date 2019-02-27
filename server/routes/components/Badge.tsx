import styled from "@emotion/styled";
import hexToRgba from "hex-to-rgba";
import * as React from "react";
import { Attendee } from "../../schema/Attendee";
import { Theme } from "../../schema/Theme";

const BadgeContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-image: linear-gradient(#67d67b, ${hexToRgba("#67d67b", 0.6)}),
    url("/media/assets/wave.svg");
  background-size: cover;
  margin: auto;
  padding: 0;
  width: 10.2cm;
  height: 14.4cm;
  overflow: hidden;

  /* Hole for lanyard */
  &::after {
    position: relative;
    top: -13.7cm;
    left: 50%;
    width: 1mm;
    height: 1mm;
    background: rgba(151, 54, 54, 1);
    border-radius: 50%;
    content: "";
    z-index: 5;
  }
`;

// TODO: Customization per type
/*
.Attendee {
  composes: badge;
}

.Volunteer,
.Organizer {
  composes: badge;

  &::before {
    position: absolute;
    left: -5%;
    bottom: 3cm;
    box-sizing: border-box;
    width: 110%;
    padding: 0.35cm 1.5cm;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.35em;
    text-align: center;
    color: transparentize($bgColor, 0.25);
    background: $primaryColor;
    content: "Volunteer";
    z-index: 2;
    transform: rotate(5deg);
  }
}

.Organizer {
  &::before {
    content: "Organizer";
  }
}
*/

// TODO
/*
.sponsor {
  background-image: linear-gradient(#67d67b, rgba(#67d67b, 0.6)),
    url("/media/assets/wave.svg");
}
.speaker {
  background-image: linear-gradient(#d01a1a, rgba(#d01a1a, 0.39)),
    url("/media/assets/wave.svg");
}
.organizer {
  background-image: linear-gradient(#6d0b4d, rgba(#6d0b4d, 0.65)),
    url("/media/assets/wave.svg");
}
*/

const BadgeContent = styled.div`
  margin-left: 0.2cm;
  margin-right: 0.2cm;
  padding: 2cm 0.5cm;
  height: 8.5cm;
  clip-path: polygon(0 0, 100% 0.5cm, 100% 100%, 0 calc(100% - 0.5cm));
  background: ${hexToRgba("#fff", 0.8)};
  z-index: 1;
`;

const BadgeLogo = styled.img`
  margin-top: 0.5em;
`;

const BadgeName = styled.h2`
  display: block;
  font-size: 135%;
`;

const BadgeTwitter = styled.h3`
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 125%;
`;

const BadgeCompany = styled.p`
  font-weight: bold;
`;

const BadgeType = styled.h3`
  text-transform: capitalize;
  color: white;
  justify-self: start;
  padding-left: 1cm;
`;

interface BadgeProps {
  logo: Theme["logos"]["white"]["withText"]["url"];
  attendee: Attendee;
}

function Badge({ logo, attendee }: BadgeProps) {
  if (!attendee) {
    return <>No attendee!</>;
  }

  const { type, name, twitter, company } = attendee;

  return (
    <BadgeContainer>
      <BadgeLogo src={logo} />
      <BadgeContent>
        <BadgeName>{name}</BadgeName>
        {twitter && <BadgeTwitter>@{twitter}</BadgeTwitter>}
        {company && <BadgeCompany>{company}</BadgeCompany>}
      </BadgeContent>
      {type && <BadgeType>{type}</BadgeType>}
    </BadgeContainer>
  );
}

// TODO: Port to variables scheme
Badge.props = {
  logo: String,
  attendee: Attendee,
};

export default Badge;
