import React from 'react';
import './Notfound.css';
import '../App/App.css';
import {Link} from "react-router-dom";

function Notfound() {

  return (
    <div className="block notfound">
      <div className="notfound__message">
      <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
      </div>
      <p className="notfound__back">
        Назад
      </p>
    </div>

  )
}

export default Notfound;
