import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviedetails.css";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import {
  BsShare,
  BsFillBookmarkDashFill,
  BsFillBookmarkPlusFill,
  BsBookmarkPlus,
} from "react-icons/bs";
import Loading from "./Loading";
import SimilarMovies from "../components/SimilarMovies";
import SimilarSingle from "../components/SimilarSingle";
import { useGlobalContext } from "../Context";
import HorizontalScroll from "react-horizontal-scrolling";
import { AiOutlinePlayCircle } from "react-icons/ai/";

const Moviedetails = () => {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [addWatchlist, setAddWatchlist] = useState(true);
  const [similarMovies, setSimilarMovies] = useState();
  const { openModal } = useGlobalContext();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        const data = await res.json();
        setCurrentMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getSimilar = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
        );
        const data = await res.json();
        setSimilarMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSimilar();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="movie">
          <div className="movie__intro">
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetails ? currentMovieDetails.backdrop_path : ""
              }`}
            />
          </div>
          <AiOutlinePlayCircle className="movie__play" onClick={openModal} />
          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__posterBox">
                {window.screen.width <= 400 ? (
                  ""
                ) : (
                  <img
                    className="movie__poster"
                    src={`https://image.tmdb.org/t/p/original${
                      currentMovieDetails ? currentMovieDetails.poster_path : ""
                    }`}
                  />
                )}
              </div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">
                  {currentMovieDetails
                    ? currentMovieDetails.original_title
                    : ""}
                  <div className="movie__shareandwatch">
                    <BsShare
                      style={{ width: "20px" }}
                      className="movie__share"
                      onClick={openModal}
                    />
                    {!addWatchlist ? (
                      <BsFillBookmarkPlusFill
                        className="movie__add"
                        style={{ width: "25px" }}
                        onClick={() => setAddWatchlist(!addWatchlist)}
                      />
                    ) : (
                      <BsBookmarkPlus
                        className="movie__unadd"
                        style={{ width: "25px" }}
                        onClick={() => setAddWatchlist(!addWatchlist)}
                      />
                    )}
                  </div>
                </div>

                <div className="movie__tagline">
                  {currentMovieDetails ? currentMovieDetails.tagline : ""}
                </div>
                <div className="movie__ratting">
                  {currentMovieDetails
                    ? currentMovieDetails.vote_average.toFixed(1)
                    : ""}
                  <FaRegStar />

                  <div className="movie__voteCount">
                    {currentMovieDetails
                      ? +currentMovieDetails.vote_count + " " + "votes"
                      : ""}{" "}
                    <FaRegHeart />
                  </div>
                </div>
                <div className="movie__runtime">
                  {currentMovieDetails
                    ? "(" + currentMovieDetails.runtime + ") mins"
                    : ""}{" "}
                  <IoMdTime />
                </div>
                <div className="movie__releaseDate">
                  {currentMovieDetails ? currentMovieDetails.release_date : ""}{" "}
                  <MdOutlineDateRange />
                </div>
                <div className="movie__genres">
                  {currentMovieDetails && currentMovieDetails.genres
                    ? currentMovieDetails.genres.map((genre) => {
                        return (
                          <>
                            <span className="movie__genre" id={genre.id}>
                              {genre.name}
                            </span>
                          </>
                        );
                      })
                    : ""}
                </div>

                <>
                  {/* {!addWatchlist && alert("Your watchlist has been added!")}
                  {addWatchlist && alert("You removed from watchlist!")} */}
                  {/* {!addWatchlist && (
                    <div className="alert alert-success shadow-lg gone">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Your watchlist has been added!</span>
                      </div>
                    </div>
                  )} */}

                  {/* {addWatchlist && (
                    <div className="alert alert-error shadow-lg gone">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>You removed from watchlist!</span>
                      </div>
                    </div>
                  )} */}
                </>
              </div>
              <div className="movie__datailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>
                  {currentMovieDetails ? currentMovieDetails.overview : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="similar__list">
            <h2 className="similar__name">{"similar movies".toUpperCase()}</h2>
            <div className="similar__single">
              <HorizontalScroll className="similar__items">
                {similarMovies?.map((movie) => (
                  <SimilarSingle movie={movie} />
                ))}
              </HorizontalScroll>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Moviedetails;
