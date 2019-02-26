<template>
    <mdb-row class="mt-5 align-items-center justify-content-start">
        <!--<mdb-col>-->
            <!--<h4 class="demo-title">-->
                <!--<slot name="title"></slot>-->
            <!--</h4>-->
        <!--</mdb-col>-->

        <mdb-col>
            <slot></slot>
        </mdb-col>

        <mdb-col col="6">
            <slot name="others"></slot>
        </mdb-col>
    </mdb-row>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
    export default {
        name: 'mainHeader',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
        }
    };
</script>