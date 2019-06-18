import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class departmentsService extends EventEmitter {

    constructor() {
        super();

        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };


    getAllDepartments = () => {

        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + '/departments').then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    getDepartmentById = ({ department_id }) => {

        return new Promise((resolve, reject) => {
            axios.get(systemConfig.serverBaseUrl + `/departments/${department_id}`).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };
}

const instance = new departmentsService();

export default instance;