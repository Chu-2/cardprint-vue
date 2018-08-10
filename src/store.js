import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = () => ({
  selectedCardIndex: 0,
  cards: [
    {
      background: '#ffffff',
      foreground: '#000000',
      foregroundControl: 'dark',
      width: '2.75in',
      height: '2.75in',
      sizeControl: 'big',
      number: '',
      subject: '',
      tracker: '',
      product: '',
    }
  ]
});

const state = initialState();

const selectedCard = () => state.cards[state.selectedCardIndex];

const getters = {
  getSelectedCard() {
    return selectedCard();
  }
};

const mutations = {
  createCard(state, payload) {
    state.cards.push(payload);
    state.selectedCardIndex = state.cards.length - 1;
  },
  removeSelectedCard(state) {
    state.cards.splice(state.selectedCardIndex, 1);
    state.selectedCardIndex = 0;
  },
  resetState(state) {
    const initial = initialState();
    Object.keys(initial).forEach(key => {
      state[key] = initial[key]
    })
  },
  updateSelectedCardIndex(state, index) {
    state.selectedCardIndex = index;
  },
  updateCardBgColor(state, value) {
    selectedCard().background = value;
  },
  updateCardFgColor(state, payload) {
    selectedCard().foreground = payload.foreground;
    selectedCard().foregroundControl = payload.foregroundControl;
  },
  updateCardSize(state, payload) {
    selectedCard().width = payload.width;
    selectedCard().height = payload.height;
    selectedCard().sizeControl = payload.sizeControl;
  },
  updateCardNumber(state, value) {
    selectedCard().number = value;
  },
  updateCardSubject(state, value) {
    selectedCard().subject = value;
  },
  updateCardTracker(state, value) {
    selectedCard().tracker = value;
  },
  updateCardProduct(state, value) {
    selectedCard().product = value;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
