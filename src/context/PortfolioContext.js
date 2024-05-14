import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const addPortfolioItem = item => {
    setPortfolioItems(prevItems => [...prevItems, item]);
  };

  const removePortfolioItem = itemId => {
    setPortfolioItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <PortfolioContext.Provider value={{ portfolioItems, addPortfolioItem, removePortfolioItem }}>
      {children}
    </PortfolioContext.Provider>
  );
};
