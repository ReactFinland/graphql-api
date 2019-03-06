import styled from "@emotion/styled";
import { Color } from "csstype";
import chunk from "lodash/chunk";
import flatten from "lodash/flatten";
import map from "lodash/map";
import * as React from "react";
import { Attendee, AttendeeType } from "../../schema/Attendee";
import { Theme } from "../../schema/Theme";
import Badge from "../components/Badge";

const BadgeTemplateContainer = styled.section``;

interface BadgeTemplateProps {
  attendees: Attendee[];
  theme: Theme;
  id: string;
  emptyAmounts: {
    attendees: number;
    organizers: number;
    speakers: number;
    sponsors: number;
  };
}

const defaultAttendees: Attendee[] = [
  {
    type: AttendeeType.ATTENDEE,
    name: "John Longsurname-Anotherlongone",
    twitter: "johndoe",
    company: "John Doe Enterprises",
  },
  {
    type: AttendeeType.ORGANIZER,
    name: "Jane Doe",
    twitter: "johndoe",
    company: "John Doe Enterprises",
  },
  {
    type: AttendeeType.SPEAKER,
    name: "John Doedoedoedoedoedoedoe",
    twitter: "johndoe",
    company: "John Doe Enterprises",
  },
  {
    type: AttendeeType.SPONSOR,
    name: "John-Jack-Jim-Joe-Joel-Jeff Doe",
    twitter: "johndoe",
    company: "John & Son Doe Enterprises & Co.",
  },
];

function BadgeTemplate({
  id,
  theme,
  attendees = defaultAttendees,
  emptyAmounts,
}: BadgeTemplateProps) {
  const badgesPerPage = 4;
  const pages = chunk(
    getBadgeData(attendees, badgesPerPage, emptyAmounts),
    badgesPerPage
  );

  return (
    <BadgeTemplateContainer id={id}>
      {map(pages, (tickets, i) => (
        <Page
          key={i}
          defaultColor={theme.colors.primary}
          logo={theme.logos.white.withText.url}
          texture={theme.texture.url}
          tickets={tickets}
        />
      ))}
    </BadgeTemplateContainer>
  );
}

BadgeTemplate.filename = "badge";

BadgeTemplate.variables = [
  // TODO
  /*{
    id: 'attendees',
    validation: {
      type: Array,
      of: Attendee,
      default: defaultAttendees
    }
  }*/
  // TODO: Figure out how to model this case.
  // Ideally this would be abstracted further so it's
  // not worth solving yet.
  /*{
    id: "emptyAmounts",
    validation: {
      type: Object,
      default: {
        attendees: 0,
        organizers: 0,
        speakers: 0,
        sponsors: 0,
      },
    },
  },*/
];

interface PageProps {
  defaultColor: Color;
  logo: string;
  texture: string;
  tickets: any[]; // TODO
}

// TODO: Is the Safari fix needed anymore?
const PageSheet = styled.section`
  text-align: center;

  @media print {
    height: 11.5in !important; /* Adjust for Safari print mode */
  }
`;

const PageBadgeContainer = styled.div`
  display: inline-block;
`;

function Page({ defaultColor, logo, texture, tickets = [] }: PageProps) {
  const pairs = chunk(tickets, 2);
  const reverse = flatten(pairs.map(pair => [pair[1], pair[0]]));

  // TODO: Implement separate layouts for front/back. Now we just
  // use the same.
  return (
    <>
      <PageSheet>
        {tickets.map((attendee: Attendee, i) => (
          <PageBadgeContainer key={`front-${i}`}>
            <Badge
              attendee={attendee}
              defaultColor={defaultColor}
              logo={logo}
              texture={texture}
            />
          </PageBadgeContainer>
        ))}
      </PageSheet>
      <PageSheet>
        {reverse.map((attendee, i) => (
          <PageBadgeContainer key={`back-${i}`}>
            <Badge
              attendee={attendee}
              defaultColor={defaultColor}
              logo={logo}
              texture={texture}
            />
          </PageBadgeContainer>
        ))}
      </PageSheet>
    </>
  );
}

// TODO: Generalize categories
function getBadgeData(
  tickets,
  badgesPerPage,
  emptyAmounts = { organizers: 0, speakers: 0, sponsors: 0, attendees: 0 }
) {
  const ret = tickets
    .concat(Array(emptyAmounts.organizers).fill(getEmptyData("organizer")))
    .concat(Array(emptyAmounts.speakers).fill(getEmptyData("speaker")))
    .concat(Array(emptyAmounts.sponsors).fill(getEmptyData("sponsor")))
    .concat(Array(emptyAmounts.attendees).fill(getEmptyData("attendee")));

  // Ensure all pages are filled with badges
  return ret.concat(
    Array(ret.length % badgesPerPage).fill(getEmptyData("attendee"))
  );
}

function getEmptyData(type): Attendee {
  return {
    type,
    name: "",
    company: "",
    twitter: "",
  };
}

// TODO: Connect to ticket API

export default BadgeTemplate;
