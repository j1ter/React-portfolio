const initialState = {
    portfolioItems: []
  };
  
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, portfolioItems: [...state.portfolioItems, action.payload] };
      case 'REMOVE_ITEM':
        return { ...state, portfolioItems: state.portfolioItems.filter(item => item.id !== action.payload) };
      case 'UPDATE_ITEM':
        return { ...state, portfolioItems: state.portfolioItems.map(item => item.id === action.payload.id ? action.payload : item) };
      case 'SET_PORTFOLIO_ITEMS':
        return { ...state, portfolioItems: action.payload };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;
  