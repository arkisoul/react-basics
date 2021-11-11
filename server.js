const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(auth);
server.use(middlewares);

server.use("/api", router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
