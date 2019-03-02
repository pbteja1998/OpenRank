<template>
    <div>
        <side-bar
                :tab-items="tabItems"
                :breadcrumb-items="breadcrumbItems"
                :selected-filter-item-ids="selectedFilterItemIds"
                :tabs="tabs"
        >
            <template v-slot:head>
                <v-text-field
                        solo
                        label="Search for a question"
                        append-icon="search"
                        v-model="searchQuestion"
                        clearable
                ></v-text-field>
            </template>
        </side-bar>

        <v-container fluid>
            <v-layout column>
                <v-layout row align-start justify-space-between>
                        <v-breadcrumbs :items="breadcrumbItems">
                            <v-icon slot="divider">forward</v-icon>
                        </v-breadcrumbs>

                        <v-btn large>
                            Go To Test
                        </v-btn>
                </v-layout>
                <v-layout row wrap>
                    <v-flex d-flex xs12 sm12 md7>
                        <v-card>
                            <v-subheader>
                                {{ `${this.filteredQuestions.length} QUESTIONS` }}
                            </v-subheader>
                            <v-divider></v-divider>
                            <v-card v-for="question in filteredQuestions" :key="question.id">
                                <v-card-title primary-title>
                                    <v-layout row align-start justify-space-between>
                                        <div>
                                            <div class="">{{ question.name }}</div>
                                            <span class="grey--text">{{ questionType(question.questionTypeId).title }}</span>
                                            <v-chip :color="difficultyChipColor(question.difficultyTypeId)" outline class="mr-2">
                                                <v-icon left>highlight</v-icon>
                                                {{ difficultyType(question.difficultyTypeId).title }}
                                            </v-chip>
                                            <template v-for="tag in getQuestionTags(question.questionTagIds)">
                                                <v-chip
                                                        label
                                                        :key="tag.id"
                                                        class="mr-2"
                                                        small
                                                >
                                                    {{ tag.title }}
                                                </v-chip>
                                            </template>
                                        </div>
                                        <v-btn icon large @click="selectQuestion({questionId: question.id})" right top>
                                            <v-icon color="green lighten-1">add_circle</v-icon>
                                        </v-btn>
                                    </v-layout>
                                </v-card-title>
                            </v-card>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm12 md4 offset-md1>
                        <v-card>
                            <v-list
                                    subheader
                                    three-line
                            >
                                <v-subheader class="justify-center">
                                    TEST PREVIEW
                                </v-subheader>
                                <v-divider></v-divider>
                                <v-layout align-center justify-center column>
                                    <v-subheader>
                                        {{ `${this.selectedQuestions.length} QUESTIONS SELECTED` }}
                                    </v-subheader>
                                    <v-layout align-center justify-center row>
                                        <v-subheader>
                                            <v-icon left>timer</v-icon>Duration: {{ currentTest.duration }} mins
                                        </v-subheader>
                                        <v-subheader>
                                            <v-icon>score</v-icon>Total Score: {{ totalPoints }}
                                        </v-subheader>
                                    </v-layout>
                                </v-layout>
                                <template v-for="question in selectedQuestions">
                                    <v-divider></v-divider>
                                    <v-list-tile :key="question.id" @click="">

                                        <v-list-tile-content @click="">
                                            <v-list-tile-title>{{ question.name }}</v-list-tile-title>
                                            <v-list-tile-sub-title>
                                                {{ questionType(question.questionTypeId).title }}
                                                <v-chip :color="difficultyChipColor(question.difficultyTypeId)" outline>
                                                    <v-icon left>highlight</v-icon>
                                                    {{ difficultyType(question.difficultyTypeId).title }}
                                                </v-chip>
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                                            <v-btn icon large @click="unselectQuestion({questionId: question.id})">
                                                <v-icon color="red lighten-1">remove_circle</v-icon>
                                            </v-btn>
                                        </v-list-tile-action>

                                    </v-list-tile>
                                </template>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import {
        VTextField,
        VContainer,
        VLayout,
        VBreadcrumbs,
        VIcon,
        VBtn,
        VCard,
        VSubheader,
        VDivider,
        VCardTitle,
        VChip,
        VList,
        VListTile,
        VListTileContent,
        VListTileTitle,
        VListTileSubTitle,
        VListTileAction,
        VFlex
    } from 'vuetify/lib';
    import { mapState, mapGetters, mapMutations } from 'vuex';
    import { SideBar } from "../../../components";
    import { SELECT_QUESTION, UNSELECT_QUESTION } from "../../../store/mutation-types";

    export default {
        name: 'TestPreviewPage',
        components: {
            SideBar,
            VTextField,
            VContainer,
            VLayout,
            VBreadcrumbs,
            VIcon,
            VBtn,
            VCard,
            VSubheader,
            VDivider,
            VCardTitle,
            VChip,
            VList,
            VListTile,
            VListTileContent,
            VListTileTitle,
            VListTileSubTitle,
            VListTileAction,
            VFlex
        },
        methods: {
            ...mapMutations({
                'selectQuestion': SELECT_QUESTION,
                'unselectQuestion': UNSELECT_QUESTION
            })
        },
        computed: {
            ...mapGetters([
                "currentTest",
            ]),
            ...mapGetters({
                "questionType": "getQuestionType",
                "difficultyType": "getDifficultyType",
                "language": "getLanguage",
            }),
            ...mapGetters([
                "getQuestionTags",
                "nonSelectedQuestions",
                "selectedQuestions",
                "currentTest"
            ]),
            ...mapState([
                "leftSidebarTabId",
                "difficultyTypes",
                "questionTypes",
                "questionTags",
                "languages",
                "questions",
                "selectedQuestionIds"
            ]),
            breadcrumbItems: function () {
                return [
                    {
                        text: 'Tests',
                        disabled: false,
                        href: '/#/tests'
                    },
                    {
                        text: this.currentTest.name,
                        disabled: false,
                        href: '/#/tests/preview/' + this.currentTest.id
                    },
                    {
                        text: !this.leftSidebarTabId ? 'Library - OpenRank' : 'Library - My Company',
                        disabled: true,
                        href: '/#/tests/preview/' + this.currentTest.id
                    },
                ]
            },
            tabItems: function () {
                return [
                    {
                        index: 0,
                        action: 'highlight',
                        title: 'Difficulty',
                        items: this.difficultyTypes
                    },
                    {
                        index: 1,
                        action: 'code',
                        title: 'Type',
                        items: this.questionTypes
                    },
                    {
                        index: 2,
                        action: 'label',
                        title: 'Tags',
                        items: this.questionTags
                    },
                    {
                        index: 3,
                        action: 'language',
                        title: 'Languages',
                        items: this.languages
                    }
                ];
            },
            filteredQuestions: function () {
                if(this.searchQuestion === null) return this.nonSelectedQuestions;
                let filteredQuestions = this.nonSelectedQuestions.filter(question => {
                    return question.name.toLowerCase().includes(this.searchQuestion.toLowerCase()) ||
                        this.questionType(question.questionTypeId).title.toLowerCase().includes(this.searchQuestion.toLowerCase()) ||
                        this.difficultyType(question.difficultyTypeId).title.toLowerCase().includes(this.searchQuestion.toLowerCase());
                });
                let empty = true;
                for(let i = 0; i < this.selectedFilterItemIds.length; i++) {
                    if(this.selectedFilterItemIds[i].length > 0) {
                        empty = false;
                        break;
                    }
                }
                if(empty) {
                    return filteredQuestions;
                } else {
                    return filteredQuestions.filter(question => {
                        // TODO: Remove the following hard-coded code and replace it with generalized code.
                        return this.selectedFilterItemIds[0].includes(question.difficultyTypeId) ||
                            this.selectedFilterItemIds[1].includes(question.questionTypeId) ||
                            this.selectedFilterItemIds[2].filter(tagId => question.questionTagIds.includes(tagId)).length > 0 ||
                            this.selectedFilterItemIds[3].filter(langId => question.languageIds.includes(langId)).length > 0;
                    });
                }
            },
            difficultyChipColor: function () {
                return difficultyTypeId => {
                    if(difficultyTypeId === 1) {
                        return "green";
                    } else if(difficultyTypeId === 2) {
                        return "yellow darken-3";
                    } else {
                        return "red";
                    }
                }
            },
            totalPoints: function () {
                return this.selectedQuestions.reduce((totalPoints, question) => totalPoints + question.points, 0);
            }
        },
        data () {
            return {
                searchQuestion: '',
                selectedFilterItemIds: [[], [], [], []],
                tabs: [
                    {
                        name: 'OpenRank',
                        id: 1
                    },
                    {
                        name: 'My Company',
                        id: 2
                    }
                ]
            }
        }
    }

</script>

<style scoped>
</style>
