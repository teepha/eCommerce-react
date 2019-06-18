import axios from 'axios';
import jwtDecode from 'jwt-decode';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class customerService extends EventEmitter {

    constructor() {
        super();

        this.handleAuthentication();
        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if (!access_token) {
            return;
        }

        if (this.isAuthTokenValid(access_token)) {
            this.setSession(access_token);

            this.emit('onAutoLogin');
        } else {
            this.setSession(null);
            this.emit('onAutoLogout', 'Your Session has Expired');
        }
    };

    register = ({name, email, password}) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + '/customers', {
                name,
                email,
                password
            }).then(response => {
                this.setSession(response.data.accessToken);
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    signIn = ({email, password}) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + '/customers/login', {
                email,
                password
            }).then(response => {
                this.setSession(response.data.accessToken);
                resolve(response.data);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    signInWithFacebook = ({ access_token }) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + '/customers/facebook', {
                access_token
            }).then(response => {
                this.setSession(response.data.accessToken);
                resolve(response.data);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    getCustomer = () => {
        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + '/customer')
                .then(response => {
                    resolve(response.data);
                }).catch((error) => {
                reject(error.response);
            });
        });
    };

    updateCustomer = ({name, email, password, day_phone, eve_phone, mob_phone}) => {
        return new Promise((resolve, reject) => {
            axios.put(systemConfig.serverBaseUrl + '/customer', {
                name,
                email,
                password,
                day_phone,
                eve_phone,
                mob_phone
            }).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    updateCustomerAddress = ({address_1, address_2, city, region, postal_code, country, shipping_region_id}) => {
        return new Promise((resolve, reject) => {
            axios.put(systemConfig.serverBaseUrl + '/customers/address', {
                address_1,
                address_2,
                city,
                region,
                postal_code,
                country,
                shipping_region_id
            }).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    updateCustomerCreditCard = ({credit_card}) => {
        return new Promise((resolve, reject) => {
            axios.put(systemConfig.serverBaseUrl + '/customers/address', {
                credit_card
            }).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    setSession = accessToken => {
        if (accessToken) {
            localStorage.setItem('access_token', accessToken);
            axios.defaults.headers.common['User-Key'] = accessToken;
        } else {
            localStorage.removeItem('access_token');
            delete axios.defaults.headers.common['User-Key'];
        }
    };

    logout = () => {
        this.setSession(null);
    };

    isAuthTokenValid = access_token => {
        if (!access_token) {
            return false;
        }
        const regexPattern = /^Bearer\s/i;
        const decoded = jwtDecode(access_token.replace(regexPattern, ''));

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            console.warn('Access Token Expired');
            return false;
        } else {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('access_token');
    };
}

const instance = new customerService();

export default instance;