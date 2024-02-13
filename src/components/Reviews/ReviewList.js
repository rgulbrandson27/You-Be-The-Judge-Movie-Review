import React, { useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const ReviewList = ({ title, reviews, setShowReviewList, average }) => {
  // useEffect(() => {
  //     const fetchReviewData = async () => {
  //       try {
  //     // fetch('https://65a559c852f07a8b4a3eec40.mockapi.io/moviejudge/movies/${movieId}/reviews')

  //     const response = await fetch(`http://localhost:3000/movies/${movieId}`)

  //             if(!response.ok) {
  //                 throw new Error('Network response failed.');
  //             }

  //     const movieReviews = await response.json();
  //     const movieReviewData = movieReviews.reviews || [];

  //     console.log(movieReviewData);
  //     } catch (error) {
  //         console.error('Error in fetching reviews:', error);
  //     }
  //  };

  //     fetchReviewData();
  // }, [movieId, reviews]);

  return (
    <div>
      <div className="review-list">
        <AiFillCloseSquare
          className="exit-icon"
          onClick={(e) => setShowReviewList(false)}
        />
        <div className="exit-icon-background"></div>
        {/* <div className="average-rating-list-display">
          Ave. Rating{reviews.average}
        </div> */}
        <h2 className="review-list-title">{title}</h2>
        {reviews.map((review) => (
          <div className="review-item" key={review.id} reviewid={review.id}>
            <p className="line">__________________________</p>
            <p className="name-rating-row">
              <span className="r-name">{review.reviewerName}</span>
              <span className="r-rating">
                {review.reviewerRating}.0 <span className="lighten">/ 5.0</span>
              </span>
            </p>
            <p>{review.reviewerComments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewList;
