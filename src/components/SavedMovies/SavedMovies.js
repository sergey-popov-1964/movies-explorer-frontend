import React from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";

function SavedMovies() {


    return (

      <div className="page">
        <div className="block">
          <Header isFilms = {true}
                  isLogin = {false}
                  isAccount = {true}
          />
          <h1>SavedMovies</h1>
          <Footer/>
        </div>
      </div>
    )
}

export default SavedMovies;
