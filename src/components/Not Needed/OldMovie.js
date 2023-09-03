import React from "react";
import { Card, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css'
import SamplePoster from './Images/SamplePoster.png';


        // <div className="card mb-4 bg-dark text-light p-3">
        //   <div className="card-body">
        //     <div className="row">
        //       <div className="col-6">
        //         <img
        //           src={this.props.image}
        //           alt="movie poster"
              //     className="mb-5 img-thumbnail"
              //   />
              // </div>
              // <div className="col-6">
              //   <h2 className="mb-5">{this.props.name}</h2>
              //   <p className="mb-4">Description: {this.props.description}</p>
              //   <p className="mb-2 border-bottom">
              //     Release Date: {this.props.dateReleased}
              //   </p>
              //   <p className="mb-2 border-bottom">
              //     Genre(s): {this.props.genre}
              //   </p>
              //   <p className="mb-2 border-bottom">
              //     Rating: {this.props.ageRating}
              //   </p>
              //   <br />

// const Movie = () => {
//     return (

//       <Container className = "container-fluid">
//         <row className = "row">
//           <col className = "col-1"></col>
          
//         <Card className = "movieCard"></Card>
       

//         <col className = "col-1"></col>
//         </row>
//       </Container>
//     )}


  
     
 
    //       <Card className = "movieCard m-0 p-0">
    //           <Card.Header className = "navBar m-0 p-0">
    //             <Nav className = "navTab" variant="tabs" defaultActiveKey="/home">
    //               <Nav.Item className = "movieTab">
    //                 <Nav.Link href="#first">Info</Nav.Link>
    //               </Nav.Item>
    //               <Nav.Item className="reviewTab">
    //                 <Nav.Link href="#link">Reviews</Nav.Link>
    //               </Nav.Item>
    //             </Nav>
    //           </Card.Header>

    //           <Card.Body>
    //             <Row>
    //               <Col class="col-5 m-0 p-0">
    //                 <Card.Img className="poster" variant="start" src={SamplePoster}/>
    //               </Col>
    //               <Col class="col-7 m-0 p-0">
    //                 <Card.Title className="movieTitle">Movie Title Goes Here</Card.Title>
    //                 <Card.Subtitle>Year</Card.Subtitle>
    //               </Col>
    //             </Row>
    //           </Card.Body>
    //        </Card> */}
       
    
  
    // 


export default OldMovie;

<div className="movie-sample">
            <div className="poster-area">
                <img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg"/>
            </div>       
            <div className="text-area">
                <h2 className="title">My Cousin Vinny</h2>
                <img className="reel" src={MovieReel}/>
                <p className="description">Description</p>
                  <p className="year"  >1997</p>
                  <p className="rating">PG-13</p>
                 <p className="minutes">120 min.</p>                    
                <p className="link">imbdlink</p>
            <div className="review-box">
           
                <img className="scale" src={Scale}/>
                <p className="count">5 Reviews</p>
                <p className="review">Leave a Review</p>
                <p className="score">4.5 / 5.0</p>
            </div>
        </div> */}



 
        /* <div className="movie-sample">
            <div className="poster-area">
                <img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg"/>
            </div>       
            <div className="text-area">
                <h2 className="title">My Cousin Vinny</h2>
                <img className="reel" src={MovieReel}/>
                <p className="description">Description</p>
                  <p className="year"  >1997</p>
                  <p className="rating">PG-13</p>
                 <p className="minutes">120 min.</p>                    
                <p className="link">imbdlink</p>
            <div className="review-box">
           
                <img className="scale" src={Scale}/>
                <p className="count">5 Reviews</p>
                <p className="review">Leave a Review</p>
                <p className="score">4.5 / 5.0</p>
            </div>
        </div> */ 



{/* 

         <div className="movie">
            <div className="poster-area">
                <img className="poster" src="{poster}"/>
            </div>   

            <div className="text-area">
                <h2 className="title">{title}</h2>
                <img className="reel" src={MovieReel}/>
                <p className="description">{description}</p>
                <p className="year">{year}</p>
                <p className="rating">{rating}</p>
                <p className="minutes">{runtime}</p>                    
                <p className="link">{imbd}</p>
                    <div className="review-box"></div>
                        <img className="scale" src={Scale}/>
                        <p className="count">{count} Reviews</p>
                        <p className="review">Leave a Review</p>
                        <p className="score">{average} / 5.0</p>
                    <div/>
            </div>

        </div>
        
     
          );




          <div className="movie-sample">
                <div className="poster-area">
                    <img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg"/>
                </div>       
                <div className="text-area">
                    <h2 className="title">My Cousin Vinny</h2>
                    <img className="reel" src={MovieReel}/>
                    <p className="description">Description</p>
                    <p className="year"  >1997</p>
                    <p className="rating">PG-13</p>
                    <p className="minutes">120 min.</p>                    
                    <p className="link">imbdlink</p>

                    <div className="review-box">
           
                        <img className="scale" src={Scale}/>
                        <p className="count">5 Reviews</p>
                        <p className="review">Leave a Review</p>
                        <p className="score">4.5 / 5.0</p>
                    </div>
                </div> 
            </div>