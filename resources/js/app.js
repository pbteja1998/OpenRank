// import Vue from 'vue';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbvue/build/css/mdb.css';
// import App from './App.vue';
//
// const app = new Vue({
//     el: '#app',
//     components: { App },
//     template: `<app></app>`
// });

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});