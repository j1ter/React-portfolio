import React, { useEffect } from 'react';

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
            <img src="/icons/skills/html5.svg" alt="html5" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">HTML5</h3>
            <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.</p>
          </div>
          <div className="skills__item">
            <img src="/icons/skills/css3.svg" alt="css3" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">CSS3</h3>
            <p>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
          </div>
          <div className="skills__item">
            <img src="/icons/skills/js.svg" alt="JavaScript" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">JavaScript</h3>
            <p>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.</p>
          </div>
          <div className="skills__item">
            <img src="/icons/skills/react.svg" alt="React" className="skills__item-img"/>
            <h3 className="title title_fz14 title_black">React</h3>
            <p>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели.</p>
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
