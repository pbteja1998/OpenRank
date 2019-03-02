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
                        label="Search for a test"
                        append-icon="search"
                        v-model="searchTest"
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

                    <v-btn large color="success">
                        Create Test
                    </v-btn>
                </v-layout>
                <v-layout row align-start justify-space-between fill-height>
                    <v-card>
                        <v-list
                                subheader
                                three-line
                        >
                            <v-subheader>
                                {{ `${this.filteredTests.length} TESTS` }}
                            </v-subheader>
                            <template v-for="test in filteredTests">
                                <v-divider></v-divider>
                                <v-list-tile :key="test.id" @click="" :to="'/tests/preview/' + test.id">
                                    <v-list-tile-action @click.stop.prevent="">
                                        <v-checkbox
                                                :value="test.id"
                                                v-model="selectedTestIds"
                                        ></v-checkbox>
                                    </v-list-tile-action>

                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ test.name }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ jobProfile(test.jobProfileId).title }}</v-list-tile-sub-title>
                                        <v-list-tile-sub-title>{{ workExperienceType(test.workExperienceTypeId).title }}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
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
        VList,
        VSubheader,
        VDivider,
        VListTile,
        VListTileAction,
        VCheckbox,
        VListTileContent,
        VListTileTitle,
        VListTileSubTitle,
    } from 'vuetify/lib';
    import { mapGetters, mapState } from 'vuex';
    import { SideBar } from '../../components';

    export default {
        name: 'TestsPage',
        components: {
            SideBar,
            VTextField,
            VContainer,
            VLayout,
            VBreadcrumbs,
            VIcon,
            VBtn,
            VCard,
            VList,
            VSubheader,
            VDivider,
            VListTile,
            VListTileAction,
            VCheckbox,
            VListTileContent,
            VListTileTitle,
            VListTileSubTitle,
        },
        computed: {
            ...mapState([
                "leftSidebarTabId"
            ]),
            breadcrumbItems: function () {
                return [
                    {
                        text: 'Tests',
                        disabled: false,
                        href: '/#/tests'
                    },
                    {
                        text: !this.leftSidebarTabId ? 'Active' : 'Archived',
                        disabled: true,
                        href: '/#/tests'
                    }
                ]
            },
            ...mapGetters([
                "activeTests",
                "archivedTests"
            ]),
            ...mapGetters({
                jobProfile: "getJobProfileFromId",
                workExperienceType: "getWorkExperienceTypeFromId"
            }),
            ...mapState([
                "jobProfiles",
                "workExperienceTypes"
            ]),
            tests: function () {
                return this.leftSidebarTabId === 0 ? this.activeTests : this.archivedTests;
            },
            filteredTests: function () {
                if(this.searchTest === null) return this.tests;
                let filteredTests = this.tests.filter(test => {
                    return test.name.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            this.jobProfile(test.jobProfileId).title.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            this.workExperienceType(test.workExperienceTypeId).title.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            test.duration.toString().toLowerCase().includes(this.searchTest.toLowerCase());
                });
                let empty = true;
                for(let i = 0; i < this.selectedFilterItemIds.length; i++) {
                    if(this.selectedFilterItemIds[i].length > 0) {
                        empty = false;
                        break;
                    }
                }
                if(empty) {
                    return filteredTests;
                } else {
                    return filteredTests.filter(test => {
                        // TODO: Remove the following hard-coded code and replace it with generalized code.
                        return this.selectedFilterItemIds[2].includes(test.jobProfileId) || this.selectedFilterItemIds[3].includes(test.workExperienceTypeId);
                    });
                }
            },
            tabItems: function () {
                return [
                    {
                        index: 0,
                        action: 'label',
                        title: 'Labels',
                        // active: true,
                        items: []
                    },
                    {
                        index: 1,
                        action: 'verified_user',
                        title: 'Owner',
                        items: []
                    },
                    {
                        index: 2,
                        action: 'extension',
                        title: 'Role',
                        items: this.jobProfiles
                    },
                    {
                        index: 3,
                        action: 'work',
                        title: 'Work Experience',
                        items: this.workExperienceTypes
                    }
                ];
            },
        },
        data () {
            return {
                searchTest: '',
                selectedTestIds: [],
                selectedFilterItemIds: [[],[],[],[]],
                tabs: [
                    {
                        name: 'Active Tests',
                        id: 1
                    },
                    {
                        name: 'Archived Tests',
                        id: 2
                    }
                ],
            }
        },
    }
</script>

<style scoped>
</style>
