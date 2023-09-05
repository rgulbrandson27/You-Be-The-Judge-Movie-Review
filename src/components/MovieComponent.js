import React, {useState} from 'react';
import './MovieComponent.css'
import movies from './MovieList.js';
import Scale from './Images/Scale.png';
import Final from './Images/Final.png';
import DescriptionCom from './DescriptionCom.js';
import reactDOM from 'react';
import ReactDOM from 'react-dom/client'

    const MovieComponent = ({ title, poster, description, year, rating, runtime, imbd, count, average}) => {
   
    const[handleClick, setHandleClick] = useState(false);
    // const[size, setSize] = useState(false);

    // const handleMouseEnter = () => {
    //     setSize(true);
    // };
    // const handleMouseLeave = () => {
    //     setSize(false)

   


    return (
        <>
            {handleClick ?  <DescriptionCom className="description">{description}</DescriptionCom> :
            <div className="movie">
                <div className="poster-area">              
                    <img className="poster" src={poster} />
                </div>   

                <div className="text-area">
                    <h2 className="title">{title}</h2>
                        <img className="reel" src={Final}
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



