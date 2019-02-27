import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';
import Notifications from 'vue-notification';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use(Notifications);
Vue.use(Vue2TouchEvents);
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