<template>
    <div class="grid-wrapper">
        <div class="images-filter">
            <input @keyup="filteredData" class="images-filter__input" placeholder="Input tag for filter">
        </div>
        <div class="images-row" v-for="row in imageCardsRow">
            <div class="images-col" v-for="item in row">
                <image-card :data="item" @sort="sortData" @filter="filteredData" />
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import { debounced, chunk } from '../utils/utils';
    import ImageCard from '../components/ImageCard';

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
        components: {
            ImageCard
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
        }
    }
</style>