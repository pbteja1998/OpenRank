<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <mdb-container fluid class="custom-flex-css">
        <main-header>
            <template v-slot:title>Tests</template>
            <mdb-breadcrumb>
                <mdb-breadcrumb-item><router-link to="/tests">Tests</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item><router-link :to="'/tests/preview/' + currentTest.id">{{ currentTest.name }}</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item active>Questions</mdb-breadcrumb-item>
            </mdb-breadcrumb>

            <template v-slot:others>
                <!--<span class="mr-3"><mdb-icon icon="lock" />&nbsp;&nbsp;Lock</span>-->
                <mdb-btn class="float-right"><mdb-icon icon="ellipsis-v" color="primary" style="cursor: pointer;" /></mdb-btn>
                <mdb-btn class="float-right" color="success" @click="publishTest" v-if="!currentTest.published">Publish</mdb-btn>
                <router-link :to="'/tests/' + currentTest.id + '/invite'" style="color: white;" v-else>
                    <mdb-btn class="float-right" color="success" style="text-transform: initial;">
                    <mdb-icon icon="user-plus" class="mr-2" />Invite
                    </mdb-btn>
                </router-link>
                <mdb-btn class="float-right" style="color: black; text-transform: initial"><mdb-icon far icon="eye-slash" class="mr-2" />Try Test</mdb-btn>
                <mdb-btn class="float-right" style="color: blue; text-transform: initial"><mdb-icon icon="lock" class="mr-2" />Lock</mdb-btn>
            </template>
        </main-header>

        <hr />

        <main-content margin-left="2" main-content-col="8" class="mt-3">
            <mdb-tbl bordered class="text-center">
                <mdb-tbl-head>
                    <tr>
                        <th>Questions({{ currentTestQuestions.length }})</th>
                        <th>Type</th>
                        <th>Difficulty</th>
                        <th>Points</th>
                        <th>Actions</th>
                    </tr>
                </mdb-tbl-head>
                <mdb-tbl-body>
                    <tr v-for="question in currentTestQuestions">
                        <th scope="row">{{ question.name }}</th>
                        <td>{{ question.type }}</td>
                        <td class="text-success" v-if="question.difficulty === 'EASY'">{{ question.difficulty }}</td>
                        <td class="text-warning" v-else-if="question.difficulty === 'MEDIUM'">{{ question.difficulty }}</td>
                        <td class="text-danger" v-else>{{ question.difficulty }}</td>
                        <td>{{ question.marks }}</td>
                        <td>
                            <mdb-tooltip :options="{placement: 'top'}">
                                <div class="tooltip">
                                    Edit
                                </div>
                                <mdb-icon slot="reference" icon="pencil-alt" color="" style="cursor: pointer;" class="mr-3 custom-hover" />
                            </mdb-tooltip>
                            <mdb-tooltip :options="{placement: 'top'}">
                                <div class="tooltip">
                                    Insights
                                </div>
                                <mdb-icon slot="reference" icon="chart-bar" color="" style="cursor: pointer;" class="mr-3 custom-hover" />
                            </mdb-tooltip>
                            <mdb-popover trigger="click" :options="{placement: 'bottom'}">
                                <div class="popover">
                                    <div class="popover-header">
                                        Actions
                                    </div>
                                    <div class="popover-body">
                                        <mdb-btn style="color: black;">Try question</mdb-btn>
                                        <mdb-btn style="color: black;">Remove</mdb-btn>
                                    </div>
                                </div>
                                <mdb-icon slot="reference" icon="ellipsis-v" color="" style="cursor: pointer;" class="mr-3 custom-hover" />
                            </mdb-popover>
                        </td>
                    </tr>
                </mdb-tbl-body>
            </mdb-tbl>
        </main-content>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbBreadcrumb, mdbBreadcrumbItem, mdbBtn, mdbIcon, mdbTbl, mdbTblHead, mdbTblBody, mdbTooltip, mdbPopover } from 'mdbvue';
    import { mainHeader, mainContent } from '../../../components';
    import { mapGetters, mapMutations } from 'vuex';
    import { PUBLISH_CURRENT_TEST } from "../../../store/mutation-types";

    export default {
        name: 'TestViewPage',
        components: {
            mdbContainer,
            mainHeader,
            mdbBreadcrumb,
            mdbBreadcrumbItem,
            mdbBtn,
            mdbIcon,
            mainContent,
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbTooltip,
            mdbPopover
        },
        methods: {
            ...mapMutations({
                publishCurrentTest: PUBLISH_CURRENT_TEST
            }),
            publishTest: function () {
                this.publishCurrentTest();
                this.$notify({group: 'tests', type: 'success', text: 'Test is published', duration: 1000})
            },
        },
        mounted: function () {
            if(this.$store.state.currentTestId === 0) {
                // this.$router.push('/tests/');
            }
        },
        computed: {
            ...mapGetters([
                'currentTest',
                'currentTestQuestions'
            ])
        },
        data() {
            return {
            };
        }
    };
</script>

<style scoped>
    thead > tr {
        text-transform: uppercase;
    }
    thead > tr > th {
        font-weight: bold;
    }
    .custom-hover:hover {
        color: blue;
    }
</style>
