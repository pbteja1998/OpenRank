<template>
    <div>
        <v-navigation-drawer
                app
                fixed
                clipped
                v-model="leftDrawer"
        >
            <v-breadcrumbs :items="breadcrumbItems">
                <v-icon slot="divider">forward</v-icon>
            </v-breadcrumbs>
            <v-tabs
                    v-model="tab_id"
                    centered
                    slider-color="black"
            >
                <v-tab
                        v-for="tab in tabs"
                        :key="tab.id"
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>

            <v-layout row>
                <v-flex>
                    <v-card>
                        <v-text-field
                                solo
                                label="Search for a test"
                                append-icon="search"
                                v-model="searchTest"
                        ></v-text-field>

                        <v-list>
                            <v-list-group
                                    v-for="item in items"
                                    :key="item.title"
                                    v-model="item.active"
                                    :prepend-icon="item.action"
                                    no-action
                            >
                                <v-list-tile slot="activator">
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>

                                <v-list-tile
                                        v-for="subItem in item.items"
                                        :key="subItem.title"
                                        @click=""
                                >
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-icon>{{ subItem.action }}</v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>

        <v-container>
            <v-layout row>
                <v-flex>
                    <v-card>
                        <v-list
                                subheader
                                three-line
                        >
                            <v-subheader>
                                {{ `${this.tests.length} ${this.tabs[tab_id].name.toUpperCase()}` }}
                            </v-subheader>
                            <!--<v-divider></v-divider>-->
                            <v-list-tile v-for="test in filteredTests" :key="test.id">
                                <v-list-tile-action>
                                    <v-checkbox
                                            :value="test.id"
                                            v-model="selectedTestIds"
                                    ></v-checkbox>
                                </v-list-tile-action>

                                <v-list-tile-content @click.prevent="test.checked = !test.checked">
                                    <v-list-tile-title>{{ test.name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ jobProfile(test.id).title }}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{ workExperienceType(test.id).title }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    import {
        VNavigationDrawer,
        VBreadcrumbs,
        VIcon,
        VTabs,
        VTab,
        VLayout,
        VFlex,
        VCard,
        VTextField,
        VList,
        VListGroup,
        VListTile,
        VListTileContent,
        VListTileTitle,
        VListTileAction,
        VContainer,
        VSubheader,
        VCheckbox,
        VListTileSubTitle,
        VDivider,
        VBtn
    } from 'vuetify/lib';
    import { mapMutations, mapGetters } from 'vuex';
    import { TOGGLE_LEFT_DRAWER } from "../../store/mutation-types";

    export default {
        name: 'TestsPage',
        components: {
            VNavigationDrawer,
            VBreadcrumbs,
            VIcon,
            VTabs,
            VTab,
            VLayout,
            VFlex,
            VCard,
            VTextField,
            VList,
            VListGroup,
            VListTile,
            VListTileContent,
            VListTileTitle,
            VListTileAction,
            VContainer,
            VSubheader,
            VCheckbox,
            VListTileSubTitle,
            VDivider,
            VBtn
        },
        methods: {
            ...mapMutations({
                'toggleLeftDrawer': TOGGLE_LEFT_DRAWER
            })
        },
        computed: {
            breadcrumbItems: function () {
                return [
                    {
                        text: 'Tests',
                        disabled: false,
                        href: '/#/tests'
                    },
                    {
                        text: !this.tab_id ? 'Active' : 'Archived',
                        disabled: true,
                        href: '/#/tests'
                    }
                ]
            },
            leftDrawer: {
                get () {
                    return this.$store.state.leftDrawer;
                },
                set (leftDrawer) {
                    this.toggleLeftDrawer({leftDrawer: leftDrawer});
                }
            },
            ...mapGetters([
                'activeTests',
                'archivedTests'
            ]),
            ...mapGetters({
                jobProfile: 'getJobProfileFromId',
                workExperienceType: 'getWorkExperienceTypeFromId'
            }),
            tests: function () {
                return this.tab_id === 0 ? this.activeTests : this.archivedTests;
            },
            filteredTests: function () {
                return this.tests.filter(test => {
                    return test.name.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            this.jobProfile(test.id).title.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            this.workExperienceType(test.id).title.toLowerCase().includes(this.searchTest.toLowerCase()) ||
                            test.duration.toString().toLowerCase().includes(this.searchTest.toLowerCase());
                })
            }
        },
        data () {
            return {
                searchTest: '',
                selectedTestIds: [],
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
                tab_id: 0,
                items: [
                    {
                        action: 'label',
                        title: 'Labels',
                        // active: true,
                        items: [
                            { title: 'Label 1' },
                            { title: 'Label 2' }
                        ]
                    },
                    {
                        action: 'verified_user',
                        title: 'Owner',
                        items: [
                            { title: 'Label 1' },
                            { title: 'Label 2' }
                        ]
                    },
                    {
                        action: 'extension',
                        title: 'Role',
                        items: [
                            { title: 'Label 1' },
                            { title: 'Label 2' }
                        ]
                    },
                    {
                        action: 'work',
                        title: 'Work Experience',
                        items: [
                            { title: 'Label 1' },
                            { title: 'Label 2' }
                        ]
                    }
                ],
            }
        },
    }
</script>

<style scoped>
</style>
