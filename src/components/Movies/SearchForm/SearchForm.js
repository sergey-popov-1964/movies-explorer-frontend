import React from 'react';
import './SearchForm.css';
import '../../App/App.css';
import '../Movies.css';
import magnifier from "../../../images/magnifier.svg";

function SearchForm() {

  return (
    <div className="block movies__search">
      <form action="#">
        <div className="search__form">
          <img src={magnifier} className="search__icon" alt="Иконка лупа"/>
          <input type="text"
                 className="search__input"
                 name="film"
                 placeholder="фильм"
                 minLength="2"
                 maxLength="100" required/>
          <button type="submit"
                  aria-label="find"
                  className="search__button"
                  name="form_submit">
          </button>
        </div>

      </form>
    </div>
  )
}

export default SearchForm;
