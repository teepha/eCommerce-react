export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_PENDING = 'LOGIN_PENDING';

export const submitLogin = (data) => ({
    type: LOGIN_PENDING,
    payload: data
});
