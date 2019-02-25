<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <mdb-container fluid class="custom-flex-css">
        <main-header>
            <template v-slot:title>Tests</template>

            <template v-slot:others>
                <mdb-btn color="success" @click="showModal">Create Test</mdb-btn>
                <create-test-modal />
            </template>
        </main-header>

        <hr />

        <main-content>
            <template v-slot:leftSideBar>
                <mdb-accordion :panes="leftSideBarPanes" custom/>
            </template>

            <h1>This is the main content</h1>

            <template v-slot:rightSideBar>
                <mdb-accordion :panes="rightSideBarPanes" custom/>
            </template>
        </main-content>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
    import { createTestModal } from './modals';
    import { mainHeader, mainContent, mdbAccordion, mdbAccordionPane } from '../../components';

    import { mapMutations } from 'vuex';
    import { SHOW_CREATE_TEST_MODAL } from '../../store/mutation-types';

    export default {
        name: 'TestsPage',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn,
            createTestModal,
            mainContent,
            mainHeader,
            mdbAccordion,
            mdbAccordionPane
        },
        methods: {
            ...mapMutations({
                showModal: SHOW_CREATE_TEST_MODAL
            })
        },
        data() {
            return {
                leftSideBarPanes: [
                    {
                        title: 'Labels',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Owner',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Role',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Work Experience',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
               ],
                rightSideBarPanes: [
                    {
                        title: 'Difficulty',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Type',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Tags',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                    {
                        title: 'Languages',
                        content: 'Anim pariatur cliche reprehenderit,',
                    },
                ]
            };
        }
    };
</script>

<style scoped>

</style>
