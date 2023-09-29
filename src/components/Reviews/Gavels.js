import {useState, useEffect } from 'react';
import Gavel from '../Images/Gavel-Empty-Final copy.svg';
import GavelDark from '../Images/final-filled-gavel.svg';
import './Gavels.css';
import { ReactDOM } from 'react';

const Gavels = () => {
    const [ratingsList, setRatingsList] = useState([7, 3]);
    const [ratingDisplay, setRatingDisplay] = useState("2.0")
   
    console.log(ratingsList);
    console.log(ratingDisplay);
    
    useEffect(() => {
    console.log("useEffect ran");
    }, [ratingDisplay]);
 
    return (
        <>
            <p className="chosen-rating">{ratingDisplay}</p>
            <div className="rating-container">
                <p>dissent</p>
                    <div className="light-gavels-container">
                        <input type="radio" id="gavel-1" name="gavel" value="1" onClick={() => setRatingsList([...ratingsList, 1])} onMouseOver={() => setRatingDisplay("1.0")}></input>
                        <label htmlFor="gavel-1"><img className="gavel gavel-light gavel-1" src={Gavel}/></label>
                        <input type="radio" id="gavel-3" name="gavel" value="2" onClick={() => setRatingsList([...ratingsList, 2])}></input>
                        <label htmlFor="gavel-3"><img className="gavel gavel-light gavel-3" src={Gavel}/></label>
                        <input type="radio" id="gavel-5" name="gavel" value="3" onClick={() => setRatingsList([...ratingsList, 3])}></input>
                        <label htmlFor="gavel-5"><img className="gavel gavel-light gavel-5" src={Gavel}/></label>
                        <input type="radio" id="gavel-7" name="gavel" value="4" onClick={() => setRatingsList([...ratingsList, 4])}></input>
                        <label htmlFor="gavel-7"><img className="gavel gavel-light gavel-7" src={Gavel}/></label>
                        <input type="radio" id="gavel-9" name="gavel" value="5" onClick={() => setRatingsList([...ratingsList, 5])}></input>
                        <label htmlFor="gavel-9"><img className="gavel gavel-light gavel-9" src={Gavel}/></label>
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
}

export default Gavels;
