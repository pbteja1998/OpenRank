<template>
    <mdb-container fluid>
        <mdb-row class="mt-5 align-items-center justify-content-start">
            <mdb-col>
                <h4 class="demo-title"><strong>Tests</strong></h4>
            </mdb-col>
            <mdb-col col="3">
                <mdb-btn color="success" @click="showModal">Create Test</mdb-btn>
                <create-test-modal />
            </mdb-col>
        </mdb-row>
        <hr />
        <mdb-container class="mt-5" fluid>
            <mdb-row>
                <mdb-col>
                    <h3>Left Side Navigation Menu goes here.</h3>
                </mdb-col>

                <mdb-col col="8">
                    <h1>The Main Content of Tests Product Goes Here. The left side and right side of this container will have side bar navigation menus.</h1>
                </mdb-col>

                <mdb-col>
                    <h3>Right Side Navigation Menu goes here.</h3>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
    import createTestModal from './modals/createTestModal.vue';
    import { mapMutations } from 'vuex';
    import { SHOW_CREATE_TEST_MODAL } from '../../store/mutation-types';

    export default {
        name: 'TestsPage',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn,
            createTestModal
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
