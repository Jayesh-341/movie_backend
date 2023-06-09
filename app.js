const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { getGenres } = require("./fakeGenreService");
const { getMovies, getMovie } = require("./fakeMovieService");
app.use(express.static("public"))
app.get("/movies/", function (req, res) {
  res.status(201).json({
    movies: getMovies()
  });
});
app.get("/movies/:id", function (req, res) {
  let id = req.params.id;
  res.status(201).json({
    movies: getMovie(id)
  });
});
app.get("/genres", function (req, res) {
  setTimeout(function () {
    res.status(201).json({
      genres: getGenres()
    });
  }, 2000);
});
app.listen(process.env.PORT || 4000, function () {
  console.log("Server Listening at port 4000");
});
