import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        subject: ''
      }
    ]
  },
  mutations: {
    selectCard(state, index) {
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

    },
    updateCardSubject(state, value) {

    }
  }
});
