import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/*
here we import bootstrap javascript module
*/
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
