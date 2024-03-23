import http from "node:http";
import { findAvailablePort } from "./op2.mjs";

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});

// import http from "node:http";

// const server = http.createServer((req, res) => {
//   console.log("request received");
//   res.end("Hola mundo");
// });
// //el puerto 0 siempre utilizará el primer puerto vacío
// server.listen(0, () => {
//   console.log(`server listening on port ${server.address().port}`);
// });
