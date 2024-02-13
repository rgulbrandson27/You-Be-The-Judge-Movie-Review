import React, { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";
import "./MoviesContainer.css";
import ReviewForm from "./Reviews/ReviewForm.js";
import movieList from "./MovieList.js";

const MoviesContainer = () => {
  const [movies, setMovies] = useState(movieList);
  const [reviewFormShowing, setReviewFormShowing] = useState(false); //refers to ANY showing as opposed to just the on tied to ind. component
  const [reviewListShowing, setReviewListShowing] = useState(false);

  const updatedMovies = (updatedMoviesList) => {
    setMovies(updatedMoviesList);
  };

  //  Code for fetching movies when using db.json file
  // useEffect(() => {
  //   fetch("https://65a559c852f07a8b4a3eec40.mockapi.io/moviejudge/movies");
  //   fetch("http://localhost:3000/movies")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setMovies(data);
  //     });
  // }, []);

  //  Code for using local storage
  // useEffect(() => {
  //     const localMovies = JSON.parse(localStorage.getItem('movies')) || [];
  //     setMovies(localMovies);
  // }, []);

  //   const handleReviewCreated = (updatedReviews, movieId) => {
  //     const updatedMovies = movies.map((movie) =>
  //       movie.id === movieId ? { ...movie, reviews: updatedReviews } : movie
  //     );
  //     setMovies(updatedMovies);
  //   };

  return (
    <div>
      <div className="main">
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieComponent
              key={movie.id}
              movieId={movie.id}
              imbd={movie.imbd}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              runtime={movie.runtime}
              description={movie.description}
              poster={movie.poster}
              link={movie.link}
              reviews={movie.reviews}
              updatedMovies={updatedMovies}
              movies={movies}
            />
            //   onReviewCreated={(updatedReviews) =>
            //     handleReviewCreated(updatedReviews, movie.id)
          ))}
        </div>
        {/* <div className="display-holder">
                <ReviewForm className="duplicate" title={title} />
            </div> */}
      </div>
    </div>
  );
};
export default MoviesContainer;
