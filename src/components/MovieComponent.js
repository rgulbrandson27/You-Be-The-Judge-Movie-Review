import React, {useState} from 'react';
import './MovieComponent.css'
import movies from './MovieList.js';
import Scale from './Images/Scale.png';
import Final from './Images/Final.png';
import DescriptionCom from './DescriptionCom.js';


    const MovieComponent = ({ title, poster, description, year, rating, runtime, imbd, count, average}) => {
        
        // function handleMouseOver() {
        //     console.log("hi");
        // }
        
        // const [mouseIsOver, setMouseIsOver] = useState(false);

        // function showDescriptionBox() {
        //     console.log('show');
        // }

        return (

            <div className="movie">
                <div className="poster-area">
                    <img className="poster" src={poster}/>
                </div>   

                <div className="text-area">
                    <h2 className="title">{title}</h2>
                        <img className="reel" src={Final}/>
                        <p className="description">
                            <DescriptionCom/>
                        </p>
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

                {/* <modal>
                    {Description({description})}
                </modal> */}

                {/* <div className="description-box" >
                        <div className="title-box">
                        <h1 className="descriptionBoxTitle">{title}</h1>
                        </div>
                        <p className="description-section">{description}</p> 
                    </div> */}
            </div>

            
           
        );
    }

export default MovieComponent;



