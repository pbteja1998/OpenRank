import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import { TOGGLE_CREATE_TEST_MODAL, SHOW_CREATE_TEST_MODAL, HIDE_CREATE_TEST_MODAL, UPDATE_NEW_TEST } from './mutation-types';
import myPluginWithSnapshot from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newTest: {
            role: '',
            workExperience: 0,
            jdLink: '',
            name: '',
            duration: 0,
            testType: 'predefined'
        },
        createTestModal: false
    },
    mutations: {
        [TOGGLE_CREATE_TEST_MODAL] (state) {
            state.createTestModal = !state.createTestModal
        },
        [SHOW_CREATE_TEST_MODAL] (state) {
            state.createTestModal = true;
        },
        [HIDE_CREATE_TEST_MODAL] (state) {
            state.createTestModal = false;
        },
        [UPDATE_NEW_TEST] (state, payload) {
            state.newTest = { ...state.newTest, ...payload }
        },
    },
    actions: {

    },
    getters: {

    },
    plugins: [myPluginWithSnapshot],
    strict: true
});