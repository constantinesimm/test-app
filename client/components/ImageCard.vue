<template>
    <div class="image-card">
        <div class="image-card__header">
            <div class="image-card__comments">
                <i class="far fa-comments fa-lg"></i> {{ comments }}
            </div>
            <div class="image-card__likes">
                <i class="far fa-thumbs-up fa-lg"></i> {{ likes }}
            </div>
        </div>
        <div class="image-card__body">
            <img :src="url" width="300" height="150"/>
        </div>
        <div class="image-card__footer">
            <div class="image-card__tag" v-for="tag of tags"> 
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'ImageCard',
        props: ['url', 'comments', 'likes', 'tags']
    }
</script>

<style scoped lang="scss">
    .image-card {
        width: 300px;
        color: #303133;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        .image-card__header {
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

        .image-card__footer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 5px 10px 10px 10px;

            .image-card__tag {
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
    }
</style>