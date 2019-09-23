import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: false
};

const attributeValuesReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ATTRIBUTE_VALUES: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_ATTRIBUTE_VALUES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_ATTRIBUTE_VALUES_ERROR: {
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

export default attributeValuesReducer;
