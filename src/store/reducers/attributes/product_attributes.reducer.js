import * as Actions from "../../actions";

const initialState = {
  data: [],
  error: false
};

const productAttributesReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_PRODUCT_ATTRIBUTES: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_PRODUCT_ATTRIBUTES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false
      };
    }
    case Actions.GET_PRODUCT_ATTRIBUTES_ERROR: {
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

export default productAttributesReducer;
