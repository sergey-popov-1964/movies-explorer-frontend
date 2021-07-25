import React from 'react';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {

  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  console.log(scrollHeight)

  let scrollWidth = document.documentElement.clientWidth;

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
        />
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList/>

        <div className="movies__further">
        <button type="button" className="movies__button">Еще</button>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Movies;
