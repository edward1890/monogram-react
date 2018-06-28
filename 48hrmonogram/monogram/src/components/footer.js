import React from "react";
import "./footer.css";
import plogo from "../images/Pinterest_Logo.png"
import flogo from "../images/FB_Logo.png"
import ilogo from "../images/Insta_Logo.png"

const Footer = () => (
<div className="row footer">
  <div className="col-md-4 text-center"><p className= "text1">The term ‘Etsy’ is a trademark of Etsy, Inc.
Etsy does not endorse or sponsor this app.</p></div>
  <div className="col-md-4 text-center">
   <img src= {flogo} className="f-logo" alt="flogo"></img>
   <img src= {ilogo} className="i-logo" alt="ilogo"></img>
   <img src= {plogo} className="p-logo" alt="plogo"></img>
  </div>
  <div className="col-md-4 text-center"><p className="text1">Contact us through the Etsy platform
or email us! 48hourmonogram@gmail.com</p> </div>
</div>
);

export default Footer;