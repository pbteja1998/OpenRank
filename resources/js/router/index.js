import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../products/HomePage.vue';
import { TestsPage, TestPreviewPage, ViewTestPage, SendInvitesPage } from "../products/tests";
import CodePairPage from '../products/code_pair/index.vue';
import LibraryPage from '../products/library/index.vue';
import InsightsPage from '../products/insights/index.vue';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },

        {
            path: '/tests',
            name: 'Tests',
            component: TestsPage
        },
        {
            path: '/code-pair',
            name: 'CodePair',
            component: CodePairPage
        },
        {
            path: '/library',
            name: 'Library',
            component: LibraryPage
        },
        {
            path: '/insights',
            name: 'Insights',
            component: InsightsPage
        },
        {
            path: '/tests/preview/:id',
            name: 'Test Preview',
            component: TestPreviewPage
        },
        {
            path: '/tests/:id',
            name: 'View Test',
            component: ViewTestPage
        },
        {
            path: '/tests/:id/invite',
            name: 'Send Invites',
            component: SendInvitesPage
        }
    ]
});
