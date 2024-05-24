import React from 'react';
import './styles/style.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Promo from './components/Promo';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import AddPortfolioItem from './components/AddPortfolioItem'; // Убедитесь, что этот компонент импортирован
import Price from './components/Price';
import Contacts from './components/Contacts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Promo />
                <About />
                <Resume />
                <Portfolio />
                <Skills />
                <Price />
                <Contacts />
              </>
            } />
            <Route path="/add" element={<AddPortfolioItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
