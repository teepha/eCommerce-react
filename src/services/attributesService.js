import axios from "axios";
import EventEmitter from "../utils/EventEmitter";
import systemConfig from "../config/system";

class attributesService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  };

  getAllAttributes = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + "/attributes")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getAttributeValues = attributeIds => {
    const attributeIdsPromise = attributeIds.map(id =>
      axios.get(`${systemConfig.serverBaseUrl}/attributes/values/${id}`)
    );
    return Promise.all(attributeIdsPromise).then(allAttributes => {
      return allAttributes.map((a, i) => ({ [attributeIds[i]]: a.data }));
    });
  };
}

const instance = new attributesService();

export default instance;
