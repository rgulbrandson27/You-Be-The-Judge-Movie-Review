import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import './components/MoviesContainer.css';
import DescriptionCom from './components/DescriptionCom';
import ReviewForm from './components/Reviews/ReviewForm';



function App() {
  return (
    <div>
      < Header />
      {/* < Gavels /> */}


  
      {/* <DescriptionCom/> */}
      {/* <ReviewForm/> */}
      < MoviesContainer />
    </div>
  )
}
export default App;
