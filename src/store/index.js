import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: JSON.parse(localStorage.getItem("account") || "[]"),
  },
  mutations: {
    editAccount(state, accountCharacters) {
      state.account = [];
      state.account.push(accountCharacters.account);
      localStorage.setItem("account", JSON.stringify(state.account));
    },
  },
  actions: {
    editAccount({ commit }, accountCharacters) {
      commit("editAccount", accountCharacters);
    },
  },
  modules: {},
  getters: {
    account: (s) => s.account,
  },
});
