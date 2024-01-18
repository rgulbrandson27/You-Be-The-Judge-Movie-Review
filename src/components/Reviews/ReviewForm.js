import React, {useState} from 'react';
import ReviewList from './ReviewList';
import './ReviewForm.css';
import {PiGavelFill} from 'react-icons/pi';
import './Gavels.css';
import './ReviewList.css';
import MovieList from '../MovieList.js';
import MovieComponent from '../MovieComponent';
import movies from '../MovieList.js';

const ReviewForm = ({key, title, reviews, setReviews}) => {  

    const [reviewerName, setReviewerName] = useState("");
    const [reviewerRating, setReviewerRating] = useState("");
    const [reviewerComments, setReviewerComments] = useState("");
    const [ratingDisplay, setRatingDisplay] = useState([]);
      
    // const createNewReview = async (e) => {
    //     e.preventDefault();

    //     const newReview = { reviewerName, reviewerRating, reviewerComments }

    //    const response= await fetch(`https://65a559c852f07a8b4a3eec40.mockapi.io/movies/reviews/${key}/reviews`, {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json" },
    //         body: JSON.stringify(newReview)
    //         }).then(() => {
    //     console.log("A new review has been added.")
    // })
    // setReviews([newReview, ...reviews])
    //     }
        
            // , reviewId: reviewList.length + 1 };
        //use this method of setting an id only if you are okay with an id changing (would not want to do for a movie id for example)
        // console.log(newReview);
        // console.log(reviewList);
        // resetFields();
    
        const createNewReview = (e) => {
            e.preventDefault();
            const newReview = { reviewerName, reviewerRating, reviewerComments };
    
           fetch(`https://65a559c852f07a8b4a3eec40.mockapi.io/movies/reviews/${key}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(newReview),
                })
                .then(response => response.json())
                .then(() => {
                console.log("A new review has been added.")
                })
                .catch(error => console.error('Error', error));
            
            setReviews([newReview, ...reviews])
            }



    return (
        <div className="review-container">
            <h1 className="review-title">{title}</h1>
            <h1 className="your-opinion">What's YOUR Opinion?</h1>
            <form className="review-form" onSubmit={ () => createNewReview()}>   
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
                {/* <button className="reset-button" type="submit" onClick={()=>resetFields()}> Reset</button> */}
                </div>
            </form>

            {/* {handleSubmitReview && <ReviewList className="show-reviews" title ={title} >   </ReviewList>} */}

      
          
        </div> //end review container
    )
}

export default ReviewForm;