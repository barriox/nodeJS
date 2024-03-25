import express from "express";
import { dito } from "../request/pokemon/dito.mjs";
const app = express();

app.disabled("x-powered-by");

const PORT = process.env.PORT ?? 3000;

//MIDDLEWARE
app.use(express.json());
// app.use((req, res, next) => {
//   if (req.method != "POST") return next();
//   if (req.headers["content-type"] != "application/json") return next();
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     //mute request and save  it to the request object req.body
//     req.body = data;
//     next();
//   });
// });

//GET
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/pokemon/dito", (req, res) => {
  res.json(dito);
});

//POST
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

//ERROR HANDLING .use means every option (post, get, head...)
app.use((req, res) => {
  res.status(404).send("Error 404. Not found!");
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
