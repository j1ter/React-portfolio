import React, { useEffect } from 'react';
import html from '../icons/skills/html5.svg';
import css3 from '../icons/skills/css3.svg';
import JavaScript from '../icons/skills/js.svg';
import jquery from '../icons/skills/jquery.svg';
import react from '../icons/skills/react.svg';
import node from '../icons/skills/node.js.svg';
import postgresql from '../icons/skills/pgsql.svg';
import php from '../icons/skills/php.svg';

const Skills = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.skills__ratings-counter');
    const lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="title title_fz16 skills__title title_black">Навыки</h2>
        <div className="title title_fz36 skills__subtitle title_black">Что я использую в работе</div>
        <div className="divider"></div>
        <div className="skills__items">
          <div className="skills__item">
            <img src={html} alt="html5" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">HTML5</h3>
            <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.</p>
          </div>
          <div className="skills__item">
            <img src={css3} alt="css3" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">CSS3</h3>
            <p>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
          </div>
          <div className="skills__item">
            <img src={JavaScript} alt="JavaScript" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">JavaScript</h3>
            <p>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.</p>
          </div>
          <div className="skills__item">
            <img src={jquery} alt="jquery" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">Jquery</h3>
            <p>Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует</p>
          </div>
          <div className="skills__item">
            <img src={react} alt="React" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">React</h3>
            <p>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.</p>
          </div>
          <div className="skills__item">
            <img src={node} alt="node" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">Node.js</h3>
            <p>Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит</p>
          </div>
          <div className="skills__item">
            <img src={postgresql} alt="postgresql" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">PostgreSQL</h3>
            <p>Свободная объектно-реляционная система управления базами данных.</p>
          </div>
          <div className="skills__item">
            <img src={php} alt="php" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">PHP</h3>
            <p>C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений.</p>
          </div>
        </div>
        <div className="skills__ratings">
          {[
            { title: "Создание сайтов", percent: "100%" },
            { title: "Создание приложений", percent: "85%" },
            { title: "Работа с данными", percent: "90%" },
            { title: "Креативность", percent: "75%" },
            { title: "Создание дизайна", percent: "90%" },
            { title: "Soft skills", percent: "95%" }
          ].map((skill, index) => (
            <div key={index} className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title title_black">{skill.title}</div>
              <div className="skills__ratings-counter">{skill.percent}</div>
              <div className="skills__ratings-line">
                <span style={{ width: skill.percent }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
