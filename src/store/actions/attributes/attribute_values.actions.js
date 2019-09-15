export const GET_ATTRIBUTE_VALUES = 'GET_ATTRIBUTE_VALUES';
export const GET_ATTRIBUTE_VALUES_ERROR = 'GET_ATTRIBUTE_VALUES_ERROR';
export const GET_ATTRIBUTE_VALUES_SUCCESS = 'GET_ATTRIBUTE_VALUES_SUCCESS';

export const getAttributeValues = (data) => ({
  type: GET_ATTRIBUTE_VALUES,
  payload: data
});
