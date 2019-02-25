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
                <div class="form-group px-5 pt-5 pb-5 m-0">
                    <input class="form-control" type="text" placeholder="Search for a test.." aria-label="Search" v-model="searchTest" />
                </div>
                <mdb-accordion :panes="leftSideBarPanes" custom/>
            </template>

            <mdb-list-group>
                <mdb-list-group-item href="#" :action="true" class="flex-row text-black-50" v-for="test in filteredTests" style="align-items: flex-start!important;">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" :id="test.id" style="display: none;" v-model="test.selected" :checked="test.selected">
                        <label class="form-check-label" :for="test.id"></label>
                    </div>
                    <div class="d-flex flex-column w-100 justify-content-between">
                        <h5 class="mb-1">{{ test.name }}
                            <small class="text-muted float-right">{{ test.duration }} min</small>
                        </h5>
                        <p class="mb-1">{{ test.role }}</p>
                        <small class="text-muted">0 - {{ test.workExperience }} years</small>
                    </div>
                </mdb-list-group-item>
            </mdb-list-group>

            <template v-slot:rightSideBar>
                <mdb-accordion :panes="rightSideBarPanes" custom/>
            </template>
        </main-content>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbInput, mdbListGroup, mdbListGroupItem, mdbJumbotron, mdbIcon } from 'mdbvue';
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
            mdbAccordionPane,
            mdbInput,
            mdbListGroup,
            mdbListGroupItem,
            mdbJumbotron,
            mdbIcon
        },
        methods: {
            ...mapMutations({
                showModal: SHOW_CREATE_TEST_MODAL
            })
        },
        computed: {
            filteredTests() {
                return this.tests.filter(test => {
                    return test.name.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                        test.role.toLowerCase().includes(this.searchTest.toLowerCase());
                })
            }
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
                ],
                searchTest: '',
                tests: [
                    {
                        id: 1,
                        name: 'HackerRank Hiring Test',
                        role: 'Software Development Internship',
                        workExperience: 0,
                        duration: 90,
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'HackerRank Software Developer Hiring Test',
                        role: 'Software Developer',
                        workExperience: 3,
                        duration: 60,
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'InterviewBit Software Developer Hiring Test',
                        role: 'Software Developer',
                        workExperience: 1,
                        duration: 75,
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'HackerEarth IIIT-H Campus Placements Hiring Test',
                        role: 'Software Developer',
                        workExperience: 0,
                        duration: 60,
                        selected: false
                    },
                    {
                        id: 5,
                        name: 'HackerRank Campus Placements',
                        role: 'Software Developer',
                        workExperience: 0,
                        duration: 60,
                        selected: false
                    },
                ]
            };
        }
    };
</script>

<style scoped>

</style>
