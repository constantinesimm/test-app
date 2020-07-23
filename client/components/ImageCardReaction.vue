<template>
    <div class="image-card__reaction">
        <div class="image-reaction__comments" @click="sortImageCards('comments')">
            <i class="far fa-comments fa-lg"></i> {{ comments }}
        </div>
        <div class="image-reaction__likes" @click="sortImageCards('likes')">
            <i class="far fa-thumbs-up fa-lg"></i> {{ likes }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['comments', 'likes'],
        methods: {
            sortImageCards(type) {
                this.$parent.$emit('sort', type);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image-card__reaction {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 10px 10px 5px 10px;

        div {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            color: #409eff;
            cursor: pointer;

            &:first-child {
                margin-right: 10px;
            }

            i {
                margin: 0 5px 0 5px;
            }
        }
    }
</style>