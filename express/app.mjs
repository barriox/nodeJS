import express from "express";
import movies from "./movies.json" assert { type: "json" };
import crypto from "node:crypto";
import cors from "cors";
import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";

const app = express();
app.disabled("x-powered-by");

app.use(express.json());
//cors middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:8080",
      ];
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Now allowed by CORS"));
    },
  })
);
//GET
app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

app.get("/movies", (req, res) => {
  // const origin = req.header("origin");
  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   res.header("Access-Control-Allow-Origin", origin);
  // }
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter(
      (movie) => movie.genre.includes(genre)
      //if we want to filter by 'action' and 'Action'
      //movie.genre.some(g => g.toLowerCase() == genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }

  res.status(201).json(movies);
});
// app.options("/movies/:id", (req, res) => {
//   const origin = req.header("origin");
//   if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//     res.header("Access-Control-Allow-Origin", origin);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   }
//   res.send();
// });
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id == id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found!" });
});
//POST
//always use the same resources, movies in this case, the http verb already defines the specific operation
app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(400).json(JSON.parse(result.error.message));
  }
  //in database
  const newMovie = {
    id: crypto.randomUUID(), //random id with node:crypto
    ...result.data, //this is not the same as doing req.body bc this is already validated
  };
  movies.push(newMovie);
  res.status(201).json(newMovie); //refresh clients cache so that  they get the updated data without additional requests
});

//PATCH
app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);
  if (result.error) {
    return res.status(400).json(JSON.parse(result.error.message));
  }
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id == id);

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };
  movies[movieIndex] = updateMovie;
  return res.json(updateMovie);
});
app.delete("/movies/:id", (req, res) => {
  // const origin = req.header("origin");
  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   res.header("Access-Control-Allow-Origin", origin);
  // }
  const { id } = req.params;
  const deletingIndex = movies.findIndex((movie) => movie.id === id);
  if (deletingIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }
  movies.splice(deletingIndex, 1);
  return res.json({ message: "Movie deleted" });
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
