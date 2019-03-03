<template>
    <div id="app">
        <v-app>
            <v-toolbar
                    app
                    dark
                    color="#343E4A"
                    flat
                    clipped-left
            >
                <v-toolbar-side-icon @click="toggleLeftDrawer"></v-toolbar-side-icon>

                <router-link to="/" style="text-decoration: none;">
                    <v-toolbar-title class="white--text">
                        OpenRank
                    </v-toolbar-title>
                </router-link>

                <v-spacer></v-spacer>
                <v-toolbar-items router :slot="linksSlot">
                    <v-btn to="/tests" flat>
                        <v-icon>question_answer</v-icon>
                        <span>Tests</span>
                    </v-btn>
                    <v-btn to="/library" flat>
                        <v-icon>library_books</v-icon>
                        <span>Library</span>
                    </v-btn>
                    <v-btn to="/code-pair" flat>
                        <v-icon>people</v-icon>
                        <span>CodePair</span>
                    </v-btn>
                    <v-btn to="/insights" flat>
                        <v-icon>insert_chart</v-icon>
                        <span>Insights</span>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer
                    app
                    height="auto"
                    color="#343E4A"
            >
                <v-layout
                        justify-center
                        row
                        wrap
                >
                    <v-btn
                            v-for="link in footerLinks"
                            :key="link"
                            color="white"
                            flat
                            round
                    >
                        {{ link }}
                    </v-btn>
                    <v-flex
                            py-3
                            text-xs-center
                            white--text
                            xs12
                    >
                        &copy;2019 — <strong>BHANU TEJA</strong>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    import {
        VApp,
        VToolbar,
        VToolbarSideIcon,
        VToolbarTitle,
        VSpacer,
        VBtn,
        VIcon,
        VContent,
        VContainer,
        VFooter,
        VLayout,
        VFlex,
        VToolbarItems
    } from 'vuetify/lib';
    import { TOGGLE_LEFT_DRAWER } from "./store/mutation-types";
    import { mapMutations } from 'vuex';

    export default {
        name: 'app',
        components: {
            VApp,
            VToolbar,
            VToolbarSideIcon,
            VToolbarTitle,
            VSpacer,
            VBtn,
            VIcon,
            VContent,
            VContainer,
            VFooter,
            VLayout,
            VFlex,
            VToolbarItems
        },
        methods: {
            ...mapMutations({
                toggleLeftDrawer: TOGGLE_LEFT_DRAWER
            })
        },
        data () {
            return {
                footerLinks: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ]
            }
        },
        computed: {
            linksSlot () {
                if (this.$vuetify.breakpoint.mdAndUp) {
                    return 'default'
                } else {
                    return 'extension'
                }
            }
        }
    };

</script>

<style>
</style>
