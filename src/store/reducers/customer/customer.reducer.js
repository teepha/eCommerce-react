import * as Actions from "../../actions";

const initialState = {
  data: {},
  isLoading: false,
  error: false
};

const customerReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.CREATE_NEW_CUSTOMER: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case Actions.CREATE_NEW_CUSTOMER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    }
    case Actions.CREATE_NEW_CUSTOMER_ERROR: {
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

export default customerReducer;
