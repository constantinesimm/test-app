<template>
    <div class="card-details__wrapper">
        <div class="image-card">
            <div class="image-card__header">
                <h1>Image Card ID: {{ this.cardDetail.id }}</h1>
            </div>
            
            <div class="image-card__body">
                <div class="card-body__preview">
                    <img :src="this.cardDetail.webformatURL" :width="this.cardDetail.webformatWidth" :height="this.cardDetail.webformatHeight" />
                </div>
                <div class="image-card__details">
                    <div class="card-body__row">
                        <div>User:</div><div>{{ this.cardDetail.user }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>User ID</div><div>{{ this.cardDetail.user_id }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>User image URL:</div><a :href="this.cardDetail.userImageURL" target="_blank"><i class="fas fa-link"></i> Link</a>
                    </div>
                    <div class="card-body__row">
                        <div>Tags:</div><div>{{ this.cardDetail.tags }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Likes:</div><div>{{ this.cardDetail.likes }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Comments:</div><div>{{ this.cardDetail.comments }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Downloads: </div><div>{{ this.cardDetail.downloads }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Favorites: </div><div>{{ this.cardDetail.favorites }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Views:</div><div>{{ this.cardDetail.views }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image type:</div><div>{{ this.cardDetail.type }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image height:</div><div>{{ this.cardDetail.imageHeight }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image width:</div><div>{{ this.cardDetail.imageWidth }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image size:</div><div>{{ this.cardDetail.imageSize }}</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image preview height:</div><div>{{ this.cardDetail.previewHeight }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image preview width:</div><div>{{ this.cardDetail.previewWidth }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image webformat height:</div><div>{{ this.cardDetail.webformatHeight }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Image webformat width:</div><div>{{ this.cardDetail.webformatWidth }}px</div>
                    </div>
                    <div class="card-body__row">
                        <div>Large image URL:</div><a :href="this.cardDetail.largeImageURL" target="_blank"><i class="fas fa-link"></i> Link</a>
                    </div>
                    <div class="card-body__row">
                        <div>Image preview URL:</div><a :href="this.cardDetail.previewURL" target="_blank"><i class="fas fa-link"></i> Link</a>
                    </div>
                    <div class="card-body__row">
                        <div>Image webformat image URL:</div><a :href="this.cardDetail.webformatURL" target="_blank"><i class="fas fa-link"></i> Link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardDetail: this.$route.query
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-details__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px auto;
        width: 1150px;
        border-radius: 10px;
        box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.05), 0 5px 25px 0 rgba(0, 0, 0, 0.05);
    
        .image-card {
            color: #303133;
            border-radius: 4px;
            border: 1px solid #ebeef5;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

            .image-card__header {
                text-align: center;
                border-bottom: 1px solid #ebeef5;
            }

            .image-card__body {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 25px;

                .card-body__preview {
                    width: 640px;
                    margin-right: 10px;
                }
                
                .image-card__details {
                    display: flex;
                    flex-direction: column;
                    width: 500px;
                    border-left: 1px solid #c7cad2;
                    padding-left: 10px;

                    .card-body__row {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 5px 0 5px 0;

                        div:first-child {
                            font-weight: bold;
                        }

                        a {
                            text-decoration: none;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
</style>