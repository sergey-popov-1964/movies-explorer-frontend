import React from 'react';
import './Techs.css';
import '../Main.css'

function Techs() {


    return (
      <div id="techs" className="techs">
        <h2 className="main__block-head">Технологии</h2>

        <div>
            <h1 className="techs__title">7 технологий</h1>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      </div >

        <ul className="techs__list">
          <li className="techs__item">
            <p className="techs__item-text">HTML</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">CSS</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">JS</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">React</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">Git</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">Express.js</p>
          </li>
          <li className="techs__item">
            <p className="techs__item-text">mongoDB</p>
          </li>
        </ul>

      </div>
    )

}

export default Techs;
