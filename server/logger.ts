import { createLogger, format, transports } from "winston";

const ignorePingAndMedia = format((info) => {
  const message = info.message;

  if (
    typeof message === "string" &&
    ["GET /ping ", "GET /media"].some((match) => message.includes(match))
  ) {
    return false;
  }

  return info;
});

const logger = createLogger({
  exitOnError: false,
  format: format.combine(ignorePingAndMedia(), format.json()),
  transports: [
    new transports.Console({
      level: "debug",
      handleExceptions: true,
    }),
  ],
});

export default logger;
