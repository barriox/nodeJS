import http from "node:http";
import { dito } from "./pokemon/dito.mjs";
const port = 3000;
const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          res.setHeader("Content-Type", "text/plain");
          return res.end("Hello World!");
        case "/contact":
          return res.end("Contact!");
        case "/pokemon/dito":
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end(JSON.stringify(dito));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=UTF-8");
          return res.end("404 error");
      }
    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          //escuchar el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            const data = JSON.parse(body);
            //llamar base datos para guardar datos
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;
        }
        default: {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=UTF-8");
          return res.end("404 Not Found!");
        }
      }
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
