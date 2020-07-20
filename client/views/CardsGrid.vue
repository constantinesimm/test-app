<template>
    <div class="grid-wrapper">
        <div class="images-filter">
            <input v-model="searchInput" class="images-filter__input" placeholder="Input tag for filter">
        </div>
        <div class="images-row" v-for="row in imageCardsRow">
            <div class="image-col" v-for="item in row">
                <image-card :comments="item.comments" :likes="item.likes" :url="item.previewURL" :tags="[...item.tags.split(',')]"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import { debounced, chunk } from '../utils/utils';
    import ImageCard from '../components/ImageCard';

    export default {
        components: {
            ImageCard
        },
        data() {
            return {
                itemsPerRow: 4,
                imageData: '',
                searchInput: ''
            }
        },
        computed: {
            imageCardsRow() {
                return chunk(this.$store.getters.getImageData, this.itemsPerRow);
            }
        },
        created() {
            this.$store.dispatch('loadData')
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
        }
    }
</style>