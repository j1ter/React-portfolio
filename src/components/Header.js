// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <aside className="sidepanel">
    <a href="#" className="sidepanel__link"><img src="" alt="facebook" /></a>
    <a href="#" className="sidepanel__link"><img src="../icons/social/instagram.svg" alt="instagram" /></a>
    <a href="https://github.com/j1ter" className="sidepanel__link"><img src="/icons/social/github.svg" alt="github" /></a>
    <div className="sidepanel__divider"></div>
    <div className="sidepanel__text"><span>Социальные сети</span></div>
  </aside>
);

export default Header;
