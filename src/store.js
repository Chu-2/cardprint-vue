import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const sizeBigTracker = ["Story", "Epic", "Bounty"];

const initialState = () => ({
  selectedCardIndex: 0,
  cards: [
    {
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
    }
  ]
});

export default new Vuex.Store({
  state: initialState(),
  getters: {
    getCards(state) {
      return state.cards;
    },
    getSelectedCard(state) {
      return state.cards[state.selectedCardIndex];
    }
  },
  mutations: {
    createCard(state, payload) {
      state.cards.push(payload);
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
      const initial = initialState();
      Object.keys(initial).forEach(key => (state[key] = initial[key]));
    },
    updateSelectedCardIndex(state, index) {
      state.selectedCardIndex = index;
    },
    updateCard(state, payload) {
      const newCard = { ...state.cards[state.selectedCardIndex], ...payload };
      state.cards.splice(state.selectedCardIndex, 1, newCard);
    }
  },
  actions: {
    getIssue({ commit }, issueId) {
      return axios
        .get("/.netlify/functions/redmine-bridge?issueId=" + issueId)
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
          commit("updateCard", card);
        });
    }
  }
});
