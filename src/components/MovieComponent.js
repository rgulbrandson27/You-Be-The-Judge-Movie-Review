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
    const posterStyle = {border: "4px solid rgb(10,147,150)", radius:"8px", width: "214px", height: "300px", margin:"-10px", marginRight:"-12px", z:"20"};


    return (
        <>
            {handleClick ?  <DescriptionCom className="description" setHandleClick={setHandleClick} title={title} description={description}></DescriptionCom>  
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
                    <p className="link">imbd: {imbd}</p>
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



