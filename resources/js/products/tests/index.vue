<template>
    <mdb-container fluid>
        <mdb-row class="mt-5 align-items-center justify-content-start">
            <mdb-col>
                <h4 class="demo-title"><strong>Tests</strong></h4>
            </mdb-col>
            <mdb-col col="3">
                <mdb-btn color="success" @click.native="showCreateTestModal = true">Create Test</mdb-btn>
                <create-test-modal :test="newTest" :show-modal="showCreateTestModal" />
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

    export default {
        name: 'TestsPage',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn,
            createTestModal
        },
        data() {
            return {
                showCreateTestModal: false,
                newTest: {
                    role: '',
                    work_experience: 0,
                    jd_link: '',
                    name: '',
                    duration: 0,
                    type: 'predefined'
                }
            }
        }
    };
</script>

<style scoped>
</style>
