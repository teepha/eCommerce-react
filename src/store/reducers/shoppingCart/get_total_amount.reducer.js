import * as Actions from '../../actions';

const initialState = {
  data: {},
  error: false
};

const getTotalAmountReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TOTAL_AMOUNT: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_TOTAL_AMOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_TOTAL_AMOUNT_ERROR: {
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

export default getTotalAmountReducer;
