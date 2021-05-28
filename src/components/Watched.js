import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import MovieCard from './MovieCard'

export default function Watched() {

   const {watched} = useContext(GlobalContext);

   return (
      <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Movies</h1>
          </div>

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watched" />
              ))}
            </div>
          ) : (
            <h5 className="no-movies">(°_°)</h5>
          )}
        </div>
      </div>
    </div>
   )
}

