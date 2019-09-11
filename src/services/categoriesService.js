import axios from "axios";
import EventEmitter from "../utils/EventEmitter";
import systemConfig from "../config/system";

class categoriesService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  };

  getAllCategories = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + "/categories", {
          params: {
            page: 1
          }
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getDepartmentCategories = ({ department_id }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          systemConfig.serverBaseUrl +
            `/categories/inDepartment/${department_id}`
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

const instance = new categoriesService();

export default instance;
