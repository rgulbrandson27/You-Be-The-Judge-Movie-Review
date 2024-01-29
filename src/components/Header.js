import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import MovieReel from './Images/MovieReel.png';


const Header = () => {
    return (
      <div className="grid-container" id="header">
        <div className ="header-box">
          {/* <img className="left-reel" src={MovieReel}/> */}
            <h1 id="page-title">You Be The Judge</h1>
          {/* <img className="right-reel" src={MovieReel}/> */}
        </div>
      </div>
);
}

export default Header;