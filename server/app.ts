import * as path from "path";
import generateSchema from "./schema";
import handleCalendarRequest from "./routes/calendar";
import createGraphQLRequestHandler from "./routes/graphql";
import handleMediaRequest, { isPublicImagePath } from "./routes/media";
import handlePingRequest from "./routes/ping";

export interface CreateRequestHandlerOptions {
  enableMedia?: boolean;
  mediaPath?: string;
  mediaUrl?: string;
  projectRoot?: string;
  expectedToken?: string;
}

async function createRequestHandler(options: CreateRequestHandlerOptions = {}) {
  const projectRoot = options.projectRoot || path.resolve(__dirname, "../..");
  const mediaUrl = options.mediaUrl || "/media";
  const mediaPath = options.mediaPath || path.join(projectRoot, "media");
  const enableMedia = options.enableMedia !== false;
  const expectedToken = options.expectedToken;
  const schema = await generateSchema();
  const graphqlHandler = createGraphQLRequestHandler(
    schema,
    projectRoot,
    mediaUrl
  );

  return async function handleRequest(request: Request): Promise<Response> {
    if (request.method === "OPTIONS") {
      return withDefaultHeaders(new Response(null, { status: 204 }));
    }

    const pathname = new URL(request.url).pathname;
    let response: Response | null = null;

    if (enableMedia && isPublicImagePath(pathname, mediaUrl)) {
      response = await handleMediaRequest(pathname, mediaUrl, mediaPath);
    } else if (!hasValidToken(request, expectedToken)) {
      response = new Response("Unauthorized", { status: 401 });
    } else if (pathname === "/ping") {
      response = handlePingRequest();
    } else if (pathname === "/calendar-2026.ics") {
      response = handleCalendarRequest(pathname);
    } else if (pathname.startsWith("/calendar/")) {
      response = handleCalendarRequest(pathname);
    } else if (pathname === "/graphql") {
      response = await graphqlHandler(request);
    }

    return withDefaultHeaders(
      response || new Response("Not found", { status: 404 })
    );
  };
}

function hasValidToken(request: Request, expectedToken?: string) {
  return Boolean(
    expectedToken && request.headers.get("TOKEN") === expectedToken
  );
}

function withDefaultHeaders(response: Response) {
  const headers = new Headers(response.headers);

  headers.set("access-control-allow-origin", "*");
  headers.set("access-control-allow-headers", "content-type, TOKEN");
  headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  headers.set("x-content-type-options", "nosniff");

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  });
}

export default createRequestHandler;
