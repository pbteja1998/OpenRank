import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import myPluginWithSnapshot from './plugins';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});