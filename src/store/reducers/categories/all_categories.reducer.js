import * as Actions from "../../actions";

const initialState = {
  data: {
    rows: []
  },
  error: false
};

const allCategoriesReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ALL_CATEGORIES: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_ALL_CATEGORIES_ERROR: {
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

export default allCategoriesReducer;
