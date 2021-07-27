import React from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies() {

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
                currentSection={"saved-movies"}
        />
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList
          isNextButton={false}
          isTypeList={'saved'}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default SavedMovies;
