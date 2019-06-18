import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class customerService extends EventEmitter {

    constructor() {
        super();

        this.setDefaults();
        this.getCartId();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };


    generateCardId = () => {
        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + '/shoppingcart/generateUniqueId').then(response => {
                this.storeCartId(response.data.cart_id);
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    addToCart = ({product_id, attributes}) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + '/shoppingcart/add', {
                cart_id: this.getCartId(),
                product_id,
                attributes
            }).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });

    };

    getCartItems = () => {
        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + `/shoppingcart/${this.getCartId()}`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    updateCartItemQuantity = ({quantity, cartItemId}) => {
        return new Promise((resolve, reject) => {
            axios.put(systemConfig.serverBaseUrl + `/shoppingcart/update/${cartItemId}`, {
                cart_id: this.getCartId(),
                quantity
            }).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    removeItemFromCart = ({itemId}) => {
        return new Promise((resolve, reject) => {
            axios.delete(systemConfig.serverBaseUrl + `/shoppingcart/removeProduct/${itemId}`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    deleteCart = () => {
        return new Promise((resolve, reject) => {
            axios.delete(systemConfig.serverBaseUrl + `/shoppingcart/${this.getCartId()}`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };


    storeCartId = cartId => {
        if (cartId) {
            localStorage.setItem('cart_id', cartId);
        } else {
            localStorage.removeItem('cart_id');
        }
    };

    getCartId() {

        if (localStorage.getItem("cart_id") === null) {
            return this.generateCardId().then(data => data.cart_id)
        }

        return localStorage.getItem('cart_id');
    }

    removeCartInstance = () => {
        this.storeCartId(null);
        this.deleteCart().catch(() => {
            console.warn('Error while deleting cart');
        });
    };

}

const instance = new customerService();

export default instance;