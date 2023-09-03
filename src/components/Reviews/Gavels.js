import {useState } from 'react';
import Gavel from '../Images/Gavel-Light.png';
import GavelSolid from '../Images/gavel-solid.svg';
import GavelDark from '../Images/Gavel-Dark.png';

import './Gavels.css';

const Gavels = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)

    return (
        <div>
            <div className="gavels-container">
                <img className="gavel-light gavel-1" src={Gavel}/>
                <img className="gavel-light gavel-2" src={Gavel}/>
                <img className="gavel-light gavel-3" src={Gavel}/>
                <img className="gavel-light gavel-4" src={Gavel}/>
                <img className="gavel-light gavel-5" src={Gavel}/>
            </div>
        </div>
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
        //         );
        //     <p>Your rating is {rating}</p>
        // </div>
    


export default Gavels;
