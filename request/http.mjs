import http from "node:http";
import fs from "node:fs";
const port = 3001;

const processRequest = (req, res) => {
  console.log("request received:", req.url);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url == "/") {
    res.end("Bienvenido a mi página");
  } else if (req.url == "/img") {
    fs.readFile("./request/img.jpg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("500 Internal Server Error");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
  } else if (req.url == "/contacto") {
    res.end("Contacto");
  } else {
    res.statusCode = 404;
    res.end("404");
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
