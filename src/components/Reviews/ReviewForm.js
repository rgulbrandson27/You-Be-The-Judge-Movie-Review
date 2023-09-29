import React, {useState} from 'react';
import {Button, Input, FormGroup, Label } from 'react-bootstrap';
import ReviewList from './ReviewList';
import Gavels from './Gavels';
import './ReviewForm.css';

const ReviewForm = ({title}) => {
    const [reviewInfo, setReviewInfo] = useState({info: "Review"})

    return (
    
        <div className="review-container">
            <div className="extra-div-for-style">
            <h1 className="review-title">title here{title}</h1>
                <h1>What's YOUR Opinion</h1>
            <form className="review-form">
                <div className="rating-box">
                < Gavels className="gavel-box"/>
                </div>
                <label>Name
                    <input type="text" placeholder="enter name" className="reviewComment" />
                    </label>
                <label>Opinion</label>
                <input type="text" placeholder="enter comments" className="reviewComment" />
                <button className="submit-review" >Publish</button>
                <table>
                   
                </table>
                <input type="text" placeholder="dd" />
            </form>
            </div>
        </div>

    )
}

 /* onClick = {()=> setHandleClick(false)}/> */

export default ReviewForm;