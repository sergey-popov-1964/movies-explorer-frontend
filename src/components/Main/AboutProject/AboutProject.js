import React from 'react';
import '../Main.css';
import './AboutProject.css';
import '../../App/App.css';

function AboutProject() {

  return (
    <div id="about" className="main__block about">
      <h2 className="main__block-head">О проекте</h2>

      <ul className="about__stages">
        <li className="about__item">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about__item">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="about__list about__chart">
        <li className="about__chart-item">
          <h3 className="about__chart-week about__chart-week_green">1 неделя</h3>
          <p className="about__chart-text">Back-end</p>
        </li>
        <li className="about__item">
          <h3 className="about__chart-week">4 недели</h3>
          <p className="about__chart-text">Front-end</p>
        </li>
      </ul>

    </div>
  )
}

export default AboutProject;
