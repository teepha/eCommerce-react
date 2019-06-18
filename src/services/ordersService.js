import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class categoriesService extends EventEmitter {

    constructor() {
        super();

        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };


    getShippingRegions = () => {

        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + '/shipping/regions').then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    getAllOrders = () => {
        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + `/orders/inCustomer`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    addOrder = ({ cart_id, shipping_id, tax_id }) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + `/orders`, {
                cart_id,
                shipping_id,
                tax_id
            }).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    getOrderDetails = ({ order_id }) => {
        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + `/orders/${order_id}`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    chargeStripe = ({ order_id, stripeToken, description, amount, currency }) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + `/stripe/charge`, {
                    order_id,
                    stripeToken,
                    description,
                    amount,
                    currency
                }).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };
}

const instance = new categoriesService();

export default instance;