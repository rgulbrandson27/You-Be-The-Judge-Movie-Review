import React, {useEffect, useState} from 'react';
import MovieComponent from './MovieComponent';
import './MoviesContainer.css';
import ReviewForm from './Reviews/ReviewForm.js';

const MoviesContainer = ({title}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        // fetch('https://65a559c852f07a8b4a3eec40.mockapi.io/moviejudge/movies')
        fetch('http://localhost:3000/movies')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data);
            });
        }, []);

    return (
    <div>
        <div className="main">
            <div className="movies-container">
                {movies.map((movie) => (
                        <MovieComponent
                        key={movie.movieId}
                        movieId={movie.movieId}
                        imbd={movie.imbd}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        description={movie.description}
                        poster={movie.poster}
                        link={movie.link}
                        reviews={movie.reviews}
                        />
                        )
                    )
                }
            </div>
            {/* <div className="display-holder">
                <ReviewForm className="duplicate" title={title} />
            </div> */}
        </div>  
    </div>
);
};
export default MoviesContainer;