import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/services/AuthService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
        userName: null,
        userId: null
    },
    mutations: {
        AUTHENTICATE(state) {
            state.isLoggedIn = auth.isLoggedIn();
            if (state.isLoggedIn) {
                state.userName = auth.getUserName();
                state.userId = auth.getUserId();
            } else {
                state.userName = null;
                state.userId = null;
            }
        }
    },
    actions: {
        authenticate({ commit }) {
            commit('AUTHENTICATE');
        }
    },
    modules: {}
});
