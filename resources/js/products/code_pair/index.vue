<template>
    <mdb-container>
        <mdb-row>
            <mdb-col md="12" class="mx-auto">
                <mdb-jumbotron class="mt-5">
                    This is Code Pair Page
                </mdb-jumbotron>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbJumbotron } from 'mdbvue';

    export default {
        name: 'CodePairPage',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbJumbotron,
        }
    };
</script>

<style scoped>
</style>
