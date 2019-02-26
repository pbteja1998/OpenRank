<template>
    <mdb-container fluid class="main-content custom-flex-css">
        <mdb-row :style="{flexGrow: '1'}">
            <mdb-col class="sidebar custom-flex-css" v-if="hasLeftSideBar">
                <slot name="leftSideBar"></slot>
            </mdb-col>

            <mdb-col :col="contentColLength" v-if="hasDefaultSlot">
                <slot></slot>
            </mdb-col>

            <mdb-col class="sidebar" v-if="hasRightSideBar">
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
        },
        props: {
            mainContentCol: {
                type: Number
            }
        },
        methods: {
            hasSlot (name = 'default') {
                return !!this.$slots[ name ] || !!this.$scopedSlots[ name ];
            },
        },
        computed: {
            hasLeftSideBar() {
                return this.hasSlot('leftSideBar');
            },
            hasRightSideBar() {
                return this.hasSlot('rightSideBar');
            },
            hasDefaultSlot() {
                return this.hasSlot();
            },
            contentColLength() {
                if(this.hasLeftSideBar && this.hasRightSideBar) return "7";
                if(this.hasLeftSideBar || this.hasRightSideBar) return "9";
                if(this.mainContentCol !== undefined) return this.mainContentCol;
                return "12";
            }
        }
    };
</script>

<style scoped>
    .main-content {
        border-top: 1px solid rgb(241, 235, 235);
    }
    .sidebar {
        background-color: rgb(228, 229, 232);
        padding: 0;
    }
</style>