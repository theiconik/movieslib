import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
   watchlist : [],
   watched: [],
};

//create context
export const GlobalContext = createContext(initialState);

//Provider Components

export const GlobalProvider = props => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   useEffect(() => {
      localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
   }, [state]);

   //actions
   const addMovieToWatchlist = movie => {
      dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
   }

   return (
      <GlobalContext.Provider value = {{watchlist : state.watchlist, watched: state.watched, addMovieToWatchlist,}}>
         {props.children}
      </GlobalContext.Provider>
   )
}