import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import MovieWheel from "./Images/MovieWheel.png";
import MovieReel from "./Images/MovieReel.png";
import ReelForGavel from "./Images/ReelForGavel.png";

const Header = () => {
  return (
    <div className="grid-container" id="header">
      {/* <img className="wheel left-wheel" src={MovieWheel} /> */}
      <div className="header-box">
        {/* <img className="reel" src={MovieReel}/> */}

        <h1 id="page-title">You Be The Judge</h1>

        {/* <img className="reel-for-gavel" src={ReelForGavel} /> */}
      </div>
      {/* <img className="wheel right-wheel" src={MovieWheel} /> */}
    </div>
  );
};

// background-image: url("Images/MovieWheel.png");
// background-blend-mode: screen ;
/*  blend-mode options: screen overlay darken lighten color-dodge saturation luminosity    */
// background-size: 96%;

// background-repeat: no-repeat;
// background-position: bottom right;

export default Header;
