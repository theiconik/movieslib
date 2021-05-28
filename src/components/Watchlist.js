import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My Watchlist</h1>

            <span className="count-pill">{watchlist.length}</span>
          </div>

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h5 className="no-movies">¯\_(ツ)_/¯</h5>
          )}
        </div>
      </div>
    </div>
  );
}
