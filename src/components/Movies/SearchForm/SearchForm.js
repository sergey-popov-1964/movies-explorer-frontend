import React from 'react';
import './SearchForm.css';
import '../../App/App.css';
import magnifier from "../../../images/magnifier.svg";
import find from "../../../images/find.svg";

function SearchForm() {


  return (
    <div className="block search">
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

        <div className="check">
          <label for="short-films" className="form__label form__label_direction_right">
            <input type="checkbox" name="extra-option" id="short-films" value="short-films"
                   className="form__item form__item_el_extra-options"/>
            <span className="form__pseudo-item form__pseudo-item_type_checkbox"></span>
            <span className="form__label-text">Короткометражки</span>
          </label>
        </div>


      </form>
    </div>
  )
}


export default SearchForm;
