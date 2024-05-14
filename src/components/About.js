import React from 'react';
import mainPhoto from '../img/main_photo.png';
import webDevelopment from '../icons/about_me/web_development.svg';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about__wrapper">
        <div className="about__photo">
          <img src={mainPhoto} alt="photo" />
        </div>
        <div className="about__descr">
          <h2 className="title title_fz16 about__title title_black">Про меня</h2>
          <div className="title title_fz36 about__subtitle title_black">Моё имя Даниял</div>
          <div className="divider"></div>
          <p className="about__text">
            Моё имя Даниял, и я студент университета Narxoz, специализирующийся на цифровом управлении и дизайне. В течение моего обучения я активно занимался разработкой пет-проектов в рамках курсовых работ. Эти проекты не только позволили мне применить теоретические знания на практике, но и погрузиться в мир реальных цифровых задач, столкнуться с проблемами и научиться искать их решения.
          </p>
        </div>
        <div className="about__skills">
          <div className="about__skills-item">
            <div className="about__skills-circle">
              <img src={webDevelopment} alt="web-dev" />
            </div>
            <div>
              <div className="title title_fz14 title_black">Web-разработка</div>
              <div className="about__skills-text">Мои проекты в области web-разработки демонстрируют мои умения в создании функциональных и креативных веб-решений.</div>
            </div>
          </div>
          <div className="about__skills-item">
            <div className="about__skills-circle">
              <img src="../icons/about_me/design.svg" alt="web-dev" />
            </div>
            <div>
              <div className="title title_fz14 title_black">Web-разработка</div>
              <div className="about__skills-text">В области UI/UX дизайна демонстрируют мой профессиональный подход к созданию привлекательных и функциональных пользовательских интерфейсов.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
