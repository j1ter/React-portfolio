import React from 'react';
import '../styles/style.min.css';  // Стили, преобразованные в CSS

const Promo = () => {
  return (
    <section className="promo">
      <div className="hamburger">
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <div className="container">
        <div className="title title_fz16 promo__subtitle">Меня зовут Даниял Самат</div>
        <h1 className="title title_fz48 promo__title">Я web-разработчик из города Алматы</h1>
        <div className="promo__btns">
          <a href="#" className="promo__link btn">Портфолио</a>
          <a href="#" className="promo__link">Про меня</a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
