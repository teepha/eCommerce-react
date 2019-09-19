import * as Actions from '../../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

const addCartItemReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_CART_ITEM: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case Actions.ADD_CART_ITEM_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    }
    case Actions.ADD_CART_ITEM_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default addCartItemReducer;
