import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimilarSingle from "./SimilarSingle";
import "./similar-movie.css";
import { BsStarFill } from "react-icons/bs/";

const SimilarMovies = () => {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
      );
      const data = await res.json();
      console.log(data.results);
      setSimilarMovies(data.results);
    };
    getData();
  }, []);

  return (
    <div className="similar__list">
      <h2 className="similar__name">{"similar movies".toUpperCase()}</h2>
      <div className="similar__single">
        {similarMovies.map((movie) => {
          <SimilarSingle movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SimilarMovies;
