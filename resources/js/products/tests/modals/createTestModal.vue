<template>
    <mdb-modal size="lg" v-if="showModal" @close="showModal = false" centered>
        <mdb-modal-header>
            <mdb-modal-title>Create a New Test</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
            <mdb-container>
                <mdb-row>
                    <mdb-col col="8">
                        <mdb-input type="text" label="What role is this test for?" v-model="test.role" />
                    </mdb-col>
                    <mdb-col>
                        <div class="md-form">
                            <!--<mdb-numeric-input :min="0" :max="5" :emptyValue="0" />-->
                            <!--<label class="active mr-5">Work Experience (years)</label>-->
                            <mdb-input type="number" label="Experience (years)" v-model="test.work_experience" />
                        </div>
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col>
                        <mdb-input type="text" label="Job Description Link" v-model="test.jd_link" />
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col col="8">
                        <mdb-input type="text" label="Test Name" v-model="test.name" />
                    </mdb-col>
                    <mdb-col>
                        <mdb-input type="number" label="Duration (mins)" v-model="test.duration" />
                    </mdb-col>
                </mdb-row>

                <mdb-row>
                    <mdb-col>
                        <div class="custom-control custom-radio">
                            <mdb-row>
                                <mdb-col>
                                    <input type="radio" class="custom-control-input" value="predefined" v-model="test.type" id="predefined">
                                    <label class="custom-control-label" for="predefined">Predefined Test</label>
                                    <p class="text-left text-muted" style="font-size: 0.8rem;">
                                        Automatically generate a test based on job role and experience
                                    </p>
                                </mdb-col>
                                <mdb-col>
                                    <input type="radio" class="custom-control-input" value="custom" v-model="test.type" id="custom">
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
            <mdb-btn color="secondary" @click.native="showModal = false">Close</mdb-btn>
            <mdb-btn color="success">Create Test</mdb-btn>
        </mdb-modal-footer>
    </mdb-modal>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbNumericInput, mdbModalFooter} from 'mdbvue';

    export default {
        name: 'createTestModal',
        props: {
          test: {
              type: Object,
              default: function() {
                  return {
                      role: '',
                      work_experience: 0,
                      jd_link: '',
                      name: '',
                      duration: 0,
                      type: 'predefined'
                  }
              }
          },
          showModal: {
              type: Boolean,
              default: false
          }
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
        },
        data() {
            return {
            }
        }
    };
</script>

<style scoped>
</style>