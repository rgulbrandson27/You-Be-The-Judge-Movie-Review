import React, {useState} from 'react';
import MovieComponent from './MovieComponent';
import './MovieComponent.css';
import './MoviesContainer.css';
import movies from './MovieList';



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
                        />
                        )
                        ))
                    }
            </div>
                
            {/* <div className="description-box descriptionBackground">
                 <div className="title-box ">
                    <h1 className="title ">Movie Title Goes Here</h1>
                </div>
                <p className="description ">Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.</p> 
            </div> */}


        </div>  

    </div>
)
}
export default MoviesContainer;