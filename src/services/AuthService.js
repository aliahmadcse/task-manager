import store from '@/store';
import { http } from './httpService';
import jwt from 'jsonwebtoken';

export default {
    isLoggedIn() {
        const token = localStorage.getItem('token');
        return token != null;
    },

    login(user) {
        return http()
            .post('/auth', user)
            .then(res => {
                if (res) {
                    this.setToken(res.data.token);
                }
            });
    },

    getToken() {
        return localStorage.getItem('token');
    },

    logout() {
        localStorage.clear();
        store.dispatch('authenticate');
    },

    setToken(token) {
        localStorage.setItem('token', token);
        store.dispatch('authenticate');
    },

    registerUser(user) {
        return http().post('/register', user);
    },

    decodeToken() {
        const token = this.getToken();
        if (!token) {
            return null;
        }
        return jwt.decode(token);
    },

    getUserName() {
        const token = this.decodeToken();
        if (!token) {
            return null;
        }
        return token.user.userName;
    },

    getUserId() {
        const token = this.decodeToken();
        if (!token) {
            return null;
        }
        return token.user.id;
    }
};
