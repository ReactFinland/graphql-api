type LogLevel = "debug" | "error" | "info" | "warn";

interface Logger {
  debug: (message: unknown) => void;
  error: (message: unknown) => void;
  info: (message: unknown) => void;
  warn: (message: unknown) => void;
}

const logger: Logger = {
  debug: (message) => log("debug", message),
  error: (message) => log("error", message),
  info: (message) => log("info", message),
  warn: (message) => log("warn", message),
};

function log(level: LogLevel, message: unknown) {
  const normalized = normalizeMessage(level, message);

  if (!normalized || shouldIgnore(normalized.message)) {
    return;
  }

  console[level](normalized);
}

function normalizeMessage(level: LogLevel, message: unknown) {
  if (message instanceof Error) {
    return {
      level,
      message: message.message,
      name: message.name,
      stack: message.stack,
    };
  }

  if (typeof message === "string") {
    return {
      level,
      message,
    };
  }

  if (message && typeof message === "object") {
    return {
      level,
      ...message,
    };
  }

  return {
    level,
    message: String(message),
  };
}

function shouldIgnore(message: unknown) {
  return (
    typeof message === "string" &&
    ["GET /ping ", "GET /media"].some((match) => message.includes(match))
  );
}

export default logger;
