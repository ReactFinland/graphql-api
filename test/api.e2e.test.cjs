const assert = require("node:assert/strict");
const test = require("node:test");

require("reflect-metadata");

const createServer = require("../build/server/server").default;

let server;
let baseUrl;

test.before(async () => {
  process.env.NODE_ENV = "test";
  server = await createServer({
    logRequests: false,
    logStartup: false,
    port: 0,
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
  return fetch(new URL(pathname, baseUrl), init);
}

test("GET /ping returns server metadata", async () => {
  const response = await request("/ping");

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/json/i);

  const payload = await response.json();

  assert.equal(typeof payload.serverVersion, "string");
  assert.ok(payload.serverVersion.length > 0);
});

test("GET /calendar/future-frontend-2026 returns an ICS calendar", async () => {
  const response = await request("/calendar/future-frontend-2026");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/calendar/i);
  assert.match(body, /BEGIN:VCALENDAR/);
  assert.match(body, /futurefrontend\.com/i);
});

test("GET /calendar-2026.ics returns the published calendar file", async () => {
  const response = await request("/calendar-2026.ics");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/calendar/i);
  assert.match(body, /BEGIN:VCALENDAR/);
});

test("GET /calendar/:id returns 404 for an unknown conference", async () => {
  const response = await request("/calendar/does-not-exist");
  const body = await response.text();

  assert.equal(response.status, 404);
  assert.match(body, /Not found/i);
});

test("GET /media/* serves checked-in assets", async () => {
  const response = await request("/media/typeof/logo/logo-white.svg");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /image\/svg\+xml/i);
  assert.match(body, /<svg/i);
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
