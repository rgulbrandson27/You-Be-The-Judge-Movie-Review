import React, {useState} from 'react';
import './ReviewList.css';
import {movies,} from '../MovieList';

const ReviewList = ({title, reviews}) => {

return(
    <div>
        <h2>{title}</h2>
        <div className="review-list">
        <h2 className="review-list-title">{title}</h2>
                {reviews.map((review) => (
                    <div className="review-item" key={review.reviewId}>
                        <p className="name-rating-row">
                        <span className="r-name">{review.reviewerName}</span>
                        <span className="r-rating">{review.reviewerRating}</span>
                        </p>
                        <p>{review.reviewerComments}</p>
                        <p className="line">_____________________________</p>
                    </div>      
                ))}
        </div>
    </div>
)
}
export default ReviewList;