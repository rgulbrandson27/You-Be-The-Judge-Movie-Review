import {useState} from 'react'
import {PiGavelFill} from 'react-icons/pi';
import './Gavels.css';

const Gavels = ({onRatingSelection}) => {

    const [rating, setRating] = useState("");    
    const [ratingDisplay, setratingDisplay] = useState("");


    //PREVIOUSLY USED TO GET CHILD PROP TO PARENT THROUGHA A PARENT FUNCTION
    // - ABANDONED AND COMBINED TO ONE COMPONENT

    // const handleGavelsClick = (chosenValue) => {
    //     // const chosenValue = e.target.value;
    //     onRatingSelection(chosenValue);
    //     setRating(chosenValue);
   
    // }

    return (
        <div>
            <p className="ratingDisplay">{ratingDisplay}</p>
            {/* <p className="selectedRatingDisplay">{selectedRatingDisplay}</p> */}

            <div className="gavels-box">
                <p className="dissent">dissent</p>
                
                <div className="gavels-row">
                    {[...Array(5)].map((gavel, i) => {
                    const ratingValue = i + 1;
                    // const chosenRatingValue = i + 1;

                    return (
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                // onClick={() => handleGavelsClick(ratingValue)}
                                    // setRating(ratingValue) }
                            />
                            <PiGavelFill 
                                className="gavel" 
                                color={ratingValue <= (ratingDisplay || rating) ? "white" : "gray"} 
                                size={30} 
                                onMouseEnter={() => setratingDisplay(ratingValue + ".0")}
                            />
                        </label>
                        )
                    })}
                </div> 
                <p className="concur">concur</p>
            </div>
        </div>
        )
    }

export default Gavels;