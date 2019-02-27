import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import {
    TOGGLE_CREATE_TEST_MODAL,
    SHOW_CREATE_TEST_MODAL,
    HIDE_CREATE_TEST_MODAL,
    UPDATE_NEW_TEST,
    CHANGE_CURRENT_TEST,
    TOGGLE_TEST_CHECKED_STATE,
    TOGGLE_QUESTION_SELECTION,
    SELECT_QUESTION,
    UNSELECT_QUESTION,
    ADD_QUESTIONS_TO_TEST,
    PUBLISH_CURRENT_TEST,
    PUBLISH_TEST
} from './mutation-types';
import myPluginWithSnapshot from './plugins';

Vue.use(Vuex);

const getIndexFromId = (array, id) => {
    let indices = [...Array(array.length).keys()].filter(index => array[index].id === id);
    if(indices.length > 0) return indices[0];
    else return 0;
};

const selectedItems = items => {
    return items.filter(item => item.selected);
};

const unSelectedItems = items => {
    return items.filter(item => !item.selected);
};

export default new Vuex.Store({
    state: {
        newTest: {
            roles: [],
            workExperience: 0,
            jdLink: '',
            name: '',
            duration: 0,
            testType: 'predefined'
        },
        currentTestId: 0,
        jobProfiles: [
            {
                name: 'Software Developer',
                id: 1
            },
            {
                name: 'Full Stack Developer',
                id: 2
            },
            {
                name: 'Frontend Developer',
                id: 3
            },
            {
                name: 'Backend Developer',
                id: 4
            },
            {
                name: 'C++ Developer',
                id: 5
            },
            {
                name: 'Python Developer',
                id: 6
            },
            {
                name: 'Java Developer',
                id: 7
            },
        ],
        workExperiences: [
            {
                name: 'Intern',
                id: 1
            },
            {
                name: 'New Graduate',
                id: 2
            },
            {
                name: '0-2 years',
                id: 3
            },
            {
                name: '2-5 years',
                id: 4
            },
            {
                name: '>5 years',
                id: 5
            },
            {
                name: 'All Experience Levels',
                id: 6
            },
        ],
        tests: [
            {
                id: 0,
                name: 'Dummy Test',
                role: 'Dummy Role',
                workExperience: 0,
                duration: 0,
                checked: false,
                questionIds: [1, 2, 3],
                published: false
            },
            {
                id: 1,
                name: 'HackerRank Hiring Test',
                role: 'Software Development Internship',
                workExperience: 0,
                duration: 90,
                checked: false,
                questionIds: [],
                published: false
            },
            {
                id: 2,
                name: 'HackerRank Software Developer Hiring Test',
                role: 'Software Developer',
                workExperience: 3,
                duration: 60,
                checked: false,
                questionIds: [],
                published: false
            },
            {
                id: 3,
                name: 'InterviewBit Software Developer Hiring Test',
                role: 'Software Developer',
                workExperience: 1,
                duration: 75,
                checked: false,
                questionIds: [],
                published: false
            },
            {
                id: 4,
                name: 'HackerEarth IIIT-H Campus Placements Hiring Test',
                role: 'Software Developer',
                workExperience: 0,
                duration: 60,
                checked: false,
                questionIds: [],
                published: false
            },
            {
                id: 5,
                name: 'HackerRank Campus Placements',
                role: 'Software Developer',
                workExperience: 0,
                duration: 60,
                checked: false,
                questionIds: [],
                published: false
            },
        ],
        questions: [
            {
                id: 1,
                name: 'Student Rank',
                type: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false,
                marks: 50
            },
            {
                id: 2,
                name: 'Merge Strings',
                type: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false,
                marks: 500
            },
            {
                id: 3,
                name: 'Long Break',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false,
                marks: 50
            },
            {
                id: 4,
                name: 'Maximum Difference in an Array',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 500
            },
            {
                id: 5,
                name: 'Braces',
                type: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
            },
            {
                id: 6,
                name: 'Student Rank-2',
                type: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false,
                marks: 500
            },
            {
                id: 7,
                name: 'Merge Strings-2',
                type: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false,
                marks: 50
            },
            {
                id: 8,
                name: 'Long Break-2',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false,
                marks: 500
            },
            {
                id: 9,
                name: 'Maximum Difference in an Array-2',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
            },
            {
                id: 10,
                name: 'Braces-2',
                type: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
            },
            {
                id: 11,
                name: 'Student Rank-3',
                type: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false,
                marks: 50
            },
            {
                id: 12,
                name: 'Merge Strings-3',
                type: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false,
                marks: 500
            },
            {
                id: 13,
                name: 'Long Break-3',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false,
                marks: 50
            },
            {
                id: 14,
                name: 'Maximum Difference in an Array-3',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 500
            },
            {
                id: 15,
                name: 'Braces-3',
                type: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
            },
            {
                id: 16,
                name: 'Student Rank-4',
                type: 'Database',
                difficulty: 'EASY',
                tags: ['Role Based', 'Selection', 'Databases', 'SQL'],
                selected: false,
                marks: 500
            },
            {
                id: 17,
                name: 'Merge Strings-4',
                type: 'Coding',
                difficulty: 'EASY',
                tags: ['Problem Solving', 'Core Skills', 'General Programming', 'Strings'],
                selected: false,
                marks: 50
            },
            {
                id: 18,
                name: 'Long Break-4',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Core Skills', 'Data Structures', 'Greedy', 'Arrays'],
                selected: false,
                marks: 50
            },
            {
                id: 19,
                name: 'Maximum Difference in an Array-4',
                type: 'Coding',
                difficulty: 'MEDIUM',
                tags: ['Problem Solving', 'Core Skills', 'Arrays', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
            },
            {
                id: 20,
                name: 'Braces-4',
                type: 'Coding',
                difficulty: 'HARD',
                tags: ['Problem Solving', 'Core Skills', 'Stacks', 'Algorithms', 'Data Structures'],
                selected: false,
                marks: 50
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
        [CHANGE_CURRENT_TEST] (state, payload) {
            state.currentTestId = payload.id;
        },
        [TOGGLE_TEST_CHECKED_STATE] (state, payload) {
            let testIndex = getIndexFromId(state.tests, payload.testId);
            state.tests[testIndex].checked = !state.tests[testIndex].checked;
        },
        [TOGGLE_QUESTION_SELECTION] (state, payload) {
            let questionIndex = getIndexFromId(state.questions, payload.questionId);
            state.questions[questionIndex].selected = !state.questions[questionIndex].selected;
        },
        [SELECT_QUESTION] (state, payload) {
            let questionIndex = getIndexFromId(state.questions, payload.questionId);
            state.questions[questionIndex].selected = true;
        },
        [UNSELECT_QUESTION] (state, payload) {
            let questionIndex = getIndexFromId(state.questions, payload.questionId);
            state.questions[questionIndex].selected = false;
        },
        [ADD_QUESTIONS_TO_TEST] (state) {
            let selectedQuestionIds = selectedItems(state.questions).map(({id}) => id);
            let currentTestIndex = getIndexFromId(state.tests, state.currentTestId);
            state.tests[currentTestIndex].questionIds = selectedQuestionIds;
        },
        [PUBLISH_CURRENT_TEST] (state) {
            let currentTestIndex = getIndexFromId(state.tests, state.currentTestId);
            state.tests[currentTestIndex].published = true;
        },
        [PUBLISH_TEST] (state, payload) {
            let testIndex = getIndexFromId(state.tests, payload.testId);
            state.tests[testIndex].published = true;
        }
    },
    actions: {

    },
    getters: {
        currentTest: state => {
            return state.tests[getIndexFromId(state.tests, state.currentTestId)];
        },
        selectedQuestions: state => {
            return selectedItems(state.questions);
        },
        unSelectedQuestions: state => {
            return unSelectedItems(state.questions);
        },
        currentTestQuestions: (state, getters) => {
            return state.questions.filter(question => getters.currentTest.questionIds.includes(question.id));
        }
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});