export const CREATE_NEW_CUSTOMER = "CREATE_NEW_CUSTOMER";
export const CREATE_NEW_CUSTOMER_ERROR = "CREATE_NEW_CUSTOMER_ERROR";
export const CREATE_NEW_CUSTOMER_SUCCESS = "CREATE_NEW_CUSTOMER_SUCCESS";

export const createCustomer = data => ({
  type: CREATE_NEW_CUSTOMER,
  payload: data
});
