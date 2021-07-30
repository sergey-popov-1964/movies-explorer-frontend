import React, {useState} from 'react';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {

  const [isShortFilms, setIsShortFilms] = useState(false);
  // console.log("isShortFilms_1", isShortFilms)

  function handleShortFilms(data) {
    setIsShortFilms(!data)
    // console.log("isShortFilms", isShortFilms)
  }

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
                currentSection={"movies"}
        />
        <SearchForm/>
        <FilterCheckbox
          onCheck = {handleShortFilms}
        />
        <MoviesCardList
          isNextButton={true}
          isTypeList={'movies'}
          isShortFilms = {isShortFilms}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default Movies;
