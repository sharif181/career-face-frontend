import axios from 'axios';
import JwtService from "./jwt.service";

const ApiService = {
    init() {
        axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
        if (JwtService.getToken()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`;
        }
    },

    get(resource, params) {
        return axios.get(`${resource}`, params);
    },

    post(resource, params) {
        return axios.post(`${resource}`, params);
    },

    update(resource, params) {
        return axios.put(`${resource}`, params);
    },

    delete(resource) {
        return axios.delete(resource);
    },
};

export default ApiService;