import React, {useState} from 'react';
import ReviewList from './ReviewList';
import './ReviewForm.css';
import {PiGavelFill} from 'react-icons/pi';
import './Gavels.css';
import './ReviewList.css';
import MovieList from '../MovieList.js';

const ReviewForm = ({title}) => {  

    const [reviewerName, setReviewerName] = useState("");
    const [reviewerRating, setReviewerRating] = useState("");
    const [reviewerComments, setReviewerComments] = useState("");
    const [reviewList, setReviewList] = useState([
        {reviewerName:"Sunshine", reviewerRating:"5.0", reviewerComments:"Loved this Movie! It has got to be one of my top ten favorites of all time!", reviewId:"1"}, 
        {reviewerName:"Karen", reviewerRating:"1.0", reviewerComments:"This movie has been incorrectly rated.  A PG-13 rating would have been much more appropriate for this supposedly G rated film. The Motion Picture Association of America will be hearing from me first thing in the morning!", reviewId:"2"}, 
        {reviewerName:"Soccer Mom", reviewerRating:"2.0", reviewerComments:"This movie was a waste of time, I would have rather watched Goonies with the kids for the 28th time.", reviewId:"3"}]); 
    const [ratingDisplay, setRatingDisplay] = useState("");
    
    const resetFields = () => {
        setReviewerName("");
        setReviewerRating("");
        setReviewerComments("");
        setRatingDisplay("");
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { reviewerName, reviewerRating, reviewerComments, reviewId: reviewList.length + 1 };
        //use this method of setting an id only if you are okay with an id changing (would not want to do for a movie id for example)
        console.log(newReview);
        setReviewList([newReview, ...reviewList]);
        console.log(reviewList);
        resetFields();
    }

    return (
        <div className="review-container">
            <h1 className="review-title">{title}</h1>
            <h1 className="your-opinion">What's YOUR Opinion?</h1>
            <form className="review-form" onSubmit={handleSubmit}>
                <div>
                    <p className="ratingDisplay">{ratingDisplay}</p>
                    <div className="gavels-box">
                    <p className="dissent">dissent</p>
                    <div className="gavels-row">
                        {[...Array(5)].map((gavel, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label>
                                <input 
                                type="radio" 
                                name="rating" 
                                required
                                value={ratingValue}
                                onClick={() => setReviewerRating(ratingValue + ".0")}/>
                            
                                <PiGavelFill 
                                className="gavel" 
                                color={ratingValue <= ratingDisplay  ? "white" : "gray"} 
                                size={30} 
                                onMouseEnter={() => setRatingDisplay(ratingValue + ".0")}/>
                            </label>
                        )
                        })}
                    </div> 
                    <p className="concur">concur</p>
                </div>

                <input
                    type="text" 
                    placeholder="Name" 
                    className="name" 
                    id="name"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}>
                </input>
                <textarea
                    rows={4} 
                    type="text"
                    className="comments"
                    placeholder="Comments" 
                    required
                    value={reviewerComments}
                    onChange={(e) => setReviewerComments(e.target.value)}>
                    </textarea>
                <button className="publish-button" type="submit">Publish</button>
                <button className="reset-button" type="submit" onClick={()=>resetFields()}> Reset</button>
                </div>
            </form>

            <div className="review-list">
                {reviewList.map((review => (
                    <div className="review-item" key={review.reviewId}>
                        <p className="name-rating-row">
                        <span className="r-name">{review.reviewerName}</span>
                        <span className="r-rating">{review.reviewerRating}</span>
                        </p>
                        <p>{review.reviewerComments}</p>
                        <p className="line">_____________________________</p>
                    </div>      
                )))};
            </div>
        </div> //end review container
    )
}

export default ReviewForm;