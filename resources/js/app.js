import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import Vuetify from 'vuetify/lib';
import CKEditor from '@ckeditor/ckeditor5-vue';

const unsync = sync(store, router);
Vue.use(Vuetify);
Vue.use( CKEditor );

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