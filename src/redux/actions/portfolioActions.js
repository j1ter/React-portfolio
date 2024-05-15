// Async action для добавления работы в портфолио
export const addPortfolioItemAsync = item => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:5000/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      const data = await response.json();
      dispatch({
        type: 'ADD_ITEM',
        payload: data
      });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
};

// Async action для удаления работы из портфолио
export const removePortfolioItemAsync = id => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:5000/api/portfolio/${id}`, {
        method: 'DELETE'
      });
      dispatch({
        type: 'REMOVE_ITEM',
        payload: id
      });
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };
};

// Async action для обновления работы в портфолио
export const updatePortfolioItemAsync = item => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:5000/api/portfolio/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      const data = await response.json();
      dispatch({
        type: 'UPDATE_ITEM',
        payload: data
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
};

export const fetchPortfolioItems = () => {
  return async (dispatch) => {
      try {
          const response = await fetch('http://localhost:5000/api/portfolio');
          const items = await response.json();
          dispatch({
              type: 'SET_PORTFOLIO_ITEMS',
              payload: items
          });
      } catch (error) {
          console.error('Failed to fetch portfolio items:', error);
      }
  };
};
