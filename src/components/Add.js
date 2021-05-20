import React from 'react'

export default function Add() {
   return (
      <div className="add-page">
         <div className="container">
            <div className="add-content">
               <div className="input-wrapper" style={{display:"flex",}}>
                  <span className="btn" style={{
                     marginRight:"-5px",
                     cursor:"default",
                  }}>Search</span>
                  <input type="text" className="input-box"/>
               </div>
            </div>
         </div>
      </div>
   )
}
