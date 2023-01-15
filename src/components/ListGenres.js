import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListGenres = () => {
  const [listMoviesGenres, setListMoviesGenres] = useState();
  const { ids } = useParams();
  useEffect(() => {
    const getListGenres = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=encodeURI28`
        );
        const data = await res.json();
        setListMoviesGenres(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getListGenres();
  });
  return (
    <div>
      {listMoviesGenres.map((list) => {
        <h2>{list.original_title}</h2>;
      })}
    </div>
  );
};

export default ListGenres;
