import React from 'react';

const Resume = () => (
  <section className="resume" id="resume">
    <div className="container">
      <h2 className="title title_fz16 resume__title title_black">Опыт</h2>
      <div className="title title_fz36 resume__subtitle title_black">Чем я буду полезен</div>
      <div className="divider"></div>
      <div className="resume__wrapper">
        <div className="resume__column">
          <h3 className="title title_fz20 resume__column-title title_black">Образование</h3>
          <ul>
            <li>
              <div className="resume__item">
                <div className="resume__item-head">
                  <div className="resume__item-icon">
                    <img src="/icons/experience/university.svg" alt="university" />
                  </div>
                  <h4 className="title title_fz14 title_black">Narxoz University</h4>
                  <div className="resume__item-location">Бакалавра | Алматы (2021-2025)</div>
                </div>
                <div className="resume__item-body">Поступил в университет Narxoz в 2021 году. Специальность цифровой маркетинг и дизайн. Разрабатываю пет-проекты для курсовых работ по определенным дисциплинам. В 2025 году закончу университет.</div>
              </div>
            </li>
            <li>
              <div className="resume__item">
                <div className="resume__item-head">
                  <div className="resume__item-icon">
                    <img src="/icons/experience/courses.svg" alt="university" />
                  </div>
                  <h4 className="title title_fz14 title_black">Udemy</h4>
                  <div className="resume__item-location">Курсы по Web-разработке </div>
                </div>
                <div className="resume__item-body">В свободное время активно прохожу курсы на сайте Udemy. Изучаю новые технологии и практикуюсь на пет-проектах. Прошел 2 курса по Web-разработке.</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume__column">
          <h3 className="title title_fz20 resume__column-title title_black">Опыт работы</h3>
          <ul>
            <li>
              <div className="resume__item">
                <div className="resume__item-head">
                  <div className="resume__item-icon">
                    <img src="/icons/experience/developer.svg" alt="university" />
                  </div>
                  <h4 className="title title_fz14 title_black">Front-End Developer</h4>
                  <div className="resume__item-location">Pet-projects (2022-2024)</div>
                </div>
                <div className="resume__item-body">Разрабатываю различные пет-проекты для своих курсовых работ. Выстраиваю правильную архитектуру веб-приложения и применяю в свою практику материалы которые прошёл и изучил.</div>
              </div>
            </li>
            <li>
              <div className="resume__item">
                <div className="resume__item-head">
                  <div className="resume__item-icon">
                    <img src="/icons/experience/designer.svg" alt="university" />
                  </div>
                  <h4 className="title title_fz14 title_black">UI/UX Designer</h4>
                  <div className="resume__item-location">Pet-project (2023)</div>
                </div>
                <div className="resume__item-body">Применяю на практике знания пользовательского интерфейса и пользовательского опыта создавая минималистичный, но в то же время современный дизайн. Сделал дизайн для своего проекта “Строительный магазин”.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
