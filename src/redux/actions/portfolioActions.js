// Async action для добавления работы в портфолио
// Async action для добавления работы в портфолио
export const addPortfolioItemAsync = formData => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:5000/api/portfolio', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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
    const formData = new FormData();
    formData.append('title', item.title);
    formData.append('link', item.link);
    if (item.imageUrl instanceof File) {
      formData.append('image', item.imageUrl);
    } else if (typeof item.imageUrl === 'string') {
      // Передаем текущий URL изображения, если файл не был выбран
      formData.append('imageUrl', item.imageUrl);
    }

    try {
      const response = await fetch(`http://localhost:5000/api/portfolio/${item.id}`, {
        method: 'PUT',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({
          type: 'UPDATE_ITEM',
          payload: { id: item.id, ...item }
        });
      } else {
        console.error('Error updating item:', data.error);
      }
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
