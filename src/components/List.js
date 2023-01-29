import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./list.css";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "../pages/Loading";

const List = () => {
  const [movieLists, setMoviesLists] = useState([]);
  const { type } = useParams();
  const { openModal } = useGlobalContext();

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "now_playing"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setMoviesLists(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <div className="list__head">
        <h2 className="list__title">
          {(type ? type : "discover").toUpperCase()}
        </h2>
      </div>
      <div className="list__cards">
        {movieLists.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default List;
