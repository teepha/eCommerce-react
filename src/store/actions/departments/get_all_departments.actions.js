export const GET_ALL_DEPARTMENTS = 'GET_ALL_DEPARTMENTS';
export const GET_ALL_DEPARTMENTS_ERROR = 'GET_ALL_DEPARTMENTS_ERROR';
export const GET_ALL_DEPARTMENTS_SUCCESS = 'GET_ALL_DEPARTMENTS_SUCCESS';


export const getAllDepartments = (data) => ({
    type: GET_ALL_DEPARTMENTS,
    payload: data
});
