import React, {useState} from 'react';
import './MovieComponent.css'
import movies from './MovieList.js';
import Scale from './Images/Scale.png';
import NewViewWhite from './Images/NewViewWhite.png';
import DescriptionCom from './DescriptionCom.js';
import reactDOM from 'react';
import ReactDOM from 'react-dom/client';
import ReviewForm from './Reviews/ReviewForm.js';
import ReviewList from './Reviews/ReviewList';


    const MovieComponent = ({ title, poster, description, year, rating, runtime, link, count, average, reviews}) => {

    const[handleClick, setHandleClick] = useState(false);
    const[handleHover, setHandleHover] = useState(false);
    const[handleReviewClick, setHandleReviewClick] = useState (false);
    const posterStyle = {border: "4px solid rgb(10,147,150)", radius:"8px", width: "214px", height: "300px", margin:"-10px", marginRight:"-12px", z:"20"};
 
    
    // function handleReviewClick(e) {
    //     if (handleReviewClick === true) {
    //         <ReviewForm className="review-form" setHandleReviewClick={setHandleReviewClick} title={title}></ReviewForm>
    //     }

    // function handleReviewClick() {
    //  <ReviewForm className="reviewFormShow" title={title} ></ReviewForm>
    // }


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
                    <p className="year">{year}</p>
                    <p className="rating">{rating}</p>
                    <p className="minutes">{runtime}</p>   
                    <img className="reel" src={NewViewWhite}
                        onClick = {e => setHandleClick(true)}/>
                    <p className="link">    
                        <a href={link} target="_blank">go to IMBd</a>
                    </p>                 
                    <div className="review-box"></div>
                        <img className="scale" src={Scale}/>
                        {{count} === 1 ? <p className="count" >{count} Review</p> : <p className="count" >{count} Reviews</p>}
                        <p className="review"  
                            onClick = {e => setHandleReviewClick(true)}>Leave a Review</p>
                       
                        <p className="score">{average} / 5.0</p>
                    <div/>
                </div>
            </div>
    }
         {handleReviewClick && <ReviewForm className="review-pop-up" title={title}>   </ReviewForm>}
        </>
        );
    }
     
export default MovieComponent;



