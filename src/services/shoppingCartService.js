import axios from "axios";
import EventEmitter from "../utils/EventEmitter";
import systemConfig from "../config/system";

class shoppingCartService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  };

  generateUniqueCart = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + "/shoppingcart/generateUniqueId")
        .then(response => {
          localStorage.setItem("cart_id", response.data.cart_id);
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  addItemToCart = ({ cart_id, product_id, attributes }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + "/shoppingcart/add", {
          cart_id,
          product_id,
          attributes
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getCart = ({ cart_id }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/shoppingcart/${cart_id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getTotalAmount = ({ cart_id }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          systemConfig.serverBaseUrl + `/shoppingcart/totalAmount/${cart_id}`
        )
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
}

const instance = new shoppingCartService();

export default instance;
