import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import myPluginWithSnapshot from './plugins';
import {
    TOGGLE_LEFT_DRAWER,
    SET_CURRENT_TEST,
    SET_LEFT_SIDEBAR_TAB_ID,
    SELECT_QUESTION,
    UNSELECT_QUESTION,
    SAVE_TEST_QUESTIONS
} from './mutation-types';

Vue.use(Vuex);

const getIndexFromId = (array, id) => {
    // let indices = [...Array(array.length).keys()].filter(index => array[index].id === id);
    let indices = getIndicesFromId(array, [id]);
    if(indices.length > 0) return indices[0];
    else return -1;
};

const getIndicesFromId = (array, ids) => {
    return [...Array(array.length).keys()].filter(index => ids.includes(array[index].id));
};

export default new Vuex.Store({
    state: {
        leftDrawer: true,
        leftSidebarTabId: 0,
        searchFilter: '',
        currentTestId: 0,
        jobProfiles: [
            {
                id: 1,
                title: 'Software Developer',
            },
            {
                id: 2,
                title: 'Full-stack Developer',
            },
            {
                id: 3,
                title: 'Front-end Developer',
            },
            {
                id: 4,
                title: 'Back-end Developer',
            },
            {
                id: 5,
                title: 'C++ Developer',
            },
            {
                id: 6,
                title: 'Python Developer',
            },
            {
                id: 7,
                title: 'Java Developer'
            },
        ],
        workExperienceTypes: [
            {
                id: 1,
                title: 'Intern'
            },
            {
                id: 2,
                title: 'New Graduate'
            },
            {
                id: 3,
                title: '0-2 years'
            },
            {
                id: 4,
                title: '2-5 years'
            },
            {
                id: 5,
                title: '>5 years'
            },
            {
                id: 6,
                title: 'All Experience Levels'
            },
        ],
        difficultyTypes: [
            {
                id: 1,
                title: 'Easy'
            },
            {
                id: 2,
                title: 'Medium'
            },
            {
                id: 3,
                title: 'Hard'
            }
        ],
        questionTypes: [
            {
                id: 1,
                title: 'Coding'
            },
            {
                id: 2,
                title: 'Database'
            }
        ],
        questionTags: [
            {
                id: 1,
                title: 'Role Based'
            },
            {
                id: 2,
                title: 'Selection'
            },
            {
                id: 3,
                title: 'Databases'
            },
            {
                id: 4,
                title: 'SQL'
            },
            {
                id: 5,
                title: 'Problem Solving'
            },
            {
                id: 6,
                title: 'Core Skills'
            },
            {
                id: 7,
                title: 'General Programming'
            },
            {
                id: 8,
                title: 'Data Structures'
            },
            {
                id: 9,
                title: 'Greedy'
            },
            {
                id: 10,
                title: 'Arrays'
            },
            {
                id: 11,
                title: 'Algorithms'
            },
            {
                id: 12,
                title: 'Stacks'
            },
        ],
        languages: [
            {
                id: 1,
                title: 'C'
            },
            {
                id: 2,
                title: 'C++'
            },
            {
                id: 3,
                title: 'C++14'
            },
            {
                id: 4,
                title: 'Python'
            },
            {
                id: 5,
                title: 'Java'
            },
        ],
        tests: [
            {
                id: 0,
                name: 'Dummy Test',
                jobProfileId: 1,
                workExperienceTypeId: 1,
                duration: 6,
                questionIds: [1, 2, 3, 4, 5, 6],
                published: false,
                active: false
            },
            {
                id: 1,
                name: 'HackerRank Hiring Test',
                jobProfileId: 2,
                workExperienceTypeId: 3,
                duration: 90,
                questionIds: [],
                published: false,
                active: true
            },
            {
                id: 2,
                name: 'HackerRank Software Developer Hiring Test',
                jobProfileId: 3,
                workExperienceTypeId: 5,
                duration: 60,
                questionIds: [],
                published: false,
                active: true
            },
            {
                id: 3,
                name: 'InterviewBit Software Developer Hiring Test',
                jobProfileId: 4,
                workExperienceTypeId: 4,
                duration: 75,
                questionIds: [],
                published: false,
                active: true
            },
            {
                id: 4,
                name: 'HackerEarth IIIT-H Campus Placements Hiring Test',
                jobProfileId: 5,
                workExperienceTypeId: 2,
                duration: 60,
                questionIds: [],
                published: false,
                active: true
            },
            {
                id: 5,
                name: 'HackerRank Campus Internships',
                jobProfileId: 6,
                workExperienceTypeId: 1,
                duration: 60,
                questionIds: [],
                published: false,
                active: true
            },
            {
                id: 6,
                name: 'HackerRank Campus Placements',
                jobProfileId: 7,
                workExperienceTypeId: 2,
                duration: 60,
                questionIds: [],
                published: false,
                active: true
            },
        ],
        selectedQuestionIds: [],
        questions: [
            {
                id: 1,
                name: 'Student Rank',
                questionTypeId: 2,
                difficultyTypeId: 1,
                questionTagIds: [1, 2, 3, 4],
                languageIds: [1, 2, 3, 4, 5],
                points: 50
            },
            {
                id: 2,
                name: 'Merge Strings',
                questionTypeId: 1,
                difficultyTypeId: 1,
                questionTagIds: [5, 6, 7],
                languageIds: [1, 2, 3, 4, 5],
                points: 100
            },
            {
                id: 3,
                name: 'Long Break',
                questionTypeId: 1,
                difficultyTypeId: 2,
                questionTagIds: [6, 8, 9, 10],
                languageIds: [1, 2, 3, 4, 5],
                points: 90
            },
            {
                id: 4,
                name: 'Maximum Difference in an Array',
                questionTypeId: 1,
                difficultyTypeId: 3,
                questionTagIds: [5, 6, 10, 11, 8],
                languageIds: [1, 2, 3, 4, 5],
                points: 500
            },
            {
                id: 5,
                name: 'Braces',
                questionTypeId: 1,
                difficultyTypeId: 1,
                questionTagIds: [5, 6, 12, 11, 8, 10],
                languageIds: [1, 2, 3, 4, 5],
                points: 50
            },
            {
                id: 6,
                name: 'Braces Extended',
                questionTypeId: 1,
                difficultyTypeId: 1,
                questionTagIds: [5, 6, 12, 11, 8, 10],
                languageIds: [1, 2, 3, 4, 5],
                points: 50
            },
        ],
    },
    mutations: {
        [TOGGLE_LEFT_DRAWER] (state, payload) {
            if(payload.leftDrawer === undefined) {
                state.leftDrawer = !state.leftDrawer
            } else {
                state.leftDrawer = payload.leftDrawer
            }
        },
        [SET_CURRENT_TEST] (state, payload) {
            state.currentTestId = payload.testId;
        },
        [SET_LEFT_SIDEBAR_TAB_ID] (state, payload) {
            state.leftSidebarTabId = payload.tabId;
        },
        [SELECT_QUESTION] (state, payload) {
            state.selectedQuestionIds.push(payload.questionId);
        },
        [UNSELECT_QUESTION] (state, payload) {
            state.selectedQuestionIds = state.selectedQuestionIds.filter(questionId => questionId !== payload.questionId);
        },
        [SAVE_TEST_QUESTIONS] (state) {
            let testIndex = getIndexFromId(state.tests, state.currentTestId);

            // REFERENCE: https://vuejs.org/v2/guide/list.html#Caveats
            Vue.set(state.tests, testIndex, { ...state.tests[testIndex], questionIds: state.selectedQuestionIds});
        }
    },
    actions: {
    },
    getters: {
        currentTest: state => {
            return state.tests[getIndexFromId(state.tests, state.currentTestId)];
        },
        activeTests: state => {
            return state.tests.filter(({active}) => active);
        },
        archivedTests: state => {
            return state.tests.filter(({active}) => !active);
        },
        getTestIndexFromId: state => testId => {
            return getIndexFromId(state.tests, testId);
        },
        getTestFromId: (state, getters) => testId => {
            return state.tests[getters.getTestFromId(testId)];
        },
        getJobProfileIndex: state => jobProfileId => {
            return getIndexFromId(state.jobProfiles, jobProfileId);
        },
        getJobProfileFromId: (state, getters) => jobProfileId => {
            return state.jobProfiles[getters.getJobProfileIndex(jobProfileId)];
        },
        getWorkExperienceTypeIndexFromId: state => workExperienceTypeId => {
            return getIndexFromId(state.workExperienceTypes, workExperienceTypeId);
        },
        getWorkExperienceTypeFromId: (state, getters) => workExperienceTypeId => {
            return state.workExperienceTypes[getters.getWorkExperienceTypeIndexFromId(workExperienceTypeId)];
        },
        getQuestionTypeIndex: state => questionTypeId => {
            return getIndexFromId(state.questionTypes, questionTypeId);
        },
        getQuestionType: (state, getters) => questionTypeId => {
            return state.questionTypes[getters.getQuestionTypeIndex(questionTypeId)];
        },
        getDifficultyTypeIndex: state => difficultyTypeId => {
            return getIndexFromId(state.difficultyTypes, difficultyTypeId);
        },
        getDifficultyType: (state, getters) => difficultyTypeId => {
            return state.difficultyTypes[getters.getDifficultyTypeIndex(difficultyTypeId)];
        },
        getQuestionTagIndices: state => questionTagIds => {
            return getIndicesFromId(state.questionTags, questionTagIds);
        },
        getQuestionTags: state => questionTagIds => {
            return state.questionTags.filter(tag => questionTagIds.includes(tag.id));
        },
        selectedQuestions: state => {
            return state.questions.filter(question => state.selectedQuestionIds.includes(question.id));
        },
        nonSelectedQuestions: state => {
            return state.questions.filter(question => !state.selectedQuestionIds.includes(question.id));
        },
        currentTestQuestions: (state, getters) => {
            return state.questions.filter(question => getters.currentTest.questionIds.includes(question.id));
        }
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});