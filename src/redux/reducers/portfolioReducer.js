const initialState = {
    portfolioItems: []
  };
  
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, portfolioItems: [...state.portfolioItems, action.payload] };
      case 'REMOVE_ITEM':
        return { ...state, portfolioItems: state.portfolioItems.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;
  