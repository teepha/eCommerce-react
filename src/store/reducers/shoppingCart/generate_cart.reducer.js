import * as Actions from "../../actions";

const initialState = {
  data: {},
  error: false
};

const generateUniqueCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GENERATE_UNIQUE_CART: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GENERATE_UNIQUE_CART_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GENERATE_UNIQUE_CART_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default generateUniqueCartReducer;
