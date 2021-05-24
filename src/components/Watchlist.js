import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function Watchlist() {
   
   const {watchlist} = useContext(GlobalContext);
   
   return (
      <div>
         <div className="movie-page">
            <div className="container">
               <div className="header">
                  <h1 className="heading">My Watchlist</h1>
               </div>
            </div>
         </div>
      </div>
   )
}
