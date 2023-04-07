import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";

const API_KEY = "055c2891ab1fe08475c6abfd3cf608c1";

function App() {

  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
      fetchData();
  }, [])

  async function fetchData() {
      const latestMoviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=it`;
      const response = await fetch(latestMoviesURL);
      const data = await response.json();
      const movies = data.results.slice(0,12);
      const x = parseMoviesArray(movies);
      console.log(x)
      setLatestMovies(x);
  }

  function parseMoviesArray(movies) {

      function getEndDate(movie) {
          const endDate = new Date(movie.release_date).setDate(new Date(movie.release_date).getDate() + 21);
          const formattedEndDate = new Date(endDate).toLocaleDateString();
          return formattedEndDate; 
      }

      function getRooms(movie) {
          const title = movie.title
          const movieIndex = movies.findIndex(movie => movie.title === title);
          const room = movieIndex + 1;
          return room;
      }

      const moviesArray = movies.map(movie => (
          {
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path,
              release_date: new Date(movie.release_date).toLocaleDateString(),
              end_date: getEndDate(movie),
              room: getRooms(movie),
              overview: movie.overview,

          }
      ))
      return moviesArray
  }

  return (
    <div>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home movies={latestMovies} />} />
          <Route path="/movie/:id" element={<Movie movies={latestMovies} />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
