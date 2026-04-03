const serverVersion = new Date().toString();

function handlePingRequest() {
  return Response.json({ serverVersion });
}

export default handlePingRequest;
