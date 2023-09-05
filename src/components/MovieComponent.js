import React, {useState} from 'react';
import './MovieComponent.css'
import movies from './MovieList.js';
import Scale from './Images/Scale.png';
import NewViewWhite from './Images/NewViewWhite.png';
import DescriptionCom from './DescriptionCom.js';
import reactDOM from 'react';
import ReactDOM from 'react-dom/client'

    const MovieComponent = ({ title, poster, description, year, rating, runtime, imbd, count, average}) => {
   
    const[handleClick, setHandleClick] = useState(false);
    const[handleHover, setHandleHover] = useState(false);
    const posterStyle = { minWidth: "115%", minHeight: "115%", z:"12"};

    const length = {title}.length;
    
    return (
        <>
            {handleClick ?  <DescriptionCom className="description" title={title} description={description}></DescriptionCom>  
            : <div className="movie">
                <div className="poster-area"     
                    onMouseEnter = {e => setHandleHover(true)}
                    onMouseLeave = {e => setHandleHover(false)}>      
                  
                  {handleHover ? <img className="poster" style={posterStyle} src={poster}/> : <img className="poster" src={poster}/> 
                  
                    }
                </div>   
                <div className="text-area">
                    <h2 className="title">{title}</h2>
                        <img className="reel" src={NewViewWhite}
                            onClick = {e => setHandleClick(true)}/>
                    <p className="link">{imbd}</p>
                    <p className="year">{year}</p>
                    <p className="rating">{rating}</p>
                    <p className="minutes">{runtime}</p>                    
                    <div className="review-box"></div>
                        <img className="scale" src={Scale}/>
                        <p className="count">{count} Reviews</p>
                        <p className="review">Leave a Review</p>
                        <p className="score">{average} / 5.0</p>
                    <div/>
                </div>
            </div>
    }
        </>
        );
    }

export default MovieComponent;



