<template>
    <mdb-modal size="lg" v-if="createTestModal" @close="closeModal" centered>
        <mdb-modal-header>
            <mdb-modal-title>Create a New Test</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
            <mdb-container>
                <mdb-row>
                    <mdb-col col="8">
                        <div class="md-form">
                            <label class="mr-5 active">What role is this test for?</label>
                            <v-select :options="jobProfiles" label="name" v-model="roles" multiple class="pt-2"></v-select>
                        </div>
                    </mdb-col>
                    <mdb-col>
                        <div class="md-form">
                            <label class="active mr-5">Work Experience</label>
                            <v-select :options="workExperiences" label="name" v-model="workExperience" class="pt-2"></v-select>
                        </div>
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col>
                        <mdb-input type="text" label="Job Description Link" v-model="jdLink" />
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col col="8">
                        <mdb-input type="text" label="Test Name" v-model="name" />
                    </mdb-col>
                    <mdb-col>
                        <mdb-input type="number" label="Duration (mins)" v-model="duration" />
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col>
                        <div class="custom-control custom-radio">
                            <mdb-row>
                                <mdb-col>
                                    <input type="radio" class="custom-control-input" value="predefined" v-model="testType" id="predefined">
                                    <label class="custom-control-label" for="predefined">Predefined Test</label>
                                    <p class="text-left text-muted" style="font-size: 0.8rem;">
                                        Automatically generate a test based on job role and experience
                                    </p>
                                </mdb-col>
                                <mdb-col>
                                    <input type="radio" class="custom-control-input" value="custom" v-model="testType" id="custom">
                                    <label class="custom-control-label" for="custom">Build your own test</label>
                                    <p class="text-left text-muted" style="font-size: 0.8rem;">
                                        Set-up a test with questions from library or create your own
                                    </p>
                                </mdb-col>
                            </mdb-row>
                        </div>
                    </mdb-col>
                </mdb-row>

            </mdb-container>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="secondary" @click="closeModal">Close</mdb-btn>
            <mdb-btn color="success">Create Test</mdb-btn>
        </mdb-modal-footer>
    </mdb-modal>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbNumericInput, mdbModalFooter} from 'mdbvue';
    import { mapState, mapMutations } from 'vuex';
    import { HIDE_CREATE_TEST_MODAL, UPDATE_NEW_TEST } from '../../../store/mutation-types';
    import vSelect from 'vue-select';

    export default {
        name: 'createTestModal',
        computed: {
            ...mapState([
                'newTest',
                'createTestModal',
                'jobProfiles',
                'workExperiences'
            ]),
            roles: {
                get () {
                    return this.newTest.roles;
                },
                set (newTestRoles) {
                    return this.updateTest({
                        roles: newTestRoles
                    });
                }
            },
            workExperience: {
                get () {
                    return this.newTest.workExperience;
                },
                set (value) {
                    return this.updateTest({
                        workExperience: value
                    });
                }
            },
            jdLink: {
                get () {
                    return this.newTest.jdLink;
                },
                set (value) {
                    return this.updateTest({
                        jdLink: value
                    });
                }
            },
            name: {
                get () {
                    return this.newTest.name;
                },
                set (value) {
                    return this.updateTest({
                        name: value
                    });
                }
            },
            duration: {
                get () {
                    return this.newTest.duration;
                },
                set (value) {
                    return this.updateTest({
                        duration: value
                    });
                }
            },
            testType: {
                get () {
                    return this.newTest.testType;
                },
                set (value) {
                    return this.updateTest({
                        testType: value
                    });
                }
            }
        },
        methods: {
            ...mapMutations({
                closeModal : HIDE_CREATE_TEST_MODAL,
                updateTest: UPDATE_NEW_TEST
            })
        },
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn,
            mdbModal,
            mdbModalHeader,
            mdbModalTitle,
            mdbModalBody,
            mdbInput,
            mdbNumericInput,
            mdbModalFooter,
            vSelect
        },
        data() {
            return {

            }
        }
    };
</script>

<style scoped>

</style>