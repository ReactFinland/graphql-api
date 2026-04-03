const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");

const createRequestHandler = require("../build/server/create-request-handler").default;

let server;
let baseUrl;
const token = "test-token";

test.before(async () => {
  const handleRequest = await createRequestHandler({
    expectedToken: token,
  });
  server = http.createServer(async (req, res) => {
    try {
      const response = await handleRequest(toRequest(req));

      await sendResponse(res, response);
    } catch (error) {
      res.writeHead(500).end(String(error));
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });

  const address = server.address();

  assert.ok(address && typeof address !== "string");

  baseUrl = `http://127.0.0.1:${address.port}`;
});

test.after(async () => {
  if (!server) {
    return;
  }

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

async function request(pathname, init) {
  const headers = new Headers(init?.headers);

  if (!headers.has("TOKEN")) {
    headers.set("TOKEN", token);
  }

  return fetch(new URL(pathname, baseUrl), {
    ...init,
    headers,
  });
}

function toRequest(req) {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
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
    body: req,
    duplex: "half",
  });
}

async function sendResponse(res, response) {
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  if (!response.body) {
    res.end();

    return;
  }

  res.end(Buffer.from(await response.arrayBuffer()));
}

test("GET /ping returns server metadata", async () => {
  const response = await request("/ping");

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/json/i);

  const payload = await response.json();

  assert.equal(typeof payload.serverVersion, "string");
  assert.ok(payload.serverVersion.length > 0);
});

test("GET /calendar-2026.ics returns the published calendar file", async () => {
  const response = await request("/calendar-2026.ics");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/calendar/i);
  assert.match(body, /BEGIN:VCALENDAR/);
  assert.match(body, /futurefrontend\.com/i);
});

test("GET /calendar/:id is no longer exposed", async () => {
  const response = await request("/calendar/future-frontend-2026");
  const body = await response.text();

  assert.equal(response.status, 404);
  assert.match(body, /Not found/i);
});

test("protected routes reject requests without TOKEN", async () => {
  const response = await fetch(new URL("/ping", baseUrl));

  assert.equal(response.status, 401);
});

test("OPTIONS exposes TOKEN in CORS allow headers", async () => {
  const response = await fetch(new URL("/graphql", baseUrl), {
    method: "OPTIONS",
  });

  assert.equal(response.status, 204);
  assert.match(
    response.headers.get("access-control-allow-headers"),
    /TOKEN/i
  );
});

test("POST /graphql returns conference data", async () => {
  const response = await request("/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ConferenceById {
          conference(id: "future-frontend-2026") {
            id
            name
            year
            startDate
            endDate
          }
        }
      `,
    }),
  });

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/json/i);

  const payload = await response.json();

  assert.deepEqual(payload, {
    data: {
      conference: {
        id: "future-frontend-2026",
        name: "Future Frontend 2026",
        year: "2026",
        startDate: "2026-06-08",
        endDate: "2026-06-09",
      },
    },
  });
});
