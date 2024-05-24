import React, { useState } from 'react';
import gh from '../icons/social/gh.svg';
import insta from '../icons/social/insta.svg';
import linkedin from '../icons/social/linkedin.svg';

const Promo = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="promo">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <div className="container">
        <div className="title title_fz16 promo__subtitle">Меня зовут Даниял Самат</div>
        <h1 className="title title_fz48 promo__title">Я web-разработчик из города Алматы</h1>
        <div className="promo__btns">
          <a href="#portfolio" className="promo__link btn">Портфолио</a>
          <a href="#about" className="promo__link">Про меня</a>
        </div>
      </div>

      <div className={`menu ${isActive ? 'active' : ''}`}>
        <div className="menu__block">
          <div className="menu__close" onClick={toggleMenu}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.15 13.52L28.44 2.23C29.18 1.49 29.18 0.3 28.44 -0.43C27.71 -1.17 26.52 -1.17 25.79 -0.43L14.49 10.86L3.2 -0.43C2.47 -1.17 1.28 -1.17 0.55 -0.43C-0.19 0.3 -0.19 1.49 0.55 2.23L11.84 13.52L0.55 24.81C-0.19 25.55 -0.19 26.73 0.55 27.47C0.91 27.83 1.39 28.02 1.87 28.02C2.36 28.02 2.84 27.83 3.2 27.47L14.49 16.17L25.79 27.47C26.15 27.83 26.63 28.02 27.12 28.02C27.6 28.02 28.08 27.83 28.44 27.47C29.18 26.73 29.18 25.55 28.44 24.81L17.15 13.52Z" fill="#000000" />
            </svg>
          </div>

          <nav>
            <ul className="menu__list">
              <li className="menu__link"><a href="#about">ПРО МЕНЯ</a></li>
              <li className="menu__link"><a href="#resume">МОЙ ОПЫТ</a></li>
              <li className="menu__link"><a href="#skills">МОИ НАВЫКИ</a></li>
              <li className="menu__link"><a href="#portfolio">МОИ РАБОТЫ</a></li>
              <li className="menu__link"><a href="#price">ПРАЙС-ЛИСТ</a></li>
              <li className="menu__link"><a href="#contacts">КОНТАКТЫ</a></li>
            </ul>
          </nav>

          <div className="menu__social">
            <a href="https://github.com/j1ter"><img src={gh} alt="github" /></a>
            <a href="https://www.instagram.com/dallas10.1?igsh=MTZkd2xya3Y2bGs2dg=="><img src={insta} alt="instagram" /></a>
            <a href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%D0%BB-%D1%81%D0%B0%D0%BC%D0%B0%D1%82-243810307/"><img src={linkedin} alt="facebook" /></a>
          </div>
        </div>
        <div className="menu__overlay" onClick={toggleMenu}></div>
      </div>
    </section>
  );
};

export default Promo;
