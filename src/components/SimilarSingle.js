import React from "react";
import "./similar-movie.css";
import { BsStarFill } from "react-icons/bs/";
import { Link } from "react-router-dom";

const SimilarSingle = ({ movie }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={`./movie/${movie.id}`}
    >
      <div className="similar">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
          className="similar__img "
        />
        <div className="similar__overlay">
          <div className="similar__title">
            {movie ? movie.original_title : ""}
          </div>

          <div className="similar__runtime">
            {movie ? movie.release_date : ""}
            <span className="similar__rating">
              {movie ? movie.vote_average.toFixed(1) : ""}
              <BsStarFill />
            </span>
          </div>
          <div className="similar__description">
            {movie ? movie.overview.slice(0, 80) + "..." : ""}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SimilarSingle;
