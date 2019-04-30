const fs = require("fs-extra");
const parseCsv = require("csv-parse/lib/sync"); // TODO: Use the async version instead?
const { groupBy, mapValues, pickBy } = require("lodash");

generateWorkshopIncome();

async function generateWorkshopIncome() {
  const attendees = groupBy(
    parseCsv(await fs.readFile("./attendees.csv", { encoding: "utf8" }), {
      columns: true,
      delimiter: ",",
      skip_empty_lines: true,
    }),
    "Ticket"
  );
  const workshopNames = [
    "TypeScript for React Developers",
    "Design Systems for React Developers",
    "Reactive State Machines and Statecharts",
    "React and GraphQL – From zero to production",
    "Advanced React – Suspense, Time Slicing, Hooks and more",
    "Get in the Fast Lane: Measuring React Performance",
  ];
  const workshopCuts = calculateShares(
    pickBy(attendees, (_, name) =>
      workshopNames.some(workshopName => name.includes(workshopName))
    )
  );

  console.log(Object.keys(attendees).length, workshopCuts);
}

function calculateShares(ticketGroups) {
  return mapValues(ticketGroups, attendees =>
    attendees
      .map(attendee => ({
        ...attendee,
        Cut: attendee.Ticket.includes("Workshop only")
          ? Number(attendee.Price) / 2
          : Number(attendee.Price) / 4,
      }))
      .reduce((a, b) => {
        return a + b.Cut;
      }, 0)
  );
}
