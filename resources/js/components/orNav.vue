<template>
    <mdb-navbar class="indigo" dark position="top" scrolling :scrollingOffset="20">
        <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
            Open Rank
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#" active>Home</mdb-nav-item>
                <mdb-nav-item href="#">Features</mdb-nav-item>
                <mdb-nav-item href="#">Pricing</mdb-nav-item>
                <!-- Dropdown -->
                <mdb-dropdown tag="li" class="nav-item">
                    <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item>Action</mdb-dropdown-item>
                        <mdb-dropdown-item>Another action</mdb-dropdown-item>
                        <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>
            </mdb-navbar-nav>
            <!-- Search form -->
            <form class="form-inline">
                <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
            </form>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';
    export default {
        name: 'MdbNav',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            mdbDropdown,
            mdbDropdownToggle,
            mdbDropdownMenu,
            mdbDropdownItem
        }
    };
</script>
