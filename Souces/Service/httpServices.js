
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

class Services {
    constructor() {
        this.axios = axios;
        this.interceptors = null;
        this.axios.defaults.withCredentials = true;
        this.axios.defaults.timeout = 300000;
    }

    async get(url, config) {
        return axios.get(url, config);
    }
    async post(url, body, config) {
        return axios.post(url, body, config);
    }
    async put(url, body, config) {
        return axios.put(url, body, config);
    }
    async delete(url, body, config) {
        return axios.delete(url, body, config);
    }
}

export default new Services();

