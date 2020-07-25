import store from '@/store';

export default {
    isLoggedIn() {
        const token = localStorage.getItem('token');
        return token != null;
    },

    login() {
        const token = {
            username: 'ali'
        };
        this.setToken(token);
    },

    setToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
        store.dispatch('authenticate');
    },

    getUserName() {
        return 'ali';
    },

    getUserId() {
        return 1;
    }
};
