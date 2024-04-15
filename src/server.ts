import { app } from "./app/index.app";
import { createServer } from "node:http";
import config from "./config/index.config";

const server = createServer(app);

server.listen(config.server_port);

server.once("listening", () => {
  console.log(`servidor rodando na porta ${config.server_port}`);
});
