export const GET_ALL_ATTRIBUTES = 'GET_ALL_ATTRIBUTES';
export const GET_ALL_ATTRIBUTES_ERROR = 'GET_ALL_ATTRIBUTES_ERROR';
export const GET_ALL_ATTRIBUTES_SUCCESS = 'GET_ALL_ATTRIBUTES_SUCCESS';

export const getAllAttributes = (data) => ({
  type: GET_ALL_ATTRIBUTES,
  payload: data
});
