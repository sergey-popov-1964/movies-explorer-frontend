import React from 'react';
import './Promo.css';
import '../../App/App.css';
import NavTab from "../NavTab/NavTab";

function Promo() {

  return (
    <div className="promo">
      <div className="promo__main">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab/>
      </div>
    </div>
  )
}

export default Promo;
