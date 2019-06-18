export const HIDE_CART = 'HIDE_CART';
export const SHOW_CART = 'SHOW_CART';

export function hideCart()
{
    return {
        type: HIDE_CART
    }
}

export function showCart(options)
{
    return {
        type: SHOW_CART,
        payload: options
    }
}