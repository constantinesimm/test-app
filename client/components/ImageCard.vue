<template>
    <div class="image-card">
        <image-card-reaction :comments="data.comments" :likes="data.likes"/>
        
        <div class="image-card__preview" @click="showCardDetails(data)">
            <img :src="data.previewURL" width="300" height="150"/>
        </div>
        
        <image-card-tags :tags="data.tags" />
    </div>
</template>

<script>
    import ImageCardReaction from './ImageCardReaction';
    import ImageCardTags from './ImageCardTags';

    export default {
        name: 'ImageCard',
        props: ['data'],
        components: {
            ImageCardReaction, ImageCardTags
        },
        methods: {
            showCardDetails(imageCard) {
                this.$router.push({ path: '/card/details', query: imageCard });
            }
        }
    }
</script>

<style scoped lang="scss">
    .image-card {
        width: 300px;
        color: #303133;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        .image-card__preview {
            img {
                cursor: pointer;
            }
        }
    }
</style>