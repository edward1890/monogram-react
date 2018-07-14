import React from "react";
import "./footer.css";
import plogo from "../../images/Pinterest_Logo.png"
import flogo from "../../images/FB_Logo.png"
import ilogo from "../../images/Insta_Logo.png"

const Footer = () => (
<div className="row footer">
<div className="col-md-1"></div>
  <div className="col-md-3 text-center"><p className= "text2">The term ‘Etsy’ is a trademark of Etsy, Inc.
Etsy does not endorse or sponsor this app.</p></div>
  <div className="col-md-4 text-center">
   <a href='https://www.facebook.com/48HourMonogram/'><img src= {flogo} className="f-logo" alt="flogo"></img></a>
   <a href='https://www.instagram.com/48hourmonogram/'><img src= {ilogo} className="i-logo"  alt="ilogo"></img></a>
   <a href='https://www.pinterest.com/48hourmonogram/'><img src= {plogo} className="p-logo"  alt="plogo"></img></a>
  </div>
  <div className="col-md-3 text-center"><p className="text2">Contact us through the Etsy platform
or email us!<a className="text2" href= "mailto:48hourmonogram@gmail.com"> 48hourmonogram@gmail.com</a></p> </div>
<div className="col-md-1"></div>
</div>
);

export default Footer;