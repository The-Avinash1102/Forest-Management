import React from "react";
import HandleNav from './Navigation'
const Top = () => {
    return(
        <div className="container">
      <header>
        <div className="top-container">
          <div className="logo">
            <h1 style={{color:"white"}}>Greenify</h1>
          </div>
          <HandleNav />
        </div>
      </header>
    </div>
    );
};

export default Top;