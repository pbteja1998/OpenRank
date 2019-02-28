<template>
    <div id="app">
        <v-app>
            <v-toolbar
                    app
                    dark
                    color="#343E4A"
                    fixed
                    clipped-left
            >
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title class="white--text">OpenRank</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn to="/tests" large flat>
                    <v-icon>question_answer</v-icon>
                    <span>Tests</span>
                </v-btn>
                <v-btn to="library" large flat>
                    <v-icon>library_books</v-icon>
                    <span>Library</span>
                </v-btn>
                <v-btn to="code-pair" large flat>
                    <v-icon>people</v-icon>
                    <span>CodePair</span>
                </v-btn>
                <v-btn to="insights" large flat>
                    <v-icon>insert_chart</v-icon>
                    <span>Insights</span>
                </v-btn>
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
                        &copy;2018 — <strong>Bhanu Teja</strong>
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
        VFlex
    } from 'vuetify/lib';

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
            VFlex
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
        }
    };

</script>

<style>
</style>
