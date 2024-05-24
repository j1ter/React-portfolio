// src/components/Header.js
import React from 'react';
import insta from '../icons/social/instagram.svg';
import li from '../icons/social/li.svg';
import github from '../icons/social/github.svg';

const Header = () => (
  <aside className="sidepanel">
    <a href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%D0%BB-%D1%81%D0%B0%D0%BC%D0%B0%D1%82-243810307/" className="sidepanel__link"><img src={li} alt="facebook" /></a>
    <a href="https://www.instagram.com/dallas10.1?igsh=MTZkd2xya3Y2bGs2dg==" className="sidepanel__link"><img src={insta} alt="instagram" /></a>
    <a href="https://github.com/j1ter" className="sidepanel__link"><img src={github} alt="github" /></a>
    <div className="sidepanel__divider"></div>
    <div className="sidepanel__text"><span>Социальные сети</span></div>
  </aside>
);

export default Header;
