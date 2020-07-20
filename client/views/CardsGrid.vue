<template>
    <div class="grid-wrapper">
        <div class="images-filter">
            <input @keyup="filteredData" class="images-filter__input" placeholder="Input tag for filter">
        </div>
        <div class="images-row" v-for="row in imageCardsRow">
            <div class="images-col" v-for="item in row">
                <div class="image-card">
                    <div class="image-card__header">
                        <div class="image-card__comments" @click="sortData('comments')">
                            <i class="far fa-comments fa-lg"></i> {{ item.comments }}
                        </div>
                        <div class="image-card__likes" @click="sortData('likes')">
                            <i class="far fa-thumbs-up fa-lg"></i> {{ item.likes }}
                        </div>
                    </div>
                    <div class="image-card__body">
                        <img :src="item.previewURL" @click="showCardDetails(item)" width="300" height="150"/>
                    </div>
                    <div class="image-card__footer">
                        <div class="image-card__tag" v-for="tag of item.tags.split(',')"> 
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import { debounced, chunk } from '../utils/utils';

    export default {
        data() {
            return {
                itemsPerRow: 4,
                sortDirection: {
                    likes: 'asc',
                    comments: 'asc'
                },
                tagEdit: false,
                imageData: []
            }
        },
        computed: {
            imageCardsRow() {
                return chunk(this.imageData, this.itemsPerRow);
            }
        },
        created() {
            this.$store.dispatch('loadData');
            
            setTimeout(() => this.imageData = this.$store.getters.getImageData, 500)
        },
        methods: {
            filteredData: debounced(function(e) {
                if (!e.target.value) this.imageData = this.$store.getters.getImageData;
                return this.imageData = this.imageData.filter(item => item.tags.indexOf(e.target.value) !== -1)
            }, 300),

            sortData(type) {
                if (this.sortDirection[type] === 'asc') {
                    this.sortDirection[type] = 'desc';

                    return this.imageData.sort((a,b) => a[type] > b[type] ? 1 : -1);
                } else {
                    this.sortDirection[type] = 'asc';

                    return this.imageData.sort((a,b) => a[type] < b[type] ? 1 : -1);
                }
            },

            showCardDetails(card) {
                this.$router.push({ path: '/card/details', query: card });
            }
        }
    }
</script>

<style scoped lang="scss">
    .grid-wrapper {
        display: flex;
        flex-direction: column;
        margin: 50px 100px;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.05), 0 5px 25px 0 rgba(0, 0, 0, 0.05);

        .images-filter {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 25px;

            .images-filter__input {
                width: 300px;
                height: 25px;
                border: 2px solid #d9ecff;
                border-radius: 5px;

                :focus {
                    border: 1px solid #d9ecff!important;
                }
            }
        }

        .images-row {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 10px;

            .images-col {
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

                    .image-card__body {
                        img {
                            cursor: pointer;
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
                            padding: 0 7px;
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
            }
        }
    }
</style>