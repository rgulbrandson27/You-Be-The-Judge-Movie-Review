import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import "./components/MoviesContainer.css";
import DescriptionCom from "./components/DescriptionCom";
import ReviewForm from "./components/Reviews/ReviewForm";
import Gavels from "./components/Reviews/Gavels";
import ReviewList from "./components/Reviews/ReviewList";

function App() {
  return (
    <div>
      <Header />

      {/* <ReviewList /> */}

      <MoviesContainer />
    </div>
  );
}
export default App;
