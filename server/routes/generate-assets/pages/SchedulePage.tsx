import styled from "@emotion/styled";
import * as React from "react";
import Schedule from "../components/Schedule";

const SchedulePageContainer = styled.div`
  background-image: linear-gradient(
      rgb(243, 153, 153),
      rgba(183, 37, 136, 0.79)
    ),
    url("/media/assets/wave.svg");
  background-size: cover;
  position: relative;
  margin: auto;
  padding: 0;
  width: 28.8cm;
  height: 20.4cm;
  overflow: hidden;
`;

const SchedulePageLogo = styled.img`
  position: relative;
  margin: 0.5cm 0.9cm 0cm;
  width: 5cm;
`;

const SchedulePageHeader = styled.h1`
  color: white;
  position: absolute;
  right: 1.2cm;
  top: 0cm;
  font-size: 420%;
  margin-top: 0.75cm;
`;

const SchedulePageContent = styled.div`
  position: relative;
  margin: 0;
  margin-left: 0.5cm;
  margin-right: 0.5cm;
  padding-left: 0.25cm;
  padding-top: 0.25cm;
  padding-right: 0cm;
  padding-bottom: 0.25cm;
  background-color: white;
  height: 13.5cm;
  clip-path: polygon(0 0, 100% 1cm, 100% 100%, 0 calc(100% - 1cm));
  z-index: 1;
`;

function SchedulePage({ intervals, conferenceLogo, theme }) {
  if (!intervals) {
    return null;
  }

  return (
    <SchedulePageContainer>
      <SchedulePageLogo src={conferenceLogo} />
      <SchedulePageHeader>Schedule</SchedulePageHeader>
      <SchedulePageContent>
        <Schedule theme={theme} intervals={intervals} />
      </SchedulePageContent>
      {/*<SponsorsContainer /> FIXME */}
    </SchedulePageContainer>
  );
}

export default SchedulePage;
