import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../components/Genres/Genres";
// import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../hooks/useGenre";
import CustomPagination from "../components/Pagination/CustomPagination";
import Discover from "../components/Discover/Discover";
import "../pages/movies.css";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContents(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    // window.scrollTo(0, 100);
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <h1 className="page_title">Discover</h1>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="page_content">
        {contents?.map((movie) => (
          <Discover
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            date={movie.release_date}
            vote={movie.vote_average}
            overview={movie.overview}
            page={page}
          />
        ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination
          setPage={setPage}
          numOfPages={numOfPages}
          className="page_color"
        />
      )}
    </div>
  );
};

export default Movies;
