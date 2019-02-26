<template>
    <mdb-container fluid class="custom-flex-css">
        <main-header>
            <template v-slot:title>Tests</template>
            <mdb-breadcrumb>
                <mdb-breadcrumb-item><router-link to="/tests">Tests</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item><router-link :to="'/tests/preview/' + currentTest.id">{{ currentTest.name }}</router-link></mdb-breadcrumb-item>
                <mdb-breadcrumb-item active>Invite Candidates</mdb-breadcrumb-item>
            </mdb-breadcrumb>

            <template v-slot:others>
                <mdb-btn class="float-right text-primary bold text-transform-initial font-weight-bold"><mdb-icon icon="cog" class="mr-2" />Settings</mdb-btn>
                <mdb-btn class="float-right text-primary text-transform-initial font-weight-bold"><mdb-icon far icon="bell" class="mr-2" />Send Reminder</mdb-btn>
                <mdb-btn class="float-right text-primary text-transform-initial font-weight-bold"><mdb-icon far icon="clock" class="mr-2" />Expiry: Never</mdb-btn>
            </template>
        </main-header>

        <hr />

        <main-content margin-left="2" main-content-col="8">
            <!-- Card -->
            <mdb-card>
                <mdb-card-body>
                    <form>
                        <mdb-input placeholder="Email-Ids Separated By Commas" ariaDescribedBy="button-addon2" v-model="email.to">
                            <span class="input-group-text md-addon" slot="prepend">To</span>
                            <mdb-popover trigger="click" :options="{placement: 'bottom'}">
                                <div class="popover">
                                    <div class="popover-header">
                                        <div class="mb-3"><b>Bulk Upload Candidates (CSV)</b></div>
                                        <p class="text-muted">Sample Format
                                            <mdb-btn color="success" size="sm" icon="download"></mdb-btn>
                                        </p>    
                                    </div>
                                    <div class="popover-body">
                                        <mdb-tbl bordered>
                                            <mdb-tbl-head>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>Name</th>
                                                </tr>
                                            </mdb-tbl-head>
                                            <mdb-tbl-body>
                                                <tr>
                                                    <th scope="row">andrew@gmail.com</th>
                                                    <td>Andrew Baker</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">john@gmail.com</th>
                                                    <td>John Champion</td>
                                                </tr>
                                            </mdb-tbl-body>
                                        </mdb-tbl>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="csv-checkbox" style="display: none;" />
                                            <label class="form-check-label" for="csv-checkbox" style="font-size: small;">Ignore all rows with errors</label>
                                        </div>
                                        <div class="choose_file">
                                            <mdb-btn color="success" size="sm" style="color: white; text-transform: initial;">Upload CSV</mdb-btn>
                                            <input name="img" type="file" accept="image/*" />
                                        </div>
                                        <mdb-btn size="sm" style="color: black; text-transform: initial;">Cancel</mdb-btn>
                                    </div>
                                </div>
                                <mdb-btn slot="reference" color="primary" size="md" group icon="upload" id="button-addon2" style="cursor: pointer">
                                </mdb-btn>
                            </mdb-popover>
                        </mdb-input>

                        <mdb-input v-model="email.subject">
                            <span class="input-group-text md-addon" slot="prepend">Subject</span>
                        </mdb-input>

                        <ckeditor :editor="editor" v-model="email.body" :config="editorConfig" />
                        <mdb-jumbotron class="mb-0 text-center pt-3" style="background-color: #F0F2F6;">
                            <p>Duration: {{ currentTest.duration }} mins</p>
                            <mdb-btn color="success">Start Challenge</mdb-btn>
                            <hr class="my-4" />
                            <p>For any technical queries, please refer to <a href="#">FAQ</a> or email us at <a
                                    href="mailto:support@openrank.com"></a>support@openrank.com or call us at (415) 900-4023 (US) or at +91 8880811222 (India).</p>
                        </mdb-jumbotron>
                        <hr clas="mt-5" />
                        <div class="py-4 mt-3 float-right">
                            <mdb-btn color="success" type="submit">Send</mdb-btn>
                        </div>
                    </form>
                </mdb-card-body>
            </mdb-card>
            <!-- Card -->
        </main-content>

    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbBreadcrumb, mdbBreadcrumbItem, mdbBtn, mdbIcon, mdbCard, mdbCardBody, mdbInput, mdbJumbotron, mdbPopover, mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
    import { mainHeader, mainContent } from "../../../components";
    import { mapGetters } from 'vuex';
    import InlineEditor from '@ckeditor/ckeditor5-build-inline'
    export default {
        name: 'SendInvitesPage',
        components: {
            mdbContainer,
            mdbBreadcrumb,
            mdbBreadcrumbItem,
            mainHeader,
            mainContent,
            mdbBtn,
            mdbIcon,
            mdbCard,
            mdbCardBody,
            mdbInput,
            mdbJumbotron,
            mdbPopover,
            mdbTbl,
            mdbTblHead,
            mdbTblBody
        },
        computed: {
            ...mapGetters([
                'currentTest'
            ])
        },
        created: function() {
            this.email.subject = `${this.currentTest.name} Invitation`
            this.email.body = `<p>You have been invited to attend the challenge ${this.currentTest.name}. We wish you all the best!</p>`;
        },
        data () {
            return {
                email: {
                    to: "",
                    subject: "",
                    body: ""
                },
                editor: InlineEditor,
                editorConfig: {

                }
            }
        }
    }
</script>

<style scoped>
    .popover {
        padding: 10px;
    }
    .popover-header {
        background-color: white;
    }
    .choose_file {
        position: relative;
        display: inline-block;
        font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
        color: #7f7f7f;
        margin-top: 2px;
        background: white;
        cursor: pointer;
    }
    .choose_file input[type="file"]{
        -webkit-appearance:none;
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        width: 100%;
        height: 100%;
    }
</style>