import * as http from "http";
import type { IncomingMessage, ServerResponse } from "http";
import createRequestHandler from "./app";
import logger from "./logger";

const normalizePort = (value: string) => {
  const port = Number(value);

  if (!isNaN(port) && port > 0) {
    return port;
  }

  return false;
};

interface CreateServerOptions {
  logRequests?: boolean;
  logStartup?: boolean;
  port?: number | false;
}

async function createServer(options: CreateServerOptions = {}) {
  logger.debug("Starting to boot the server.");

  const port =
    options.port === undefined
      ? normalizePort(process.env.PORT || "3000")
      : options.port;
  const handleRequest = await createRequestHandler();
  const server = http.createServer(async (req, res) => {
    const request = toRequest(req);

    try {
      const response = await handleRequest(request);

      await sendResponse(res, response);

      if (options.logRequests !== false) {
        logger.info(`${req.method} ${req.url} ${response.status}`);
      }
    } catch (err) {
      logger.error(err);
      res.writeHead(500).end();
    }
  });

  try {
    await new Promise<void>((resolve, reject) => {
      server.once("error", reject);
      server.listen(port, () => {
        server.off("error", reject);
        resolve();
      });
    });

    if (options.logStartup !== false) {
      const address = server.address();
      const resolvedPort =
        typeof address === "object" && address ? address.port : port;

      logger.debug(
        `Finished booting the server. The API is reachable at http://localhost:${resolvedPort?.toString()}/graphql.`
      );
    }
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }

  return server;
}

function toRequest(req: IncomingMessage): Request {
  const protocol = getProtocol(req);
  const host = req.headers.host || "localhost";
  const url = new URL(req.url || "/", `${protocol}://${host}`);
  const headers = new Headers();

  Object.entries(req.headers).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => headers.append(key, entry));
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  });

  const init = {
    headers,
    method: req.method,
  };

  if (req.method === "GET" || req.method === "HEAD") {
    return new Request(url, init);
  }

  return new Request(url, {
    ...init,
    body: req as unknown as ReadableStream,
    duplex: "half",
  } as RequestInit & { duplex: "half" });
}

async function sendResponse(res: ServerResponse, response: Response) {
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  if (!response.body) {
    res.end();

    return;
  }

  const body = Buffer.from(await response.arrayBuffer());

  res.end(body);
}

function getProtocol(req: IncomingMessage) {
  const forwardedProtocol = req.headers["x-forwarded-proto"];

  return typeof forwardedProtocol === "string" ? forwardedProtocol : "http";
}

export default createServer;
