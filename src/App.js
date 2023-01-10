import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Moviedetails from "./pages/Moviedetails";
import List from "./components/List";
import Header from "./components/Header";
import SearchMovies from "./pages/SearchMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter basename={"/PopcornTiming"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<Moviedetails />}></Route>
          <Route
            path="movies/:type/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movies/:type/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route path="movie/:id/movie/:id" element={<Moviedetails />}></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route
            path="movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id/movie/:id"
            element={<Moviedetails />}
          ></Route>
          <Route path="movies/:type" element={<List />}></Route>
          <Route path="movies/search" element={<SearchMovies />}></Route>
          <Route
            path="/*"
            element={
              <h1 style={{ fontSize: 50 }}>Sorry something went wrong...</h1>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;