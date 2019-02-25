import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import { TOGGLE_CREATE_TEST_MODAL, SHOW_CREATE_TEST_MODAL, HIDE_CREATE_TEST_MODAL, UPDATE_NEW_TEST, SELECT_TEST, ADD_QUESTIONS_TO_TEST } from './mutation-types';
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
        selectedTestId: 1,
        tests: [
            {
                id: 0,
                name: 'Dummy Test',
                role: 'Dummy Role',
                workExperience: 0,
                duration: 0,
                checked: false,
                questionIds: []
            },
            {
                id: 1,
                name: 'HackerRank Hiring Test',
                role: 'Software Development Internship',
                workExperience: 0,
                duration: 90,
                checked: false,
                questionIds: []
            },
            {
                id: 2,
                name: 'HackerRank Software Developer Hiring Test',
                role: 'Software Developer',
                workExperience: 3,
                duration: 60,
                checked: false,
                questionIds: []
            },
            {
                id: 3,
                name: 'InterviewBit Software Developer Hiring Test',
                role: 'Software Developer',
                workExperience: 1,
                duration: 75,
                checked: false,
                questionIds: []
            },
            {
                id: 4,
                name: 'HackerEarth IIIT-H Campus Placements Hiring Test',
                role: 'Software Developer',
                workExperience: 0,
                duration: 60,
                checked: false,
                questionIds: []
            },
            {
                id: 5,
                name: 'HackerRank Campus Placements',
                role: 'Software Developer',
                workExperience: 0,
                duration: 60,
                checked: false,
                questionIds: []
            },
        ],
        questions: [
            {
                id: 1,
                name: 'Student Rank',
                topic: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false
            },
            {
                id: 2,
                name: 'Merge Strings',
                topic: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false
            },
            {
                id: 3,
                name: 'Long Break',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false
            },
            {
                id: 4,
                name: 'Maximum Difference in an Array',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 5,
                name: 'Braces',
                topic: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 6,
                name: 'Student Rank-2',
                topic: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false
            },
            {
                id: 7,
                name: 'Merge Strings-2',
                topic: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false
            },
            {
                id: 8,
                name: 'Long Break-2',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false
            },
            {
                id: 9,
                name: 'Maximum Difference in an Array-2',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 10,
                name: 'Braces-2',
                topic: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 11,
                name: 'Student Rank-3',
                topic: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false
            },
            {
                id: 12,
                name: 'Merge Strings-3',
                topic: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false
            },
            {
                id: 13,
                name: 'Long Break-3',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false
            },
            {
                id: 14,
                name: 'Maximum Difference in an Array-3',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 15,
                name: 'Braces-3',
                topic: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 16,
                name: 'Student Rank-4',
                topic: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false
            },
            {
                id: 17,
                name: 'Merge Strings-4',
                topic: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false
            },
            {
                id: 18,
                name: 'Long Break-4',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false
            },
            {
                id: 19,
                name: 'Maximum Difference in an Array-4',
                topic: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false
            },
            {
                id: 20,
                name: 'Braces-4',
                topic: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false
            },
        ],
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
        [SELECT_TEST] (state, payload) {
            state.selectedTestId = payload.id;
        },
        [ADD_QUESTIONS_TO_TEST] (state, payload) {
        }
    },
    actions: {

    },
    getters: {
        selectedTest: state => {
            let tests = state.tests.filter(test => test.id === state.selectedTestId);
            if(tests.length > 0) return tests[0];
            return null;
        }
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});