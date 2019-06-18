export const HIDE_TOAST = 'HIDE_TOAST';
export const SHOW_TOAST = 'SHOW_TOAST';

export function hideToast()
{
    return {
        type: HIDE_TOAST
    }
}

export function showToast(options)
{
    return {
        type: SHOW_TOAST,
        payload: options
    }
}