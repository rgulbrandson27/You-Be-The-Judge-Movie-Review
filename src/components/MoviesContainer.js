import React, {useEffect, useState} from 'react';
import MovieComponent from './MovieComponent';
import './MovieComponent.css';
import './MoviesContainer.css';
import movies from './MovieList';
import ReviewList from './Reviews/ReviewList';


// const url = "https://65a559c852f07a8b4a3eec40.mockapi.io/movies/reviews"



const MoviesContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://65a559c852f07a8b4a3eec40.mockapi.io/movies/reviews");
    //             const data = await response.json();
    //             setMovies(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //         };
    //     fetchData();
    // }, []);

        fetch('https://65a559c852f07a8b4a3eec40.mockapi.io/movies/reviews')
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
                        key={movie.id}
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
        </div>  
    </div>
);
};
export default MoviesContainer;