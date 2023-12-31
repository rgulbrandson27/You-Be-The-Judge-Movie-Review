import React, {useState} from 'react';
import MovieComponent from './MovieComponent';
import './MovieComponent.css';
import './MoviesContainer.css';
import movies from './MovieList';
import ReviewList from './Reviews/ReviewList';

const MoviesContainer = () => {
    return (
    <div>
        <div className="main">
            <div className="movies-container">
                {movies.map((movie => (
                        <MovieComponent
                        id={movie.id}
                        imbd={movie.imbd}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        description={movie.description}
                        poster={movie.poster}
                        link={movie.link}
                        count={ReviewList.length}
                        />
                        )
                    ))
                }
            </div>
        </div>  
    </div>
)
}
export default MoviesContainer;