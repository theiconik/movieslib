import React, { useState } from "react";
import ResultCard from './ResultCard';

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])

  const changeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d0e92860093cd5a9194874ea46dbab97&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors){
           setResults(data.results)
        } else {
           setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper" style={{ display: "flex" }}>
            <span
              className="btn"
              style={{
                marginRight: "-5px",
                cursor: "default",
              }}
            >
              Search
            </span>
            <input
              type="text"
              className="input-box"
              value={query}
              onChange={changeHandler}
            />
          </div>

          {results.length > 0 && (
             <ul className="results">
                {results.map((movie) => (
                   <li key={movie.id}>
                      <ResultCard movie={movie}/>
                   </li>
                ))}
             </ul>
          )}
        </div>
      </div>
    </div>
  );
}
