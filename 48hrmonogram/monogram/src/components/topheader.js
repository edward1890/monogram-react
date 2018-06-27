import React from "react";
import "./topheader.css";
import logo from "../images/Main_Logo.png"

const Topheader = () => (

    <div className="row">
      
      <div className="col-md-3">
        <span className="side">Ships in 48 hours or it’s free!</span>
      </div>
      <div className="col-md-1"></div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-4">
        <img src= {logo} className="mono-logo" alt="logo"></img>
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-2">
      <span className="side">SHOP NOW!</span>
      </div>
      <div className="col-md-1">
      </div>
    </div>

  );

  export default Topheader;