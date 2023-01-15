import React, { useEffect, useState } from "react";
import ListGenres from "../components/ListGenres";

const Genres = () => {
  const [genres, setGenres] = useState();

  const handleGenres = (genre) => {};
  useEffect(() => {
    const getGenres = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        const data = await res.json();
        setGenres(data.genres);
        console.log(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <>
      {genres?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleGenres(item.id);
            }}
          >
            {item.name}
          </button>
        );
      })}
      <ListGenres />
    </>
  );
};

export default Genres;
