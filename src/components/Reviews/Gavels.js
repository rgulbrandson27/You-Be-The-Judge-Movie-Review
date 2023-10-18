import {useState} from 'react';
import Gavel from '../Images/Gavel-Empty-Final copy.svg';
import './Gavels.css';


const Gavels = () => {
    const [ratingsList, setRatingsList] = useState([7, 3]);
    const [ratingDisplay, setRatingDisplay] = useState("0.0");
    // const [hover, setHover] = useState(false);

    // const gavelStyle = {style: "filter: 'dropShadow (2px, 2px, 2px, black)"};

    // function setStyle(e) =  {
    //     <img className="back-gavel" src={Gavel} style={gavelStyle}/>
    // }
    // '(polygon(0 50%, 60% 70%, 80% 100%, 0 100%)',

    return (
        <>
        <p className="selected-rating">{ratingDisplay}</p>
        <div className="rating-container">
            <p>dissent</p>
                <div className="gavels-container">
                    <input type="radio" id="gavel-1" name="gavel" value="1" ></input>  
                    <label htmlFor="gavel-1"><img className="gavel gavel-1" src={Gavel} 
                        onClick={() => setRatingsList([...ratingsList, 1])}
                        onMouseOver={() => setRatingDisplay("1.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image>

                    <input type="radio" id="gavel-2" name="gavel" value="2" ></input>
                    <label htmlFor="gavel-3"><img className="gavel gavel-2" src={Gavel} 
                        onClick={() => setRatingsList([...ratingsList, 2])}
                        onMouseOver={() => setRatingDisplay("2.0")}/></label>                    
                    <image><img className="back-gavel" src={Gavel}/></image>
                    
                    <input type="radio" id="gavel-3" name="gavel" value="3" ></input>
                    <label htmlFor="gavel-3"><img className="gavel gavel-3" src={Gavel}
                        onClick={() => setRatingsList([...ratingsList, 3])}
                        onMouseOver={() => setRatingDisplay("3.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image>
 
                    <input type="radio" id="gavel-4" name="gavel" value="4" ></input>
                    <label htmlFor="gavel-4"><img className="gavel gavel-4" src={Gavel}
                        onClick={() => setRatingsList([...ratingsList, 4])}
                        onMouseOver={() => setRatingDisplay("4.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image>

                     {/* <div className="gavel-wrap" 
                        onMouseEnter={e => setHover(true)}
                        onMouseLeave={e => setHover(false)}>
               
                         {hover ? <img className="back-gavel" style={gavelStyle} src={Gavel}/> : <img className="back-gavel" src={Gavel}/> */}

                    <input type="radio" id="gavel-5" name="gavel" value="5" ></input>
                    <label htmlFor="gavel-5"><img className="gavel gavel-5" src={Gavel}
                            onClick={() => setRatingsList([...ratingsList, 5])}
                            onMouseOver={() => setRatingDisplay("5.0")}/></label>
                    <image><img className="back-gavel" src={Gavel}/></image>
                    </div>
                
                <p>concur</p>
            </div>
        </>
        );
}

// {handleClick ?  <DescriptionCom className="description" setHandleClick={setHandleClick} title={title} description={description}></DescriptionCom>  
// : <div className="movie">
//     <div className="poster-area"     
//         onMouseEnter = {e => setHandleHover(true)}
//         onMouseLeave = {e => setHandleHover(false)}>      

//         {handleHover ? <img className="poster" style={posterStyle} src={poster}/> : <img className="poster" src={poster}/> 

//         }

export default Gavels;
