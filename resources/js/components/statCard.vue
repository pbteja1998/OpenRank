<template>
    <mdb-card>
        <mdb-card-image :src="card.imgSrc" alt="Stat Card Image" v-if="card.imgSrc"></mdb-card-image>
        <mdb-card-body>
            <mdb-card-title v-if="card.title">{{ card.title }}</mdb-card-title>
            <mdb-card-text v-if="card.value != null" class="card-value">{{ card.value }}</mdb-card-text>
            <mdb-btn color="primary" v-if="card.buttonText">{{ card.buttonText }}</mdb-btn>
        </mdb-card-body>
    </mdb-card>
</template>

<script>
    import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
    export default {
        name: 'statCard',
        props: ['card'],
        components: {
            mdbCard,
            mdbCardImage,
            mdbCardBody,
            mdbCardTitle,
            mdbCardText,
            mdbBtn
        }
    };
</script>
