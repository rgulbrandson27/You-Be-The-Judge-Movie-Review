
    
    // function handleReviewClick(e) {
    //     if (handleReviewClick === true) {
    //         <ReviewForm className="review-form" setHandleReviewClick={setHandleReviewClick} title={title}></ReviewForm>
    //     }

    // function handleReviewClick() {
    //  <ReviewForm className="reviewFormShow" title={title} ></ReviewForm>
    // }
//     const MovieComponent = ({ title, poster, description, year, rating, runtime, link, count, average, reviews}) => {

//     const[handleClick, setHandleClick] = useState(false);
//     const[handleHover, setHandleHover] = useState(false);
//     const[handleReviewClick, setHandleReviewClick] = useState (false);
//     const posterStyle = {border: "4px solid rgb(10,147,150)", radius:"8px", width: "214px", height: "300px", margin:"-10px", marginRight:"-12px", z:"20"};
// // count=1;
//     // function handleReviewClick(e) {
//     //     if (handleReviewClick === true) {
//     //         <ReviewForm className="review-form" setHandleReviewClick={setHandleReviewClick} title={title}></ReviewForm>
//     //     }

//     // function handleReviewClick() {
//     //  <ReviewForm className="reviewFormShow" title={title} ></ReviewForm>
//     // }
// count=1;

//     return (
//         <>
//             {handleClick ?  <DescriptionCom className="description" setHandleClick={setHandleClick} title={title} description={description}></DescriptionCom>  
//             : <div className="movie">
//                 <div className="poster-area"     
//                     onMouseEnter = {e => setHandleHover(true)}
//                     onMouseLeave = {e => setHandleHover(false)}>      

//                     {handleHover ? <img className="poster" style={posterStyle} src={poster}/> : <img className="poster" src={poster}/> 
    
//                     }
//                 </div>   
//                 <div className="text-area">
//                     <h2 className="title">{title}</h2>
//                     <p className="year">{year}</p>
//                     <p className="rating">{rating}</p>
//                     <p className="minutes">{runtime}</p>   
//                     <img className="reel" src={NewViewWhite}
//                         onClick = {e => setHandleClick(true)}/>
//                     <p className="link">    
//                         <a href={link} target="_blank">go to IMBd</a>
//                     </p>                 
//                     <div className="review-box"></div>
//                     {{count} === 1 ? <p className="count" >{count} Review</p> : <p className="count" >{count} Reviews</p>}
//                         <img className="scale" src={Scale}/>
                        
//                         <p className="leave-review"  
//                             onClick = {e => setHandleReviewClick(true)}>Leave a Review</p>
// {/*                         
//                         <div className="view-reviews">
//                             {{count} === 1 
//                             ? <p className="view-reviews"> {count} Reviewzz</p> 
//                             : 
//                             <p>{count} Redsv</p>
//                             }
//                         </div> */}
//                         {/* <div className="view-reviews">
//                             {
//                             {count} === 0 ? 
//                                 <p className="no-reviews">There are no reviews for this movie</p>
//                                 :
//                                 <p className="at-least-one-review">
//                             {{count} === 1 ? 
//                                 <ul className="view-reviews">
//                                     <li className="read-reviews">Read Review</li>
//                                     <li className="count">{count} Review</li>
//                                 </ul>
//                                 :
//                                 <ul className="view-reviews">
//                                     <li className="read-reviews">Read Reviews</li>
//                                     <li className="count">{count} Reviews</li>
//                                 </ul>
//                             }
//                         </div> */}
                    
//                         <p className="score">{average} / 5.0 </p>
//                         {/* <p className="ave">average</p> */}
                    
                    
//                 </div>
//             </div>
//     }
//          {handleReviewClick && <ReviewForm className="review-pop-up" title={title}>   </ReviewForm>}
//         </>
//         );
//     }
     
// export default MovieComponent;



