import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import myPluginWithSnapshot from './plugins';
import { TOGGLE_LEFT_DRAWER } from './mutation-types';

Vue.use(Vuex);

const getIndexFromId = (array, id) => {
    let indices = [...Array(array.length).keys()].filter(index => array[index].id === id);
    if(indices.length > 0) return indices[0];
    else return -1;
};

export default new Vuex.Store({
    state: {
        leftDrawer: true,
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
        tests: [
            {
                id: 0,
                name: 'Dummy Test',
                jobProfileId: 1,
                workExperienceTypeId: 1,
                duration: 6,
                questionIds: [1, 2, 3],
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
        activeTests: state => {
            return state.tests.filter(({active}) => active);
        },
        archivedTests: state => {
            return state.tests.filter(({active}) => !active);
        },
        getTestIndexFromId: state => id => {
            return getIndexFromId(state.tests, id);
        },
        getTestFromId: state => id => {
            return state.tests[getIndexFromId(state.tests, id)];
        },
        getJobProfileIndexFromId: state => id => {
            return getIndexFromId(state.jobProfiles, id);
        },
        getJobProfileFromId: state => id => {
            return state.jobProfiles[getIndexFromId(state.jobProfiles, id)];
        },
        getWorkExperienceTypeIndexFromId: state => id => {
            return getIndexFromId(state.workExperienceTypes, id);
        },
        getWorkExperienceTypeFromId: state => id => {
            return state.workExperienceTypes[getIndexFromId(state.workExperienceTypes, id)];
        }
    },
    plugins: [myPluginWithSnapshot],
    strict: true
});