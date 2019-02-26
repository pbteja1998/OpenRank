<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <mdb-container fluid class="custom-flex-css">
        <main-header>
            <template v-slot:title>Tests</template>

            <mdb-breadcrumb>
                <mdb-breadcrumb-item><router-link to="/tests">Tests</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item active>Active</mdb-breadcrumb-item>
            </mdb-breadcrumb>

            <template v-slot:others>
                <mdb-btn color="success" @click="showModal" class="float-right mr-5">Create Test</mdb-btn>
                <create-test-modal />
            </template>
        </main-header>

        <hr />

        <main-content>
            <template v-slot:leftSideBar>
                <div class="form-group px-5 pt-5 pb-3 m-0">
                    <input class="form-control" type="text" placeholder="Search for a test.." aria-label="Search" v-model="searchTest" />
                </div>
                <mdb-accordion :panes="leftSideBarPanes" custom/>
            </template>

            <mdb-list-group>
                <mdb-list-group-item href="#" :action="true" class="flex-row text-black-50" style="align-items: flex-start!important;" v-for="test in filteredTests" :key="test.id" v-if="test.id !== 0">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" :id="test.id" :checked="test.checked" @input="updateCheckedState(test)" style="display: none;" />
                        <label class="form-check-label" :for="test.id"></label>
                    </div>
                    <div class="d-flex flex-column w-100 justify-content-between" @click="selectTestAndNavigate(test.id)" style="cursor: pointer;">
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
    import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbInput, mdbListGroup, mdbListGroupItem, mdbIcon, mdbBreadcrumb, mdbBreadcrumbItem } from 'mdbvue';
    import { createTestModal } from './modals';
    import { mainHeader, mainContent, mdbAccordion, mdbAccordionPane } from '../../components';

    import { mapMutations, mapState } from 'vuex';
    import { SHOW_CREATE_TEST_MODAL, CHANGE_CURRENT_TEST, TOGGLE_TEST_CHECKED_STATE } from '../../store/mutation-types';
    import notifications from 'vue-notification';

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
            mdbIcon,
            mdbBreadcrumb,
            mdbBreadcrumbItem,
            notifications
        },
        methods: {
            ...mapMutations({
                showModal: SHOW_CREATE_TEST_MODAL,
                selectTest: CHANGE_CURRENT_TEST,
                toggleCheckedState: TOGGLE_TEST_CHECKED_STATE
            }),
            selectTestAndNavigate: function (id) {
                this.selectTest({id: id});
                this.$router.push('/tests/preview/' + id);
            },
            updateCheckedState(test) {
                // undo the action done as the state is not yet updated
                document.getElementById(test.id).checked = !document.getElementById(test.id).checked;

                // change the checked state through a mutation
                this.toggleCheckedState({testId: test.id});
            }
        },
        computed: {
            ...mapState([
               'tests'
            ]),
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
                searchTest: ''
            };
        }
    };
</script>

<style scoped>
</style>
