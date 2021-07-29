import React from 'react';
import './AboutMe.css';
import '../../App/App.css';
import '../Main.css'
import myPhoto from "../../../images/my_photo.jpg";

function AboutMe() {

  return (
    <div id="student" className="main__block about-me">
      <h2 className="main__block-head">Студент</h2>
      <div className="about__me-list">
        <div className="about__me-content">
          <h1 className="about__me-title">Сергей</h1>
          <p className="about__me-subtitle">Программист по сопровождению информационных систем</p>
          <p className="about__me-description">Я родился и живу в Хабаровском крае, закончил факультет экономики
            Хабаровской Государственной Академии Экономики и Права (ХГАЭП). Я люблю путешествовать, слушать музыку. В
            настоящее время работаю в компании «ИК «Сибинтек ».</p>
        </div>
        <ul className="about__me-links">
          <li className="about__me-text about__me-item">
            <a href="https://www.facebook.com/sergey.popov.10297/"
               target="_blank"
               rel="noopener noreferrer"
               className="about__me-link">
              Facebook
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
        </ul>
        <img src={myPhoto} className="about__me-photo" alt="Фото студента"/>
      </div>
    </div>
  )
}

export default AboutMe;
