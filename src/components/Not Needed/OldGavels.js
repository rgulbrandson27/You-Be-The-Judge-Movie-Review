import {useState} from 'react';
import Gavel from '../Images/Gavel-Empty-Final copy.svg';
import './OldGavels.css';

const Gavels = () => {
    // const [ratingsList, setRatingsList] = useState([7, 3]);
    const [rating, setRating] = useState(null);
    const [ratingDisplay, setRatingDisplay] = useState("0.0");
    const [chosenRatingDisplay, setChosenRatingDisplay] = useState(null);

    const [ratingChosen, setRatingChosen] = useState(false);
    // const [gavelClick, setGavelClick] = useState(false);

    // const gaveClick = true;

    return (
        <>
        {/* {ratingChosen ? <p className="chosen-rating">{chosenRatingDisplay}</p> 
        : <p className="hover-rating">{ratingDisplay}</p>} */}
        <div className="gavels-box">
            <p>dissent</p>
                <div className="gavels-container">
                    <input type="radio" id="gavel-1" name="gavel" value="1" ></input>  
                    <label htmlFor="gavel-1"><img className="gavel gavel-1" src={Gavel} 
                    // onClick={() => setRatingsList([...ratingsList, 1])}
                    // onClick={() => setRating(1) && setChosenRatingDisplay("5.0")O}
                    // {...console.log(chosenRatingDisplay)}
                    onMouseEnter={() => setRatingDisplay("1.0")}
                    onMouseOut={() => setRatingDisplay("0.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image>
                    {ratingDisplay === "1.0" && <image><img className="back-gavel-filled" src={Gavel}/></image> }  
      
                    <input type="radio" id="gavel-2" name="gavel" value="2" ></input>
                    <label htmlFor="gavel-2"><img className="gavel gavel-2" src={Gavel} 
                        // onClick={() => setRatingsList([...ratingsList, 2])}
                        onMouseOver={() => setRatingDisplay("2.0")}
                        onMouseOut={() => setRatingDisplay("0.0")}/></label>
                        <image><img className="back-gavel" src={Gavel}/></image>
                        {ratingDisplay === "2.0" && <image><img className="back-gavel-filled" src={Gavel}/></image> }                   
                
                    
                    <input type="radio" id="gavel-3" name="gavel" value="3" ></input>
                    <label htmlFor="gavel-3"><img className="gavel gavel-3" src={Gavel}
                        // onClick={() => setRatingsList([...ratingsList, 3])}
                        onMouseOver={() => setRatingDisplay("3.0")}
                        onMouseOut={() => setRatingDisplay("0.0")}/></label>
                        <image><img className="back-gavel" src={Gavel}/></image>
                        {ratingDisplay === "3.0" && <image><img className="back-gavel-filled" src={Gavel}/></image> }
 
                    <input type="radio" id="gavel-4" name="gavel" value="4" ></input>
                    <label htmlFor="gavel-4"><img className="gavel gavel-4" src={Gavel}
                        // onClick={() => setRatingsList([...ratingsList, 4])}
                        onMouseOver={() => setRatingDisplay("4.0")}
                        onMouseOut={() => setRatingDisplay("0.0")}/></label>
                        <image><img className="back-gavel" src={Gavel}/></image>
                        {ratingDisplay === "4.0" && <image><img className="back-gavel-filled" src={Gavel}/></image> }

                    <input type="radio" id="gavel-5" name="gavel" value="5" ></input>
                    <label htmlFor="gavel-5"><img className="gavel gavel-5" src={Gavel}
                            // onClick={() => setRatingsList([...ratingsList, 5])}
                            onMouseOver={() => setRatingDisplay("5.0")}
                            onMouseOut={() => setRatingDisplay("0.0")}/></label>
                        <image><img className="back-gavel" src={Gavel}/></image>
                        {ratingDisplay === "5.0" && <image><img className="back-gavel-filled" src={Gavel}/></image> }
                    </div>
                <p>concur</p>
            </div>
        </>
        );
}

export default OldGavels;
