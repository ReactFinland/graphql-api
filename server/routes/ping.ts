function routePing(router) {
  const serverVersion = new Date().toString();

  router.get("/ping", (req, res) => res.status(200).json({ serverVersion }));
}

export default routePing;
