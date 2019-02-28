import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import myPluginWithSnapshot from './plugins';
import { TOGGLE_LEFT_DRAWER } from './mutation-types';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        leftDrawer: true
    },
    mutations: {
        [TOGGLE_LEFT_DRAWER] (state, payload) {
            if(payload.leftDrawer === undefined) {
                state.leftDrawer = !state.leftDrawer
            } else {
                state.leftDrawer = payload.leftDrawer
            }
        }
    },
    actions: {
    },
    getters: {
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});