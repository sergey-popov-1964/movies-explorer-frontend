import React, {useState} from 'react';
import './FilterCheckbox.css';
import "../../App/App.css"
import '../Movies.css';

function FilterCheckbox({onCheck}) {

  const [isChecked, setIsChecked] = useState(false);

  function handlerChecked(e) {
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      onCheck(false)
    } else {
      onCheck(true)
    }
  }

  return (
    <div className="block movies__check">
      <div className="check">
        <label htmlFor="short-films"
               className="check__label">
          <input type="checkbox"
                 checked={isChecked}
                 onChange={handlerChecked}
                 id="short-films"
                 value="short-films"
                 className="check__input"/>
          <span className="check__pseudo-item check__pseudo-item_type_checkbox"></span>
          <span className="check__label-text">Короткометражки</span>
        </label>
      </div>
    </div>
  )
}

export default FilterCheckbox;
