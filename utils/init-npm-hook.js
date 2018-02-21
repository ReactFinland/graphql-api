const NpmClient = require("npm-registry-client");
const client = new NpmClient({
  token: process.env.NPM_TOKEN,
  alwaysAuth: false,
});

initNpmHooks();

function initNpmHooks() {
  // https://github.com/npm/registry/blob/master/docs/hooks/endpoints.md
  client.request(
    "https://registry.npmjs.org/-/npm/v1/hooks",
    {
      method: "post",
      body: {
        type: "package",
        name: "@react-finland/content-2018",
        endpoint: "https://api.react-finland.fi/webhooks/restart-server",
        secret: process.env.SECRET,
      },
    },
    (err, data) => {
      if (err) {
        return console.error(err);
      }

      console.log(data);
    }
  );
}
