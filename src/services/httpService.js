import store from '../store';
import axios from 'axios';
import auth from '../services/AuthService';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: auth.getToken()
        }
    });
}
