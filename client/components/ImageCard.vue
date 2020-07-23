<template>
    <div class="image-card">
        <image-card-header :comments="data.comments" :likes="data.likes"/>
        <image-card-body :url="data.previewURL" />
        <image-card-footer :tags="data.tags" />
    </div>
</template>

<script>
    import ImageCardHeader from './ImageCardHeader';
    import ImageCardBody from './ImageCardBody';
    import ImageCardFooter from './ImageCardFooter';

    export default {
        name: 'ImageCard',
        props: ['data'],
        components: {
            ImageCardHeader, ImageCardBody, ImageCardFooter
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
    }
</style>