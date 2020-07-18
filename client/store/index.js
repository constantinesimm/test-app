import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Modules
 */
import examp from './modules/examp';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    examp
  }
});