import React, { useEffect, useState } from "react";
import "./MovieComponent.css";
import { PiArrowArcLeft, PiCursor, PiGavelFill } from "react-icons/pi";
import Scale from "./Images/Scale.png";
import NewViewWhite from "./Images/NewViewWhite.png";
import DescriptionCom from "./DescriptionCom.js";
import ReviewForm from "./Reviews/ReviewForm.js";
import ReviewList from "./Reviews/ReviewList";

const MovieComponent = ({
  movieId,
  title,
  poster,
  description,
  year,
  rating,
  runtime,
  link,
  reviews: previousReviews,
  updatedMovies,
}) => {
  const [handleDescriptionClick, setHandleDescriptionClick] = useState(false);
  const [handlePosterHover, setHandlePosterHover] = useState(false);
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);
  const [showLeaveReviewForm, setShowLeaveReviewForm] = useState(false);
  const [showReviewList, setShowReviewList] = useState(false);
  const [reviews, setReviews] = useState(previousReviews);

  useEffect(() => {
    //     console.log("Reviews:", reviews);
    //   if (reviews && Array.isArray(reviews) && reviews.length > 0) {
    const totalCount = reviews.length;
    setCount(totalCount);

    // console.log("Total Count", totalCount);
    // const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

    // console.log("Total Rating", totalRating);
    // const totalRating = reviews.reduce((sum, review) => {
    // const reviewRating = reviews.reviewerRating || reviews.rating || 0;
    //     console.log("Review Rating:", reviewRating);
    //   return sum + reviewRating;
    // }, 0);
    // console.log("total Rating:", totalRating);

    // const avgRating = totalCount > 0 ? totalRating / totalCount : 0;
    // console.log(avgRating);

    // setCount(totalCount);
    const ratingsArray = reviews.map((rating) => rating.reviewerRating);
    console.log(ratingsArray);

    const sumOfRatings = ratingsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    const averageRating = (sumOfRatings / totalCount).toFixed(1);

    setAverage(totalCount >= 1 ? averageRating : " __ ");
  }, [reviews]);

  const posterStyle = {
    border: "4px solid rgb(10,147,150)",
    radius: "8px",
    width: "214px",
    height: "300px",
    margin: "-10px",
    marginRight: "-12px",
    z: "20",
  };

  return (
    <>
      {handleDescriptionClick ? (
        <DescriptionCom
          className="description"
          setHandleDescriptionClick={setHandleDescriptionClick}
          title={title}
          description={description}
        ></DescriptionCom>
      ) : (
        <div className="movie">
          <div
            className="poster-area"
            onMouseEnter={(e) => setHandlePosterHover(true)}
            onMouseLeave={(e) => setHandlePosterHover(false)}
          >
            {handlePosterHover ? (
              <img className="poster" style={posterStyle} src={poster} />
            ) : (
              <img className="poster" src={poster} />
            )}
          </div>
          <div className="text-area">
            <h2 className="title">{title}</h2>
            <p className="year">{year}</p>
            <p className="rating">{rating}</p>
            <p className="minutes">{runtime}</p>
            <img
              className="reel"
              src={NewViewWhite}
              onClick={(e) => setHandleDescriptionClick(true)}
            />
            <p className="link">
              <a href={link} target="_blank">
                go to IMBd
              </a>
            </p>
            <div className="review-box"></div>
            <img className="scale" src={Scale} />

            {count > 1 ? (
              <p
                className="count read-reviews"
                onClick={(e) => setShowReviewList(true)}
              >
                {count} Reviews
              </p>
            ) : count > 0 ? (
              <p
                className="count read-reviews"
                onClick={(e) => setShowReviewList(true)}
              >
                {count} Review
              </p>
            ) : (
              <p className="count no-reviews">No Reviews</p>
            )}
            <p className="be-the-first">
              You are hereby ordered to leave your opinion!
              <PiGavelFill className="mini-gavel" />{" "}
              {/* <img className="arrow" src={Arrow} /> */}
            </p>
            <p className="view">View</p>

            <p
              className="review"
              onClick={(e) => {
                if (!showLeaveReviewForm) {
                  setShowLeaveReviewForm(true);
                } else {
                  e.currentTarget.style.cursor = "not-allowed";
                  // console.log("A Review is Already Showing")
                }
              }}
            >
              Leave a Review
            </p>

            <p className="score">{average} / 5.0</p>
            <div />
          </div>

          {showLeaveReviewForm && (
            <ReviewForm
              className="review-pop-up"
              movieId={movieId}
              title={title}
              average={average}
              reviews={reviews}
              count={count}
              showLeaveReviewForm={showLeaveReviewForm}
              setShowLeaveReviewForm={setShowLeaveReviewForm}
              setShowReviewList={setShowReviewList}
              updatedMovies={updatedMovies}
              setReviews={setReviews}
              //   onReviewCreated={(updatedReviews) =>
              // handleReviewCreated(updatedReviews)
              //   }
            />
          )}
          {showReviewList ? (
            <div>
              <p>Show: {showReviewList.toString()}</p>
              <ReviewList
                className="review-list-pop-up"
                movieId={movieId}
                title={title}
                reviews={reviews}
                setShowReviewList={setShowReviewList}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
export default MovieComponent;
