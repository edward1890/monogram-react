import React from "react";
import "./topheader.css";
import logo from "../images/Main_Logo.png"

const Topheader = () => (

    <div className="row toppy">
      
      <div className="col-md-4 text-center">
        <span className="text">Ships in 48 hours or it’s free!</span>
      </div>
      {/* <div className="col-md-1"></div> */}
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-4 text-center">
        <img src= {logo} className="mono-logo" alt="logo"></img>
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-2 text-center">
      <span className="text">Shop Now!</span>
      </div>
      <div className="col-md-2">
      </div>
    </div>

  );

  export default Topheader;