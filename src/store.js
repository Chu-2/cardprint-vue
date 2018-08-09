import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function initialState() {
  return {
    selectedCard: 0,
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
      state.selectedCard = state.cards.length - 1;
    },
    resetState(state) {
      const initial = initialState();
      Object.keys(initial).forEach(key => {
        state[key] = initial[key]
      })
    },
    updateSelectedCard(state, index) {
      state.selectedCard = index;
    },
    updateCardBgColor(state, value) {
      state.cards[state.selectedCard].background = value;
    },
    updateCardFgColor(state, value) {
      if (value === 'dark') {
        state.cards[state.selectedCard].foreground = '#000000';
        state.cards[state.selectedCard].foregroundControl = 'dark';
      } else if (value === 'light') {
        state.cards[state.selectedCard].foreground = '#ffffff';
        state.cards[state.selectedCard].foregroundControl = 'light';
      }
    },
    updateCardSize(state, value) {
      if (value === 'big') {
        state.cards[state.selectedCard].width = '2.75in';
        state.cards[state.selectedCard].height = '2.75in';
        state.cards[state.selectedCard].sizeControl = 'big';
      } else if (value === 'small') {
        state.cards[state.selectedCard].width = '1.75in';
        state.cards[state.selectedCard].height = '1.75in';
        state.cards[state.selectedCard].sizeControl = 'small';
      }
    },
    updateCardNumber(state, value) {
      state.cards[state.selectedCard].number = value;
    },
    updateCardSubject(state, value) {
      state.cards[state.selectedCard].subject = value;
    },
    updateCardTracker(state, value) {
      state.cards[state.selectedCard].tracker = value;
    },
    updateCardProduct(state, value) {
      state.cards[state.selectedCard].product = value;
    }
  }
});
