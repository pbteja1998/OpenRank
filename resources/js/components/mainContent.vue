<template>
    <mdb-container fluid class="main-content custom-flex-css">
        <mdb-row :style="{flexGrow: '1'}">
            <mdb-col class="sidebar">
                <slot name="leftSideBar"></slot>
            </mdb-col>

            <mdb-col col="7">
                <slot></slot>
            </mdb-col>

            <mdb-col class="sidebar">
                <slot name="rightSideBar"></slot>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
    export default {
        name: 'mainContent',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
        }
    };
</script>

<style scoped>
    .main-content {
        border: 1px solid rgb(241, 235, 235);
    }
    .sidebar {
        background-color: rgb(237, 239, 241);
    }
</style>