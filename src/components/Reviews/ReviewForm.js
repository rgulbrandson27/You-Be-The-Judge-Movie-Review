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
            <h1 className="review-title">{title}</h1>
            <h1 className="your-opinion">What's YOUR Opinion?</h1>
            < Gavels/>

            <form className="review-form">
     
                <input type="text" placeholder="Name" className="name" id="name"></input>
          
                    <textArea rows={3}  placeholder="Comments" className="comments" />
                <button className="publish-button" onClick = {()=> setHandleReviewClick(false)}>Publish</button>
            </form>
            < ReviewList className="reviewer-comment-box"/>
        </div>
    )
}

 /* onClick = {()=> setHandleClick(false)}/> */

export default ReviewForm;