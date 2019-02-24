<template>
    <div>
        <mdb-edge-header color="teal darken-1"/>
        <div class="container free-bird">
            <mdb-row>
                <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
                    <mdb-card-body>
                        <h2 class="h2-responsive pb-4"><strong>Open Rank Demo App</strong></h2>
                        <p class="pb-4">This application is an open source alternative for hacker-rank platform.</p>
                        <mdb-row class="d-flex flex-row justify-content-center">
                            <a href="https://pbteja1998.github.io/OpenRank/docs/about" waves-fixed class="border nav-link border-light rounded mr-1" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Official documentation</a>
                            <!-- <mdb-btn tag="a" size="sm" color="default" href="#/components/liveDemo" target="_blank">Live Demo</mdb-btn> -->
                        </mdb-row>
                    </mdb-card-body>
                </mdb-col>
            </mdb-row>
        </div>
    </div>
</template>

<script>
    import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCardBody } from 'mdbvue';

    export default {
        name: 'HomePage',
        components: {
            mdbContainer,
            mdbCol,
            mdbRow,
            mdbIcon,
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbBtn,
            mdbEdgeHeader,
            mdbCardBody
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    .home-feature-box {
        padding: 40px 0;
    }

    .home-feature-box i {
        font-size: 6rem;
    }

    .home-feature-box span {
        display: block;
        color: black;
        font-size: 20px;
        font-weight: bold;
        padding-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
    }

    a {
        color: #42b983;
    }

</style>
