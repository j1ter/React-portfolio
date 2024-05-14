import React from 'react';
import './styles/style.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import AddPortfolioItem from './components/AddPortfolioItem'; // Убедитесь, что этот компонент импортирован

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={
              <>
                <Promo />
                <About />
                <Resume />
                <Portfolio />
                <Skills />
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
