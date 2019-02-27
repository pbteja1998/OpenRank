<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <mdb-container fluid class="custom-flex-css">
        <main-header>
            <template v-slot:title>Tests</template>
            <mdb-breadcrumb>
                <mdb-breadcrumb-item><router-link to="/tests">Tests</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item><router-link :to="'/tests/preview/' + currentTest.id">{{ currentTest.name }}</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item active>Library - HackerRank</mdb-breadcrumb-item>
            </mdb-breadcrumb>

            <template v-slot:others>
                <router-link :to="'/tests/' + currentTest.id"><mdb-btn color="default" @click="goToTest()" class="float-right mr-5">Go to test</mdb-btn></router-link>
            </template>
        </main-header>

        <hr />

        <main-content>
            <template v-slot:leftSideBar>
                <div class="form-group px-5 pt-5 pb-3 m-0">
                    <input class="form-control" type="text" placeholder="Search for a question.." aria-label="Search" v-model="searchQuestion" />
                </div>
                <mdb-accordion :panes="leftSideBarPanes" custom/>
            </template>

            <mdb-list-group>
                <mdb-list-group-item href="#" :action="true" class="flex-column text-black-50" v-for="question in filteredQuestions" :key="question.id" style="align-items: flex-start!important;">
                    <div class="d-flex flex-row w-100 justify-content-between">
                        <h5 class="mb-1">{{ question.name }}
                            <!--<small class="text-muted float-right">{{ test.duration }} min</small>-->
                        </h5>
                        <button class="btn btn-success btn-sm" @click="selectQuestion({questionId: question.id})"><mdb-icon icon="plus"></mdb-icon></button>
                    </div>
                    <div class="d-flex flex-row w-100 align-items-start">
                        <button class="btn btn-sm" style="color: black;">{{ question.type }}</button>
                        <button class="btn btn-success btn-sm" v-if="question.difficulty === 'EASY'">{{ question.difficulty }}</button>
                        <button class="btn btn-warning btn-sm" v-else-if="question.difficulty === 'MEDIUM'">{{ question.difficulty }}</button>
                        <button class="btn btn-danger btn-sm" v-else>{{ question.difficulty }}</button>
                        <span v-for="tag in question.tags">
                            <button class="btn btn-info btn-sm">{{ tag }}</button>
                        </span>
                    </div>
                </mdb-list-group-item>
            </mdb-list-group>

            <template v-slot:rightSideBar>
                <div class="p-3" style="letter-spacing: 0.01rem;font-weight: bold;color: rgb(109, 109, 109);">
                    <h5>TEST PREVIEW</h5>
                    <p class="text-sm">Duration: {{ currentTest.duration }} mins</p>
                </div>
                <mdb-list-group>
                    <mdb-list-group-item href="#" :action="true" class="flex-column text-black-50" v-for="question in selectedQuestions" :key="question.id" style="align-items: flex-start!important;">
                        <div class="d-flex flex-row w-100 justify-content-between">
                            <h5 class="mb-1">{{ question.name | truncate(20) }}</h5>
                            <button class="btn btn-danger btn-sm" @click="unSelectQuestion({questionId: question.id})"><mdb-icon icon="minus"></mdb-icon></button>
                        </div>
                        <div class="d-flex flex-row w-100 align-items-start">
                            <button class="btn btn-sm" style="color: black;">{{ question.type }}</button>
                            <button class="btn btn-success btn-sm" v-if="question.difficulty === 'EASY'">{{ question.difficulty }}</button>
                            <button class="btn btn-warning btn-sm" v-else-if="question.difficulty === 'MEDIUM'">{{ question.difficulty }}</button>
                            <button class="btn btn-danger btn-sm" v-else>{{ question.difficulty }}</button>
                        </div>
                    </mdb-list-group-item>
                </mdb-list-group>
            </template>
        </main-content>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbBreadcrumb, mdbBreadcrumbItem, mdbBtn, mdbListGroup, mdbListGroupItem, mdbIcon } from 'mdbvue';
    import { mainHeader, mainContent, mdbAccordion } from '../../../components';
    import { mapGetters, mapState, mapMutations } from 'vuex';
    import { SELECT_QUESTION, UNSELECT_QUESTION, ADD_QUESTIONS_TO_TEST } from "../../../store/mutation-types";

    export default {
        name: 'TestPreviewPage',
        components: {
            mdbContainer,
            mainHeader,
            mdbBreadcrumb,
            mdbBreadcrumbItem,
            mdbBtn,
            mdbListGroup,
            mdbListGroupItem,
            mainContent,
            mdbAccordion,
            mdbIcon,
        },
        methods: {
            ...mapMutations({
                'selectQuestion': SELECT_QUESTION,
                'unSelectQuestion': UNSELECT_QUESTION,
                'addQuestions': ADD_QUESTIONS_TO_TEST
            }),
            goToTest: function () {
                this.addQuestions();
                this.$router.push('/tests/' + this.currentTest.id);
            }
        },
        mounted: function () {
            if(this.$store.state.currentTestId === 0) {
                this.$router.push('/tests/');
            }
        },
        computed: {
            ...mapState([
               'questions',
            ]),
            ...mapGetters([
                'selectedQuestions',
                'unSelectedQuestions',
                'currentTest'
            ]),
            filteredQuestions() {
                return this.unSelectedQuestions.filter(question => {
                    return question.name.toLowerCase().includes(this.searchQuestion.toLowerCase()) ||
                        question.type.toLowerCase().includes(this.searchQuestion.toLowerCase()) ||
                        question.difficulty.toLowerCase().includes(this.searchQuestion.toLowerCase()) ||
                        question.tags.filter(tag => {
                            return tag.toLowerCase().includes(this.searchQuestion.toLowerCase());
                        }).length > 0;
                })
            }
        },
        data() {
            return {
                leftSideBarPanes: [
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
                searchQuestion: ''
            };
        }
    };
</script>

<style scoped>
</style>
