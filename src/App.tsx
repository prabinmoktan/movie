import "./App.css";
import { Routes, Route } from "react-router-dom";

import TrendingMovies from "./pages/TrendingMovies";
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import Home from "./pages/Homepage/Home";
import Tvshows from "./pages/tvShows/Tvshows";

import TopMovies from "./pages/topMovies/TopMovies";
import TvShowDetailPage from "./pages/tvShowDetailPage.tsx/TvShowDetailPage";
import Register from "./auth/register/Register";
import Layout from "./Layout";
import Login from "./auth/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trendingMovies" element={<TrendingMovies />} />
          <Route path="/trendingMovies/:id" element={<MovieDetailPage />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/tvShows/:id" element={<TvShowDetailPage />} />

          <Route path="/topRated" element={<TopMovies />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
