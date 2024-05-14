export const addPortfolioItem = item => {
    return {
      type: 'ADD_ITEM',
      payload: item
    };
  };
  
  export const removePortfolioItem = id => {
    return {
      type: 'REMOVE_ITEM',
      payload: id
    };
  };
  