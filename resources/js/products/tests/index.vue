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
                <h1>Left Side Bar</h1>
            </template>

            <h1>This is the main content</h1>

            <template v-slot:rightSideBar>
                <h1>Right Side Bar</h1>
            </template>
        </main-content>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
    import { createTestModal } from './modals';
    import { mainHeader, mainContent } from '../../components';

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
            mainHeader
        },
        methods: {
            ...mapMutations({
                showModal: SHOW_CREATE_TEST_MODAL
            })
        },
        data() {
            return {
            }
        }
    };
</script>

<style scoped>

</style>
