import React from 'react';
import ExitSign from './Images/ExitSign.png';
import {UseState} from 'react';
import './DescriptionCom.css'
import movies from './MovieList';

const DescriptionCom = ({title, description, setHandleDescriptionClick}) => {

    // const [reviewInfo, setReviewInfo] = useState({info: "Review"})
  

    return (
      <>
      <div className="description-box">
          <h1 className="title-text">{title}</h1>
          <p className="description-text">{description}</p>
          <img className="sign" src={ExitSign}
           onClick = {()=> setHandleDescriptionClick(false)}/>
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

export default DescriptionCom;