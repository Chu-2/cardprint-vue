import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = () => ({
  selectedCardIndex: 0,
  cards: [
    {
      background: "#ffffff",
      foreground: "#000000",
      foregroundControl: "dark",
      width: "2.75in",
      height: "2.75in",
      sizeControl: "big",
      number: "",
      subject: "",
      tracker: "",
      product: ""
    }
  ]
});

export default new Vuex.Store({
  state: initialState(),
  getters: {
    getSelectedCard(state) {
      return state.cards[state.selectedCardIndex];
    }
  },
  mutations: {
    createCard(state, payload) {
      state.cards.push(payload);
      state.selectedCardIndex = state.cards.length - 1;
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
  }
});
