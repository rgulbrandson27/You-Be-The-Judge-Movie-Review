import React, {useEffect, useState} from 'react';
import './MovieComponent.css'
import {PiArrowArcLeft, PiGavelFill} from 'react-icons/pi';
import Scale from './Images/Scale.png';
import NewViewWhite from './Images/NewViewWhite.png';
import DescriptionCom from './DescriptionCom.js';
// import reactDOM from 'react';
// import ReactDOM from 'react-dom/client';
import ReviewForm from './Reviews/ReviewForm.js';
import ReviewList from './Reviews/ReviewList';
import Arrow from './Images/Arrow.png';


const MovieComponent = ({ movieId, title, poster, description, year, rating, runtime, link, reviews: individualReviews, reviewerRating, reviewId, reviewerName, reviewerComments }) => {

    const [handleDescriptionClick, setHandleDescriptionClick] = useState(false);
    const [handlePosterHover, setHandlePosterHover] = useState(false);
    const [count, setCount] = useState(0);
    const [average, setAverage] = useState(0);
    const [showLeaveReviewForm, setShowLeaveReviewForm] = useState (false);
    const [showReviewList, setShowReviewList] = useState (false);
    const [reviews, setReviews] = useState ( [ 
            // {reviewerName:"Sunshine", reviewerRating: 5.0, reviewerComments:"Loved this Movie! It has got to be one of my top ten favorites of all time!", reviewId:"1"}, 
            // {reviewerName:"Karen", reviewerRating: 1.0, reviewerComments:"This movie has been incorrectly rated.  A PG-13 rating would have been much more appropriate for this supposedly G rated film. The Motion Picture Association of America will be hearing from me first thing in the morning!", reviewId:"2"}, 
            // {reviewerName:"Soccer Mom", reviewerRating: 2.0, reviewerComments:"This movie was a waste of time, I would have rather watched Goonies with the kids for the 28th time.", reviewId:"3"}
        ] );
    console.log(movieId);
    useEffect(() => {
        const totalCount = reviews.length;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const avgRating = totalCount > 0 ? totalRating / totalCount : 0;

        setCount(totalCount);
            // setCount(0);
            // setCount(1);
            //setCount(2);
        setAverage(count > 1 ? avgRating : " __ ");
        }, [reviews]);
    



    // console.log(count);

    // const ratingsArray = reviews.map(rating => rating.reviewerRating);
    // console.log(ratingsArray);

    // const sum = ratingsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //     console.log(sum);

    // const average = (sum / (reviews.length)).toFixed(1);
    // console.log(average);

    const posterStyle = {border: "4px solid rgb(10,147,150)", radius:"8px", width: "214px", height: "300px", margin:"-10px", marginRight:"-12px", z:"20"};

    return (
        <>
            {handleDescriptionClick ?  <DescriptionCom className="description" setHandleDescriptionClick={setHandleDescriptionClick} title={title} description={description}></DescriptionCom>  
            : <div className="movie">
                <div className="poster-area"     
                    onMouseEnter = {e => setHandlePosterHover(true)}
                    onMouseLeave = {e => setHandlePosterHover(false)}>      

                    {handlePosterHover ? <img className="poster" style={posterStyle} src={poster}/> : <img className="poster" src={poster}/> 
    
                    }
                </div>   
                <div className="text-area">
                    <h2 className="title">{title}</h2>
                    <p className="year">{year}</p>
                    <p className="rating">{rating}</p>
                    <p className="minutes">{runtime}</p>   
                    <img className="reel" src={NewViewWhite}
                        onClick = {e => setHandleDescriptionClick(true)}/>
                    <p className="link">    
                        <a href={link} target="_blank">go to IMBd</a>
                    </p>                 
                    <div className="review-box"></div>
                        <img className="scale" src={Scale}/>

                        {(count > 1) ? <p className="count read-reviews" onClick = {e => setShowReviewList(true)}>{count} Reviews</p> 
                        : 
                            ((count > 0) ? <p className="count read-reviews" onClick = {e => setShowReviewList(true)}>{count} Review</p> 
                            : <p className="count no-reviews" >No Reviews</p>)
                        }
                        <p className="be-the-first">You are hereby ordered to leave your opinion!<PiGavelFill className="mini-gavel"/> <img className="arrow" src={Arrow}/></p>
                        <p className="view">View</p>
                        
                        
                        <p className="review"  
                            onClick = {e => setShowLeaveReviewForm(true)}>Leave a Review</p>
                       
                        <p className="score">{average} / 5.0</p>  
                    <div/>
                </div> 
    
                {showLeaveReviewForm && (
                <ReviewForm className="review-pop-up" movieId={movieId} title={title} reviews={reviews} setReviews={setReviews} count={count} showLeaveReviewForm={showLeaveReviewForm} setShowLeaveReviewForm={setShowLeaveReviewForm} setShowReviewList={setShowReviewList} />
                )}
                {showReviewList ? (
                    <div>
                        <p>Show: {showReviewList.toString()}</p>
                <ReviewList className="review-list-pop-up" movieId={movieId} title={title} reviews={reviews} setReviews={setReviews}   />
                </div>
                ) : null}
                </div>
            }
        </>
    );
}; 
export default MovieComponent;