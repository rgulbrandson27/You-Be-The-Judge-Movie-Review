import React from 'react';
import Ticket from './Images/Ticket.png';
import {UseState} from 'react';
import './DescriptionCom.css'


const Description = ({title, description}) => {
    // const [reviewInfo, setReviewInfo] = useState({info: "Review"})


    return (
      <>
      <div className="description-box">
          <h1 className="title-text">{title}</h1>
          <p className="description-text">{description}</p>
          <img className="ticket" src={Ticket}/>
      </div>
      </>
    )

  // return (
  //   <div className="description-box descriptionBackground">
  //       <div className="title-box ">
  //           <h1 className="description-title ">{title}</h1>
  //       </div>
  //       <p className="description-area" >{description}</p> 
  //       <img className="ticket-button" src={Ticket}/>
        
  //   </div>
  // )
}

export default Description;