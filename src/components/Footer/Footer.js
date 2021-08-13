import React from "react";
import './Footer.css';
import '../App/App.css';

function Footer() {
  return (
    <footer className="footer block">
      <div className="footer__upline">
        <p className="footer__text footer__text_title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__subline">
        <p className="footer__text">
          © {new Date().getFullYear()}
        </p>
        <ul className="footer__list">
          <li className="footer__text footer__item">
            <a href="https://praktikum.yandex.ru/"
               target="_blank"
               rel="noopener noreferrer"
               className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__text footer__item">
            <a href="https://github.com/sergey-popov-1964/movies-explorer-frontend"
               target="_blank"
               rel="noopener noreferrer"
               className="footer__link">
              Github
            </a>
          </li>
          <li className="footer__text footer__item">
            <a href="https://www.facebook.com/sergey.popov.10297/"
               target="_blank"
               rel="noopener noreferrer"
               className="footer__link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
