import React from "react";
import "./topheader.css";
import logo from "../../images/Main_Logo.png"

const Topheader = () => (

    <div className="row toppy">
      
      <div className="col-md-4 text-center">
        <a href="https://www.etsy.com/shop/48HourMonogram"><p className="text">Ships in 48 hours or it’s free!</p></a>
      </div>
     
      <div className="col-md-4 text-center">
        <a href="https://www.etsy.com/shop/48HourMonogram"><img src= {logo} className="mono-logo" alt="logo"></img></a>
      </div>

      <div className="col-md-4 text-center">
        <a href="https://www.etsy.com/shop/48HourMonogram"><p className="text">Shop Now!</p></a>
      </div>

    </div>

  );

  export default Topheader;