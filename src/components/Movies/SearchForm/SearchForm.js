import React from 'react';
import './SearchForm.css';
import '../../App/App.css';
import '../Movies.css';
import magnifier from "../../../images/magnifier.svg";
import find from "../../../images/find.svg";

function SearchForm() {

  return (
    <div className="block movies__search">
      <form action="#">
        <div className="search__form">
          <img src={magnifier} className="search__icon" alt=""/>
          <input type="text"
            // value={loginState.password}
            // onChange={handleChange}
                 className="search__input"
                 name="film"
                 placeholder="Ввести наименование фильма"
                 minLength="2"
                 maxLength="100" required/>
          {/*<img src={magnifier} className="search__icon" alt=""/>*/}
          <button type="submit"
                  aria-label="find"
                  className="search__button"
                  name="form_submit">
          </button>
        </div>

        {/*<div className="check">*/}
        {/*  <label for="short-films"*/}
        {/*         className="check__label">*/}
        {/*    <input type="checkbox"*/}
        {/*           id="short-films"*/}
        {/*           value="short-films"*/}
        {/*           className="check__input"/>*/}
        {/*    <span className="check__pseudo-item check__pseudo-item_type_checkbox"></span>*/}
        {/*    <span className="check__label-text">Короткометражки</span>*/}
        {/*  </label>*/}
        {/*</div>*/}


      </form>
    </div>
  )
}


export default SearchForm;
