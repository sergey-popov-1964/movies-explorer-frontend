import React from 'react';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
        />
        <SearchForm/>
        {/*<FilterCheckbox/>*/}

        <Footer/>
      </div>
    </div>
  )
}

export default Movies;
