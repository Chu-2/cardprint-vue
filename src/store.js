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

    },
    updateCardSize(state, value) {

    },
    updateCardNumber(state, value) {

    },
    updateCardSubject(state, value) {

    }
  }
});
