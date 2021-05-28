import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ResultCard({ movie }) {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie || storedMovieWatched ? true : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card" style={{ margin: "3rem" }}>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "----"}
          </h4>
        </div>

        <div className="controls" >
          <button
            disabled={watchlistDisabled}
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            disabled={watchedDisabled}
            className="btn"
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
