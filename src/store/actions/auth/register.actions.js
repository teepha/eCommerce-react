export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_PENDING = 'REGISTER_PENDING';

export const submitRegister = (data) => ({
    type: REGISTER_PENDING,
    payload: data
});