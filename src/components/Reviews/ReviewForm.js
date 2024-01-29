import React, {useState} from 'react';
import './ReviewForm.css';
import {PiGavelFill} from 'react-icons/pi';
import './Gavels.css';
import './ReviewList.css';

const ReviewForm = ({movieId, title, reviews, setShowLeaveReviewForm, setShowReviewList, onReviewCreated}) => {  

    const [reviewerName, setReviewerName] = useState("");
    const [reviewerRating, setReviewerRating] = useState("");
    const [reviewerComments, setReviewerComments] = useState("");
    const [ratingDisplay, setRatingDisplay] = useState([]);
      
    const createNewReview = async (e) => {
        e.preventDefault();
        console.log(movieId);
        const nextReviewId = movieId * 100 + reviews.length +1;
        const newReview = { movieId, reviewId: nextReviewId, reviewerName, reviewerRating, reviewerComments };
        console.log('Request payload:', JSON.stringify(newReview));
        try {
            const response = await fetch(`http://localhost:3000/movies/${movieId}/reviews`, {
                                        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),

            });

            console.log('Response from API:', response);

        if (!response.ok) {
            throw new Error(`Failed to create review: ${response.status}`);
        }
        
        const newReviewData = await response.json();
        console.log("New:", newReviewData)
        onReviewCreated([...reviews, newReviewData].reverse, movieId);
        console.log("A New Review has been Added.");
        }   catch (error) {
        console.error('Error in fetch:', error);
        }
        setShowLeaveReviewForm(false);
        setShowReviewList(true);
    };

    return (
        <div className="review-container">
            <h1 className="review-title">{title}</h1>
            <h1 className="your-opinion">What's YOUR Opinion?</h1>
            <form className="review-form" onSubmit={createNewReview}>   
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
                                value={ratingValue} 
                                onClick={() => setReviewerRating(ratingValue)}/>
                            
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
                <button className="publish-button" type="submit" >Publish</button> 
                </div>
            </form>
            
        </div> //end review container
    );
};

export default ReviewForm;