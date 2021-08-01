import React, {useEffect, useState} from 'react';
import './SearchForm.css';
import '../../App/App.css';
import '../Movies.css';
import magnifier from "../../../images/magnifier.svg";

function SearchForm({onSubmit, onShowList, onSetMessage}) {

  useEffect(() => {
    onShowList(false)
  }, [])
  const [filmValue, setFilmValue] = useState('');

  function handleChangeName(e) {
    setFilmValue(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit(filmValue)
    if (filmValue === "") {
      onShowList(false)
      onSetMessage('Введите данные в строку поиска')
    } else {
      onShowList(true)
      onSetMessage('Ничего не найдено')
    }
    setFilmValue('')
  }

  return (
    <div className="block movies__search">
      <form action="#">
        <div className="search__form">
          <img src={magnifier} className="search__icon" alt="Иконка лупа"/>
          <input type="text"
                 className="search__input"
                 value={filmValue}
                 onChange={handleChangeName}
                 name="film"
                 placeholder="фильм"
                 minLength="2"
                 maxLength="100" required/>
          <button type="submit"
                  onClick={handlerSubmit}
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
