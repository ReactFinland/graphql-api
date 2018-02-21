const NpmClient = require("npm-registry-client");
const client = new NpmClient({
  token: process.env.NPM_TOKEN,
  alwaysAuth: false,
});

getNpmHooks();

function getNpmHooks() {
  // https://github.com/npm/registry/blob/master/docs/hooks/endpoints.md
  client.get("https://registry.npmjs.org/-/npm/v1/hooks", {}, (err, data) => {
    if (err) {
      return console.error(err);
    }

    console.log(data);
  });
}
