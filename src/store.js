import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const sizeBigTracker = ["Story", "Epic", "Bounty"];

const initialCardState = {
  isLoading: false,
  background: "#ffffff",
  foreground: "#000000",
  foregroundControl: "auto",
  width: "2.75in",
  height: "2.75in",
  sizeControl: "big",
  number: "",
  subject: "",
  parent: "",
  product: ""
};

export default new Vuex.Store({
  state: { selectedCardIndex: 0, cards: [{ ...initialCardState }] },
  getters: {
    getSelectedCard(state) {
      return state.cards[state.selectedCardIndex];
    }
  },
  mutations: {
    createCard(state, payload) {
      state.cards.push({ ...initialCardState, ...payload });
    },
    removeSelectedCard(state) {
      if (state.cards.length === 1) {
        return;
      }
      state.cards.splice(state.selectedCardIndex, 1);

      state.selectedCardIndex =
        state.selectedCardIndex === state.cards.length
          ? state.selectedCardIndex - 1
          : state.selectedCardIndex;
    },
    resetState(state) {
      state.selectedCardIndex = 0;
      state.cards = [{ ...initialCardState }];
    },
    updateCard(state, payload) {
      const newCard = { ...state.cards[payload.index], ...payload.card };
      state.cards.splice(payload.index, 1, newCard);
    },
    updateSelectedCard(state, payload) {
      const newCard = { ...state.cards[state.selectedCardIndex], ...payload };
      state.cards.splice(state.selectedCardIndex, 1, newCard);
    },
    updateSelectedCardIndex(state, index) {
      state.selectedCardIndex = index;
    }
  },
  actions: {
    getIssue({ commit }, payload) {
      commit("updateCard", { index: payload.index, card: { isLoading: true } });
      return axios
        .get("/.netlify/functions/redmine-bridge?issueId=" + payload.issueId)
        .then(result => {
          const sizeParams = sizeBigTracker.includes(result.data.tracker)
            ? { width: "2.75in", height: "2.75in", sizeControl: "big" }
            : { width: "1.75in", height: "1.75in", sizeControl: "small" };

          const card = {
            ...sizeParams,
            number: result.data.id,
            subject: result.data.subject,
            parent: result.data.parent,
            product: result.data.product,
            isLoading: false
          };

          commit("updateCard", { index: payload.index, card: card });
        });
    }
  }
});
