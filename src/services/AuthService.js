import store from '@/store';
import { http } from './httpService';

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
                    const token = {
                        token: 'my-token'
                    };
                    this.setToken(token);
                }
            });
    },

    setToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
        store.dispatch('authenticate');
    },

    registerUser(user) {
        return http().post('/register', user);
    },

    getUserName() {
        return 'ali';
    },

    getUserId() {
        return 1;
    }
};
