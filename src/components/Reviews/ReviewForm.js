import React, { useState, useEffect } from "react";
import "./ReviewForm.css";
import { PiGavelFill } from "react-icons/pi";
import "./Gavels.css";
import "./ReviewList.css";

const ReviewForm = ({
  title,
  movieId,
  reviews,
  setReviews,
  setShowLeaveReviewForm,
  setShowReviewList,
}) => {
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerRating, setReviewerRating] = useState("");
  const [reviewerComments, setReviewerComments] = useState("");
  const [ratingDisplay, setRatingDisplay] = useState([]);
  // const [reviewList, setReviewList] = useState([]);

  const createNewReview = (e) => {
    e.preventDefault();
    const nextReviewId = movieId * 100 + reviews.length + 1;
    console.log(nextReviewId);
    const newReview = {
      movieId,
      reviewId: nextReviewId,
      reviewerName,
      reviewerRating,
      reviewerComments,
    };

    console.log("New Review:", newReview);
    setReviews([...reviews, newReview]);
    // setReviewList([...reviewList, newReview]);
    // console.log("Review List:", reviewList);

    // updatedMovies(movies);
    setShowLeaveReviewForm(false);
    setShowReviewList(true);

    // const url = 'http://localhost:3000/movies/${movieId}';

    // Log the URL before making the request
    // console.log('Request URL:', url);
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    // Log the response data
    // console.log('Response Data:', data);

    // Process the data further
    // ...
    //   })
    //   .catch(error => console.error('Error:', error));

    // const createNewReview = async (e) => {
    //     e.preventDefault();
    //     console.log(movieId);
    //     const nextReviewId = movieId * 100 + reviews.length +1;
    //     const newReview = { movieId, reviewId: nextReviewId, reviewerName, reviewerRating, reviewerComments };
    //     console.log('Request payload:', JSON.stringify(newReview));
    //     try {
    //         const response = await fetch(`http://localhost:3000/movies/${movieId}`, {

    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newReview),

    //         });

    //         console.log('Response from API:', response);

    //     if (!response.ok) {
    //         throw new Error(`Failed to create review: ${response.status}`);
    //     }

    //     const newReviewData = await response.json();
    //     console.log("New:", newReviewData)
    //     onReviewCreated([...reviews, newReviewData].reverse(), movieId);
    //     console.log("A New Review has been Added.");
    //     }   catch (error) {
    //     console.error('Error in fetch:', error);
    //     }

    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const newReview = {
    //     reviewerName,
    //     reviewerRating,
    //     reviewerComments,
    //     reviewId: reviewList.length + 1,
    //   };
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
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setReviewerRating(ratingValue)}
                    />

                    <PiGavelFill
                      className="gavel"
                      color={ratingValue <= ratingDisplay ? "white" : "gray"}
                      size={30}
                      onMouseEnter={() => setRatingDisplay(ratingValue + ".0")}
                    />
                  </label>
                );
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
            onChange={(e) => setReviewerName(e.target.value)}
          ></input>
          <textarea
            rows={4}
            type="text"
            className="comments"
            placeholder="Comments"
            required
            value={reviewerComments}
            onChange={(e) => setReviewerComments(e.target.value)}
          ></textarea>
          <button className="publish-button" type="submit">
            Publish
          </button>
          <button
            className="cancel-button"
            type="submit"
            onClick={(e) => setShowLeaveReviewForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div> //end review container
  );
};

export default ReviewForm;
