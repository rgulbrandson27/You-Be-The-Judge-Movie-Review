import {useState } from 'react';
// import Gavel from '../Images/Gavel-Light.png';
import Gavel from '../Images/Gavel-Empty-Final copy.svg';
import GavelDark from '../Images/final-filled-gavel.svg';


import './Gavels.css';

const Gavels = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)

    // let ratingGavel = {.gavel-light}
    // gavel.addEventListener("click", function()) {

    // }

    return (
        <>
            <p className="chosen-rating">5.0</p>
            <div className="rating-container">
                <p>dissent</p>
                    <div className="light-gavels-container">
                        <img className="gavel gavel-light gavel-1" src={Gavel}/>
                        <img className="gavel gavel-light gavel-3" src={Gavel}/>
                        <img className="gavel gavel-light gavel-5" src={Gavel}/>
                        <img className="gavel gavel-light gavel-7" src={Gavel}/>
                        <img className="gavel gavel-light gavel-9" src={Gavel}/>
                    </div>
              
                    <div className="dark-gavels-container">
                        <img className="gavel gavel-dark gavel-2" src={GavelDark}/>
                        <img className="gavel gavel-dark gavel-4" src={GavelDark}/>
                        <img className="gavel gavel-dark gavel-6" src={GavelDark}/>
                        <img className="gavel gavel-dark gavel-8" src={GavelDark}/>                           
                        <img className="gavel gavel-dark gavel-10" src={GavelDark}/>                          
                    </div>
                <p>concur</p>
            </div>
        </>
        );
        };


        //         const currentRating = index + 1;
        //         return (
        //             <label>
        //                 <input
        //                     type="radio"
        //                     name="rating"
        //                     value={currentRating}
        //                     onClick={() => setRating(currentRating)}
        //                 />
        //                 color={currentRating => (hover || rating) ? "#ffc107" : "#e4e5e9"}
        //                 onMouseEnter={() => setHover(currentRating)}
        //                 onMouseLeave={() => setHover(null)}
        //                 />

        //             </label>
      
    


export default Gavels;
