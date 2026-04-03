import generateSchema from "./schema";
import handleCalendarRequest from "./routes/calendar";
import createGraphQLRequestHandler from "./routes/graphql";
import handlePingRequest from "./routes/ping";

export interface CreateRequestHandlerOptions {
  mediaUrl?: string;
  projectRoot: string;
  expectedToken?: string;
}

async function createRequestHandler(options: CreateRequestHandlerOptions) {
  const mediaUrl = options.mediaUrl || "/media";
  const expectedToken = options.expectedToken;
  const schema = await generateSchema();
  const graphqlHandler = createGraphQLRequestHandler(
    schema,
    options.projectRoot,
    mediaUrl
  );

  return async function handleRequest(request: Request): Promise<Response> {
    if (request.method === "OPTIONS") {
      return withDefaultHeaders(new Response(null, { status: 204 }));
    }

    const pathname = new URL(request.url).pathname;
    let response: Response | null = null;

    if (!hasValidToken(request, expectedToken)) {
      response = new Response("Unauthorized", { status: 401 });
    } else if (pathname === "/ping") {
      response = handlePingRequest();
    } else if (pathname === "/calendar-2026.ics") {
      response = handleCalendarRequest();
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

export function withDefaultHeaders(response: Response) {
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
