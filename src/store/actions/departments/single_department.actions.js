export const GET_SINGLE_DEPARTMENT = 'GET_SINGLE_DEPARTMENT';
export const GET_SINGLE_DEPARTMENT_ERROR = 'GET_SINGLE_DEPARTMENT_ERROR';
export const GET_SINGLE_DEPARTMENT_SUCCESS = 'GET_SINGLE_DEPARTMENT_SUCCESS';


export const getSingleDepartment = (data) => ({
    type: GET_SINGLE_DEPARTMENT,
    payload: data
});
