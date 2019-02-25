<template>
    <mdb-card :class="cardClass" style="background-color: rgb(236, 237, 240);">
        <mdb-card-header role="tab" @click.native="toggleVisible" :class="headerClass">
            <slot name="title"></slot>

            <!-- DEFAULT HEADER -->
            <h5 :class="headingClass" v-if="type === 'default'">
                <button class="btn btn-link" type="button" data-toggle="collapse" :data-expanded="isOpen" v-html="title">
                    {{ title }}
                </button>
            </h5>

            <div :class="headingClass" v-else-if="type === 'custom'" style="cursor: pointer;">
                <!--<button class="btn btn-link" type="button" data-toggle="collapse" :data-expanded="isOpen" v-html="title">-->
                <button class="btn btn-link inline-block" type="button" data-toggle="collapse" :data-expanded="isOpen" style="text-decoration: none; width: 90%; font-size: large;">
                    <span style="letter-spacing: 0.01rem; font-weight: bold; color: #6d6d6d;">{{title}}</span>
              </button>
                <span style="display: inline-block; color: #00A762;">
                    <mdb-icon icon="plus" class="rotate-icon pull-right" v-if="!isOpen"/>
                    <mdb-icon icon="minus" class="rotate-icon pull-right" v-else/>
                </span>
            </div>

            <!-- ICON HEADER -->
            <a v-else-if="type==='icon'" data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" >
                <h5 :class="headingClass">
                    {{title}}
                    <div v-if="hamburger" ref="animatedIcon" class="animated-icon1 float-right mt-1"><span></span><span></span><span></span></div>
                    <mdb-icon v-else-if="plus" icon="plus" class="rotate-icon float-right"></mdb-icon>
                    <mdb-icon v-else icon="angle-down" class="rotate-icon float-right" size="2x"/>
                    <!--<mdb-icon icon="plus" pull="right" />-->
                </h5>
            </a>
            <!-- COLOR SHADES OR PHOTOBG HEADER -->
            <a v-else-if="type==='color' || type==='photoBg'" data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" >
                <mdb-icon v-show="type==='photoBg'" :icon="icon" size="2x" class="p-3 mr-4 float-left black-text"/>
                <h4 :class="headingClass" v-html="title">
                    {{title}}
                </h4>
            </a>

            <!-- FALLBACK HEADER -->
            <a v-else data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" class="fix">
                <h5 :class="headingClass">
                    <span v-html="title">{{title}}</span>
                    <mdb-icon icon="angle-down" class="rotate-icon pull-right" v-if="type!=='picture'"/>
                    <!--<mdb-icon icon="angle-down" class="rotate-icon pull-right" v-if="type!=='picture'"/>-->
                </h5>
            </a>

        </mdb-card-header>
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body v-if="isOpen" class="collapse-item" :class="bodyClass" ref="body">
                <p :class="paragraphClass" v-html="content" v-if="content">
                    {{content}}
                </p>
                <slot></slot>
            </mdb-card-body>
        </transition>
    </mdb-card>
</template>

<script>
    import { mdbCard, mdbCardHeader, mdbCardBody, mdbIcon, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem } from 'mdbvue';
    import classNames from 'classnames';

    const AccordionPane = {
        props: {
            type: {
                type: String,
                default: 'default'
            },
            isOpen: {
                type: Boolean,
            },
            title: {
                type: String,
            },
            content: {
                type: String
            },
            order: {
                type: Number
            },
            color: {
                type: String,
                default: ''
            },
            icon: {
                type: String
            },
            hamburger: {
                type: Boolean
            },
            plus: {
                type: Boolean
            }
        },
        components: {
            mdbCard,
            mdbCardHeader,
            mdbCardBody,
            mdbIcon,
            mdbDropdown,
            mdbDropdownMenu,
            mdbDropdownToggle,
            mdbDropdownItem
        },
        data() {
            return {

            };
        },
        mounted() {
            if (this.isOpen) {
                this.$refs.body.$el.style.height = this.$refs.body.$el.scrollHeight + 'px';
            }
        },
        methods: {
            toggleVisible() {
                this.$emit('pane-clicked', this);
            },
            beforeEnter(el) {
                el.style.height = '0';
            },
            enter(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeLeave(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave(el) {
                el.style.height = '0';
            }
        },
        computed: {
            cardClass() {
                return classNames(
                    this.type === 'default' && 'z-depth-0 bordered',
                    this.type === 'color' && 'border-0',
                    this.type === 'photoBg' && 'mb-4',
                    this.type === 'custom' && 'z-depth-0'
                );
            },
            headerClass() {
                return classNames(
                    this.type==='gradient' && 'rgba-stylish-strong z-depth-1 mb-1',
                    this.type==='picture' && 'blue lighten-3 z-depth-1',
                    this.type==='color' && `z-depth-1 ${this.color} lighten-${4-this.order}`,
                    this.type==='photoBg' && 'p-0'
                );
            },
            headingClass() {
                return classNames(
                    'mb-0',
                    this.type==='gradient' && 'white-text text-uppercase font-thin',
                    this.type==='picture' && 'text-uppercase py-1 font-weight-bold white-text',
                    this.type==='icon' && 'mt-3 red-text',
                    this.type==='color' && 'black-text text-center font-weight-bold text-uppercase',
                    this.type==='photoBg' && 'text-uppercase white-text py-3 mt-1',
                    this.type==='table' && 'mt-1'
                );
            },
            bodyClass() {
                return classNames(
                    this.type==='color' && `rgba-${this.color}-strong white-text`,
                    this.type==='gradient' && 'mb-1 rgba-grey-light white-text',
                    this.type==='photoBg' && 'rgba-black-light white-text z-depth-1'
                );
            },
            paragraphClass() {
                return classNames(
                    this.type==='default' ? 'p-3': 'p-4'
                );
            },

        }
    };
    export default AccordionPane;
    export { AccordionPane as mdbAccordionPane };
</script>

<style scoped>
    a.fix:not([href]):not([tabindex]){
        color: #007bff;
    }
    a.fix:not([href]):not([tabindex]):hover {
        color: #0056b3;
    }
    .collapse-item {
        overflow: hidden;
        height: 0;
        padding: 0;
        transition: height .5s;
    }

    /* Icon 1 */

    .animated-icon1, .animated-icon3, .animated-icon4 {
        width: 30px;
        height: 20px;
        position: relative;
        margin: 0px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    .animated-icon1 span, .animated-icon3 span, .animated-icon4 span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .animated-icon1 span {
        background: #e65100;
    }

    .animated-icon3 span {
        background: #e3f2fd;
    }

    .animated-icon4 span {
        background: #f3e5f5;
    }

    .animated-icon1 span:nth-child(1) {
        top: 0px;
    }

    .animated-icon1 span:nth-child(2) {
        top: 10px;
    }

    .animated-icon1 span:nth-child(3) {
        top: 20px;
    }

    .animated-icon1.open span:nth-child(1) {
        top: 11px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    .animated-icon1.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    .animated-icon1.open span:nth-child(3) {
        top: 11px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    .accordion .card {
        overflow: visible;
    }
</style>
