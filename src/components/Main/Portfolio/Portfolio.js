import React from 'react';
import './Portfolio.css';
import '../../App/App.css';
import arrow from "../../../images/arrow.svg";

function Portfolio() {

  return (
    <div id="techs" className="main__block portfolio">
      <ul className="portfolio__list">
        <li className="portfolio__title">
          Портфолио
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Статичный сайт</p>
          <a href="https://sergey-popov-1964.github.io/how-to-learn/index.html" target="_blank">
            <img src={arrow} alt="" className="portfolio__link"/>
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a href="https://sergey-popov-1964.github.io/russian-travel/index.html" target="_blank">
            <img src={arrow} alt="" className="portfolio__link"/>
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a href="https://sergey-popov-1964.github.io/mesto/index.html" target="_blank">
            <img src={arrow} alt="" className="portfolio__link"/>
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Portfolio;
