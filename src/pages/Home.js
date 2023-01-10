import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";
import { BsStarFill } from "react-icons/bs";
import List from "../components/List";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setPopularMovies(data.results);
    }
    fetchData();
  }, []);

  const screen = window.screen.width;

  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        transitionTime={3}
        showStatus={false}
      >
        {popularMovies.map((movie) => {
          const {
            id,
            backdrop_path,
            original_title,
            release_date,
            vote_average,
            overview,
          } = movie;
          return (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`movie/${id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{original_title}</div>
                <div className="posterImage__runtime">
                  <>{release_date}</>

                  <div className="posterImage__rating">
                    <>{vote_average}</>
                    <BsStarFill />
                  </div>
                </div>
                <div className="posterImage__description">
                  {screen <= 768
                    ? overview.slice(0, 80) + "..."
                    : overview.slice(0, 100) + "..."}
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>

      <List />
    </>
  );
};

export default Home;
