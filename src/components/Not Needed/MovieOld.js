import React, {useState} from 'react';
import { Card, Container, Row, Col, Nav, Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css'
import MovieList from '../MovieList.js';
import SamplePoster from './Images/SamplePoster.png';


//       {availMovies.map((movie, index) => (
//         <Movie
//           key={index}
//           imbd={movie.imbd}
//           title={movie.title}
//           year={movie.year}
//           rating={movie.rating}
//           runtime={movie.runtime}
//           description={movie.description}
//           poster={movie.poster}
//           link={movie.link}
//       },

const Movie = () => {
   return (
        <Row xs={1} md={2} xl={3} className="m-3 p-3 g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Row>
                  <Col xs={4} id="poster-column">
                    <Card.Img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg"/>
                  </Col>
                  <Col xs={8} id="text-column">
                    <Card.Body>
                  <Card.Title><h2>My Cousin Vinny</h2></Card.Title>
                    <h5>1992</h5> <h5>PG-13</h5>  <h5>121 min.</h5>
                  <Card.Text>
                  Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.
                  </Card.Text>
                  <h6>imbd link</h6>
                </Card.Body>
                </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )
  }
  



  //     <Container fluid>
  //       <Row sm={1} md={2} xl={3}>
      
  //     <Card className ="movieCard m-2" border='success' backGround='Secondary' text='light'>
      
  //     <Card.Header id="header" className="p-0 m-0 pt-2 center">
  //     <Row id="tabRow" className="p-0 m-0 center">
  //       <Nav justify variant="tabs" id="tabLine" className="p-0 m-0 center" defaultActiveKey="#first"> 
  //       <Col xs={6} className="ps-3 pe-2 m-0">
  //         <Nav.Item id="tab1">
  //           <Nav.Link id="link1" className="mt-1" href="#first">Movie Info</Nav.Link>
  //         </Nav.Item>
  //         </Col>
  //         <Col xs={6} className="ps-3 pe-2 m-0">
  //         <Nav.Item id="tab2">
  //           <Nav.Link  id="link2" className="mt-1" href="#link"> <Badge bg="secondary">9</Badge>Reviews<Badge bg="secondary">4.5</Badge></Nav.Link> 
           
  //         </Nav.Item>
  //       </Col>
  //        </Nav>      
  //        </Col>
  //           </Row>
  //      </Card.Header>

  //      <Card.Body className="p-0 m-0">
  //      <row id="bodyRow" p-0 m-0>
  //         <Col xs={5} id="col5" p-0 m-0>
  //               <Card.Img className="poster" variant="start" src={SamplePoster}></Card.Img>
  //         </Col>
  //         <Col xs={7} id="col7">
  //         <Card.Title>Special title treatment</Card.Title>
  //         <Card.Text>
  //           With supporting text below as a natural lead-in to additional content.
  //         </Card.Text>
  //         </Col>
  //         </row>
  //      </Card.Body>
  //   </Card>

  //    </Row>
  //    </Container>
  //  )
  // }




//     <Col sm={12} md={6} xl={4} className="p-2">
//       <Card className ="movieCard m-2" border='success' backGround='Secondary' text='light' >
//       <Card.Header>
//         <Nav justify variant="tabs" defaultActiveKey="#first">
//           <Nav.Item>
//             <Nav.Link href="#first">Card 2</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#disabled" disabled>
//               Disabled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text> */}
    
//       </Card.Body>
//     </Card>
//     </Col>
//     <Col sm={12} md={6} xl={4} className="p-2">
//       <Card className="movieCard m-2" border='success' backGround='Secondary' text='light' >
//       <Card.Header>
//         <Nav variant="tabs" defaultActiveKey="#first">
//           <Nav.Item>
//             <Nav.Link href="#first">Card 3</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#disabled" disabled> */
//              Disabled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
  
//       </Card.Body>
//     </Card>
//     </Col> */}

//     {/* <Col sm={12} md={6} lg={4}></Col>
//     <Card border='success' backGround='Secondary' text='light' className="m-3">
//       <Card.Header>
//         <Nav variant="tabs" defaultActiveKey="#first">
//           <Nav.Item>
//             <Nav.Link href="#first">Active</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#disabled" disabled>
//               Disabled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card> */}





/* <div className="grid-container" id="main-section">
          <div className="item" id="movie-card-1">
          </div>

          <div className="item" id="movie-card-2">
          </div>

          <div className="item" id="movie-card-3">
          </div>

          <div className="grid-item" id="movie-card-4">
          </div>

      
      </div>


);
} */




    // <Container>
   
    //  <Row className="g-5 p-5" sm={1} md={2} lg={3}>
    //   {Array.from({ length: 10 }).map((_, idx) => (
    //     <Col key={idx}>
    //       <Card>
    //       <Card.Img className="poster" variant="start" src={SamplePoster}></Card.Img>
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>

    // </Container>
export default Movie;