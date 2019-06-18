export const HIDE_AUTH = 'HIDE_AUTH';
export const SHOW_AUTH = 'SHOW_AUTH';
export const SWITCH_TAB = 'SWITCH_TAB';

export function hideAuth()
{
    return {
        type: HIDE_AUTH
    }
}

export function showAuth(options)
{
    return {
        type: SHOW_AUTH,
        payload: options
    }
}

export function switchTab(options)
{
    return {
        type: SWITCH_TAB,
        payload: options
    }
}