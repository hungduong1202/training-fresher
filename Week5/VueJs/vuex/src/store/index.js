// import Vuex from "vuex";
// import Vue from "vue";
import todos from "./modules/todos";
import { createStore } from "vuex";

// Load VueX

// Vue.use(Vuex);

// Create Store

const store = createStore({
  modules: {
    todos,
  },
});

export default store;
