<template>
    <div>
        <v-toolbar flat tabs extended color="white" class="pt-4">
            <v-breadcrumbs :items="breadcrumbItems">
                <v-icon slot="divider">forward</v-icon>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-toolbar-title class="text-xs-center">Send Test Invites</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat class="text-none">
                <v-icon>timer</v-icon>&nbsp;Expiry: Never
            </v-btn>
            <v-btn flat class="text-none">
                <v-icon>notifications_none</v-icon>&nbsp;Send Reminder
            </v-btn>
            <v-btn flat class="text-none">
                <v-icon>settings</v-icon>&nbsp;Settings
            </v-btn>
        </v-toolbar>
        <v-container class="elevation-3 mt-2" style="background: white;">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-combobox
                        v-model="emails"
                        :items="knownEmails"
                        :search-input.sync="search"
                        hide-selected
                        hint="Maximum of 5 emails"
                        label="To"
                        multiple
                        persistent-hint
                        small-chips
                        deletable-chips
                        :rules="emailsRules"
                        class="mb-4"
                >
                    <template v-slot:no-data>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    Press <kbd>enter</kbd> after entering the email.
                                    <!--No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one.-->
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-combobox>
                <v-text-field
                        v-model="subject"
                        :counter="100"
                        :rules="subjectRules"
                        label="Subject"
                        required
                >

                </v-text-field>
                <ckeditor :editor="editor" v-model="body" :config="editorConfig" />
                <v-layout align-center justify-center column fill-height style="background: #F0F2F6;" class="pt-4">
                    <p>Duration: {{ currentTest.duration }} mins</p>
                    <v-btn color="success">Start Challenge</v-btn>
                    <p>You can also use <a href="">this link</a> to access the challenge at any time.</p>
                    <p>For any technical queries, please refer to <a href="#">FAQ</a> or email us at <a
                            href="mailto:support@openrank.com"></a>support@openrank.com or call us at (415) 900-4023 (US) or at +91 8880811222 (India).</p>
                </v-layout>

                <v-layout align-start justify-end row>
                <v-btn
                            color="error"
                            @click="reset"
                            right
                    >
                        Reset Form
                    </v-btn>
                    <v-btn color="success" right>Send</v-btn>
                </v-layout>

            </v-form>
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
        VContainer,
        VForm,
        VCombobox,
        VListTile,
        VListTileContent,
        VListTileTitle,
        VTextField,
        VLayout,
    } from 'vuetify/lib';
    import { mapGetters } from 'vuex';
    import InlineEditor from '@ckeditor/ckeditor5-build-inline'

    export default {
        name: 'SendInvitesPage',
        components: {
            VToolbar,
            VBreadcrumbs,
            VIcon,
            VSpacer,
            VToolbarTitle,
            VBtn,
            VContainer,
            VForm,
            VCombobox,
            VListTile,
            VListTileContent,
            VListTileTitle,
            VTextField,
            VLayout,
        },
        computed: {
            ...mapGetters([
                'currentTest'
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
                        href: '/#/tests/' + this.currentTest.id
                    },
                    {
                        text: 'Invite Candidates',
                        disabled: true,
                        href: '/#/tests/invite/' + this.currentTest.id
                    },
                ]
            },
        },
        methods: {
            reset () {
                this.body = '';
                this.$refs.form.reset();
            }
        },
        created: function () {
            this.subject = this.currentTest.name + ' Invitation';
            this.body = `<p>You have been invited to attend the challenge ${this.currentTest.name}. We wish you all the best!</p>`;
        },
        data () {
            return {
                valid: true,
                subject: '',
                knownEmails: [],
                emails: [],
                search: null,
                body: '',
                subjectRules: [
                    v => !!v || 'Subject is required',
                    v => (v && v.length <= 100) || 'Subject must be less than 100 characters'
                ],
                emailsRules: [
                    v => !(v.length === 0) || 'Atleast one email is required',
                    v => v.filter(email => /.+@.+/.test(email)).length === v.length || 'E-mails must be valid'
                ],
                editor: InlineEditor,
                editorConfig: {}
            }
        },
        watch: {
            emails (val) {
                if (val.length > 5) {
                    this.$nextTick(() => this.emails.pop())
                }
            }
        }
    }
</script>

<style scoped>
</style>