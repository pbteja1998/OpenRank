<template>
    <mdb-container>
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
        <mdb-container class="mt-5">

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
