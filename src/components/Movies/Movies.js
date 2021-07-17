import React from 'react';
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function Movies() {

  return (
    <div className="movies">
      <Header/>
      <FilterCheckbox/>
      <Footer/>
    </div>
  )
}

export default Movies;
