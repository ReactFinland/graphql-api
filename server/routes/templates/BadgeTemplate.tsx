import styled from "@emotion/styled";
// import chunk from "lodash/chunk";
// import flatten from "lodash/flatten";
// import map from "lodash/map";
import * as React from "react";
import { Attendee, AttendeeType } from "../../schema/Attendee";
import { Theme } from "../../schema/Theme";
import Badge from "../components/Badge";
// import { Color } from "csstype";
// import complement from "polished/lib/color/complement";
// import invert from "polished/lib/color/invert";

interface BadgeTemplateProps {
  theme: Theme;
}

const BadgeTemplateContainer = styled.section``;

interface BadgeTemplateProps {
  attendees: Attendee[];
  theme: Theme;
  id: string;
}

const defaultAttendees: Attendee[] = [
  {
    name: "John Longsurname-Anotherlongone",
    twitter: "johndoe",
    company: "John Doe Enterprises",
    type: AttendeeType.ATTENDEE,
  },
  {
    name: "Jane Doe",
    twitter: "johndoe",
    company: "John Doe Enterprises",
    type: AttendeeType.ORGANIZER,
  },
  {
    name: "John Doedoedoedoedoedoedoe",
    twitter: "johndoe",
    company: "John Doe Enterprises",
    type: AttendeeType.SPEAKER,
  },
  {
    name: "John-Jack-Jim-Joe-Joel-Jeff Doe",
    twitter: "johndoe",
    company: "John & Son Doe Enterprises & Co.",
    type: AttendeeType.SPONSOR,
  },
];

// const badgesPerPage = 4; // TODO: Expose as a variable
function BadgeTemplate({
  id,
  theme,
  attendees = defaultAttendees,
}: BadgeTemplateProps) {
  // const pages = chunk(getBadgeData(tickets, badgesPerPage), badgesPerPage);

  return (
    <BadgeTemplateContainer id={id}>
      <Badge logo={theme.logos.white.withText.url} attendee={attendees[0]} />
    </BadgeTemplateContainer>
  );

  /*
  return (
    <BadgeTemplateContainer id={id}>
      {map(pages, (tickets, i) => (
        <Page key={i} logo={theme.logos.white.withText.url} tickets={tickets} />
      ))}
    </BadgeTemplateContainer>
  );
  */
}

BadgeTemplate.filename = "badge";

/*
interface PageProps {
  logo: Theme["logos"]["white"]["withText"]["url"];
  tickets: any[]; // TODO
}

const PageSheet = styled.section`
  @media print {
    display: flex;
    flex-wrap: wrap;
    -webkit-print-color-adjust: exact;
    height: 11.5in !important; /* Adjust for Safari print mode
    break-after: page;
  }
`;


function Page({ logo, tickets = [] }: PageProps) {
  // const pairs = chunk(tickets, 2);
  // const reverse = flatten(pairs.map(pair => [pair[1], pair[0]]));

  // TODO: Implement separate layouts for front/back. Now we just
  // use the same.
  return (
    <>
      <PageSheet>
        {tickets.map((ticket, idx) => (
          <Badge {...ticket} key={"front-" + idx} />
        ))}
      </PageSheet>
      {/*<PageSheet>
        {reverse.map((ticket, idx) => (
          <Badge {...ticket} key={"back-" + idx} />
        ))}
        </PageSheet>}
    </>
  );
}
*/

// TODO: Get amounts per type from variables
/*
function getBadgeData(tickets, badgesPerPage) {
  const organizerAmount = 0;
  const sponsorAmount = 0;
  const attendeeAmount = 0;
  const ret = tickets
    .concat(Array(organizerAmount).fill(getEmptyData("organizer")))
    .concat(Array(sponsorAmount).fill(getEmptyData("sponsor")))
    .concat(Array(attendeeAmount).fill(getEmptyData("attendee")));

  // Ensure all pages are filled with badges
  return ret.concat(
    Array(ret.length % badgesPerPage).fill(getEmptyData("attendee"))
  );
}

function getEmptyData(type) {
  return {
    firstName: null,
    lastName: null,
    company: null,
    type,
    twitter: null,
  };
}
*/

// TODO: Connect to ticket API

export default BadgeTemplate;
