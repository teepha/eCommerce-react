import * as Actions from "../../actions";

const initialState = {
  data: [],
  totalAmount: {},
  isLoading: false,
  error: false
};

const shoppingCartReducer = function(state = initialState, action) {
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

    case Actions.GET_CART_ITEMS: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case Actions.GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    }
    case Actions.GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case Actions.GET_TOTAL_AMOUNT: {
      return {
        ...state,
        error: false
      };
    }
    case Actions.GET_TOTAL_AMOUNT_SUCCESS: {
      return {
        ...state,
        totalAmount: action.payload,
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

export default shoppingCartReducer;
