export const SET_USER_DATA = 'SET_USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data
});

export const logoutUser = () => ({
    type: REMOVE_USER_DATA
});
