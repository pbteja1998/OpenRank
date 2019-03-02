<template>
    <div>
        <v-toolbar tabs flat extended color="white" class="elevation-1 pt-4">
            <v-breadcrumbs :items="breadcrumbItems">
                <v-icon slot="divider">forward</v-icon>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-xs-center">{{ currentTest.name }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon outline color="primary" small>
                <v-icon>lock</v-icon>
            </v-btn>
            <v-btn>Try Test</v-btn>
            <v-btn color="success">Publish</v-btn>
            <!--<v-btn color="primary" dark @click="expand = !expand">-->
                <!--{{ expand ? 'Close' : 'Keep' }} other rows-->
            <!--</v-btn>-->
            <template v-slot:extension>
                <v-tabs v-model="tabId">
                    <v-tabs-slider color="success"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
        <v-container>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="questions"
                    :expand="expand"
                    item-key="name"
                    select-all
                    class="elevation-1"
            >
                <template v-slot:items="props">
                    <tr @click="props.expanded = !props.expanded">
                        <td @click.stop="">
                            <v-checkbox
                                    v-model="props.selected"
                                    primary
                                    hide-details
                            ></v-checkbox>
                        </td>
                        <td class="text-xs-center">{{ props.item.name }}</td>
                        <td class="text-xs-center">{{ props.item.questionType.title }}</td>
                        <td class="text-xs-center">{{ props.item.difficultyType.title }}</td>
                        <td class="text-xs-center">{{ props.item.points }}</td>
                        <td class="justify-center layout px-0" @click.stop="">
                            <v-icon
                                    small
                                    class="mr-2"
                                    @click=""
                            >
                                edit
                            </v-icon>
                            <v-icon
                                    small
                                    @click=""
                            >
                                delete
                            </v-icon>
                        </td>
                    </tr>
                </template>
                <template v-slot:expand="props" v-slot:items="props">
                    <v-card>
                        <template v-for="tag in getQuestionTags(props.item.questionTagIds)">
                            <v-chip
                                    label
                                    :key="tag.id"
                                    class="mr-2"
                                    small
                            >
                                {{ tag.title }}
                            </v-chip>
                        </template>
                    </v-card>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
    import {
        VToolbar,
        VBreadcrumbs,
        VIcon,
        VSpacer,
        VToolbarTitle,
        VBtn,
        VTabs,
        VTabsSlider,
        VTab,
        VContainer,
        VDataTable,
        VCheckbox,
        VCard,
        VChip,
    } from 'vuetify/lib';
    import { mapGetters } from 'vuex';

    export default {
        name: 'ViewTestPage',
        components: {
            VToolbar,
            VBreadcrumbs,
            VIcon,
            VSpacer,
            VToolbarTitle,
            VBtn,
            VTabs,
            VTabsSlider,
            VTab,
            VContainer,
            VDataTable,
            VCheckbox,
            VCard,
            VChip,
        },
        data: () => ({
            expand: false,
            selected: [],
            tabId: 0,
            items: [
                'questions', 'candidates', 'insights', 'settings'
            ],
        }),

        computed: {
            ...mapGetters([
                "currentTest",
                'currentTestQuestions',
                "getDifficultyType",
                "getQuestionType",
                "getQuestionTags"
            ]),
            headers: function () {
                return [
                    {
                        text: `Questions (${this.currentTest.questionIds.length})`,
                        align: 'center',
                        sortable: false,
                        value: 'name'
                    },
                    {
                        text: 'Type',
                        align: 'center',
                        sortable: false,
                        value: 'questionType'
                    },
                    {
                        text: 'Difficulty',
                        align: 'center',
                        sortable: false,
                        value: 'difficultyType'
                    },
                    {
                        text: `Points (${this.totalPoints})`,
                        align: 'center',
                        sortable: true,
                        value: 'points'
                    },
                    {
                        text: 'Actions',
                        align: 'center',
                        value: 'name',
                        sortable: false,
                    }
                ];
            },
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
                        href: '/#/tests/' + this.currentTest.id
                    },
                    {
                        text: 'Questions',
                        disabled: true,
                        href: '/#/tests/' + this.currentTest.id
                    },
                ]
            },
            questions: function () {
                return this.currentTestQuestions.map(question => {
                    return {...question, difficultyType: this.getDifficultyType(question.difficultyTypeId), questionType: this.getQuestionType(question.questionTypeId)};
                });
            },
            totalPoints: function () {
                return this.questions.reduce((totalPoints, question) => totalPoints + question.points, 0);
            }
        }
    }
</script>

<style scoped>
</style>
