import * as Actions from '../../actions';

const initialState = {
  data: [],
  error: false
};

const departmentCategoriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_DEPARTMENT_CATEGORIES: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_DEPARTMENT_CATEGORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_DEPARTMENT_CATEGORIES_ERROR: {
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

export default departmentCategoriesReducer;