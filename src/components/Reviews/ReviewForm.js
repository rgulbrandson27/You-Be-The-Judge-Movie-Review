import React, {useState} from 'react';
import {Button, Input, FormGroup, Label } from 'react-bootstrap';
import ReviewList from './ReviewList';
import Gavels from './Gavels';
import './ReviewForm.css';

const ReviewForm = ({title, reviewHandleClick}) => {
    const [reviewInfo, setReviewInfo] = useState({info: "Review"});
    const[handleReviewClick, setHandleReviewClick] = useState (false);


    return (
    
        <div className="review-container">
            <div className="extra-div-for-style">
            <h1 className="review-title">{title}</h1>
                <h1 className="your-opinion">What's YOUR Opinion</h1>
            <form className="review-form">
                <div className="rating-box">
                < Gavels className="gavel-box"/>
                </div>
            
                <label htmlFor="name">Name </label>
                    <input type="text" placeholder="Enter Name" className="reviewer-name" id="name"/>
           
                <label>Opinion</label>
                <input type="text" placeholder="Enter Comments" className="reviewer-comment" />
                {/* <DescriptionCom className="description" setHandleClick={setHandleClick} title={title} description={description}></DescriptionCom>   */}
              
                <button className="submit-button" onClick = {()=> setHandleReviewClick(false)}>Publish</button>
                <table>
                   
                </table>
           
            </form>
            </div>
        </div>

    )
}

 /* onClick = {()=> setHandleClick(false)}/> */

export default ReviewForm;