<template>
    <div id="app" class="flyout">
        <mdb-navbar dark position="top" class="default-color" scrolling :scrollingOffset="20">
            <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
                Open Rank
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav right>
                    <mdb-nav-item exact to="/" waves-fixed>Home</mdb-nav-item>
                    <mdb-nav-item to="/tests" waves-fixed>Tests</mdb-nav-item>
                    <mdb-nav-item to="/code-pair" waves-fixed>Code Pair</mdb-nav-item>
                    <mdb-nav-item to="/library" waves-fixed>Library</mdb-nav-item>
                    <mdb-nav-item to="/insights" waves-fixed>Insights</mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <notifications group="tests" position="top center"/>
        <main class="custom-flex-css" :style="{marginTop: '60px'}">
            <router-view></router-view>
        </main>
        <mdb-footer color="default-color">
            <p class="footer-copyright mb-0 py-3 text-center">
                &copy; {{new Date().getFullYear()}} Copyright: <a href="https://github.com/pbteja1998"> Bhanu Teja</a>
            </p>
        </mdb-footer>
    </div>
</template>

<script>
    import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

    export default {
        name: 'app',
        components: {
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbNavbarBrand,
            mdbFooter
        }
    };

</script>

<style>
    .flyout {
        display:flex;
        flex-direction: column;
        min-height:100vh;
        justify-content: space-between;
    }
    .active{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .demo-section {
        padding: 20px 0;
    }
    .demo-section > section {
        border: 1px solid #e0e0e0;
        padding: 15px;
    }
    .demo-section > h4 {
        font-weight: bold;
        margin-bottom: 20px;
    }
    .demo-title {
        color: #9e9e9e;
        font-weight: 700;
        margin-bottom: 0;
        padding-left: 15px;
    }
</style>
