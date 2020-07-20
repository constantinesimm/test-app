import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageData: []
  },
  mutations: {
    loadData(state, data) {
      state.imageData = data;
    }
  },
  actions: {
    loadData({ commit }) {
      return new Promise((resolve, reject) => {
        Axios
          .get('https://pixabay.com/api/?key=17537411-b97894ce892e5ae6cf0c841d2&q=cats&image_type=all&per_page=100')
          .then(response => {
            commit('loadData', response.data.hits);

            return resolve(response.data);
          })
          .catch(error => reject(error));
      })
    }
  },
  getters: {
    getImageData: state => state.imageData
  }
})