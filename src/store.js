import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function initialState() {
  return {
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
  }
}

export default new Vuex.Store({
  state: initialState(),
  mutations: {
    createCard(state) {
      state.cards.push({
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
      });
      state.selectedCardIndex = state.cards.length - 1;
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
      state.cards[state.selectedCardIndex].background = value;
    },
    updateCardFgColor(state, payload) {
      state.cards[state.selectedCardIndex].foreground = payload.foreground;
      state.cards[state.selectedCardIndex].foregroundControl = payload.foregroundControl;
    },
    updateCardSize(state, payload) {
      state.cards[state.selectedCardIndex].width = payload.width;
      state.cards[state.selectedCardIndex].height = payload.height;
      state.cards[state.selectedCardIndex].sizeControl = payload.sizeControl;
    },
    updateCardNumber(state, value) {
      state.cards[state.selectedCardIndex].number = value;
    },
    updateCardSubject(state, value) {
      state.cards[state.selectedCardIndex].subject = value;
    },
    updateCardTracker(state, value) {
      state.cards[state.selectedCardIndex].tracker = value;
    },
    updateCardProduct(state, value) {
      state.cards[state.selectedCardIndex].product = value;
    }
  },
  getters: {
    selectedCard(state) {
      return state.cards[state.selectedCardIndex];
    }
  }
});
