import axios from "axios";
import jwtDecode from "jwt-decode";
import EventEmitter from "../utils/EventEmitter";
import systemConfig from "../config/system";

class customersService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  };

  createCustomer = ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + "/customers", {
          name,
          email,
          password
        })
        .then(response => {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          const customerData = jwtDecode(accessToken);
          resolve(customerData);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
}

const instance = new customersService();

export default instance;
