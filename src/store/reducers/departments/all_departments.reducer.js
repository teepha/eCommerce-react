import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: false
};

const allDepartmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_DEPARTMENTS: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_ALL_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_ALL_DEPARTMENTS_ERROR: {
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

export default allDepartmentsReducer;
