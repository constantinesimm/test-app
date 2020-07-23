<template>
    <div class="image-card__body" @click="showCardDetails(url)">
        <img :src="url" width="300" height="150"/>
    </div>
</template>

<script>
    export default {
        props: ['url'],
        methods: {
            showCardDetails(cardUrl) {
                const cardItem = this.$store.getters.getImageData.filter(item => item.previewURL === cardUrl).shift();

                this.$router.push({ path: '/card/details', query: cardItem });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image-card__body {
        img {
            cursor: pointer;
        }
    }
</style>