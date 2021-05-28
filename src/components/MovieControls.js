import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MovieControls({ movie, type }) {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye-slash" onClick={() => moveToWatchlist(movie)}></i>
          </button>

          <button
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times" onClick={() => removeFromWatched(movie.id)}></i>
          </button>
        </>
      )}
    </div>
  );
}
