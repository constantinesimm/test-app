<template>
    <div class="image-card__tags">
        <div class="image-tag__info" v-for="tag of tags.split(',')"> 
            {{ tag }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tags']
    }
</script>

<style lang="scss" scoped>
    .image-card__tags {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 5px 10px 10px 10px;

        .image-tag__info {
            background-color: #ecf5ff;
            display: inline-block;
            height: 32px;
            padding: 0 15px;
            line-height: 30px;
            font-size: 14px;
            color: #409eff;
            border: 1px solid #d9ecff;
            border-radius: 20px;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
        }
    }
</style>