<template>
    <v-navigation-drawer app fixed clipped>
        <v-breadcrumbs
                :items="breadcrumbItems"
        >
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
        VListTileAction
    } from 'vuetify/lib';

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
            VListTileAction
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
            }
        },
        data () {
            return {
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
