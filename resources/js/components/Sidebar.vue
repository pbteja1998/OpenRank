<template>
    <v-navigation-drawer
            app
            fixed
            clipped
            v-model="leftDrawer"
            :right="isRight"
    >
        <!--<v-breadcrumbs :items="breadcrumbItems">-->
            <!--<v-icon slot="divider">forward</v-icon>-->
        <!--</v-breadcrumbs>-->
        <v-tabs
                v-model="tabId"
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
                    <slot name="head"></slot>
                    {{ searchFilter }}
                    <v-list>
                        <v-list-group
                                v-for="item in tabItems"
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
                                    v-for="subItem in filterItems(item.items)"
                                    :key="subItem.title"
                                    @click=""
                            >
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-checkbox
                                            :value="subItem.id"
                                            v-model="selectedFilterItemIds[item.index]"
                                    ></v-checkbox>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list-group>
                    </v-list>

                    <slot name="tail"></slot>
                </v-card>
            </v-flex>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
    import {
        VNavigationDrawer,
        VTabs,
        VTab,
        VLayout,
        VFlex,
        VCard,
        VList,
        VListGroup,
        VListTile,
        VListTileContent,
        VListTileTitle,
        VListTileAction,
        VCheckbox
    } from 'vuetify/lib';
    import { mapMutations } from 'vuex';
    import { TOGGLE_LEFT_DRAWER, SET_LEFT_SIDEBAR_TAB_ID } from "../store/mutation-types";

    export default {
        name: 'Sidebar',
        components: {
            VNavigationDrawer,
            VTabs,
            VTab,
            VLayout,
            VFlex,
            VCard,
            VList,
            VListGroup,
            VListTile,
            VListTileContent,
            VListTileTitle,
            VListTileAction,
            VCheckbox
        },
        props: {
            breadcrumbItems: {
                type: Array,
                default: function () {
                    return [
                        {
                            text: 'Tests',
                            disabled: false,
                            href: '/#/tests'
                        }
                    ]
                }
            },
            tabItems: {
                type: Array,
                default: function () {
                    return [
                        {
                            index: 0,
                            action: 'label',
                            title: 'Labels',
                            items: []
                        }
                    ]
                }
            },
            tabs: {
                type: Array,
                default: function () {
                    return [
                        {
                            name: 'Default',
                            id: 1
                        }
                    ]
                }
            },
            isRight: {
                type: Boolean,
                default: false
            },
            selectedFilterItemIds: {
                type: Array,
                default: function () {
                    return [[], [], [], []];
                }
            }
        },
        methods: {
            ...mapMutations({
                'toggleLeftDrawer': TOGGLE_LEFT_DRAWER,
                'setLeftSidebarTabId': SET_LEFT_SIDEBAR_TAB_ID
            }),
            filterItems: function (items = []) {
                return items.filter(item => {
                    return item.title.toLowerCase().includes(this.searchFilter.toLowerCase());
                });
            }
        },
        computed: {
            leftDrawer: {
                get () {
                    return this.$store.state.leftDrawer;
                },
                set (leftDrawer) {
                    this.toggleLeftDrawer({leftDrawer: leftDrawer});
                }
            },
            tabId: {
                get () {
                    if(!this.isRight) {
                        return this.$store.state.leftSidebarTabId;
                    }
                },
                set (tabId) {
                    if(!this.isRight) {
                        this.setLeftSidebarTabId({tabId: tabId});
                    }
                }
            },
        },
        data () {
            return {
                searchFilter: ''
            }
        }
    }
</script>