<template>
  <div>
    <div class="wrapper">
      <div class="control">
        <h3 class="controlHeading">Manage</h3>

        <button @click="newCard">New card</button>
        <button @click="removeCard">Remove</button>
        <button @click="reset">Reset</button>
      </div>

      <div class="control">
        <h3 class="controlHeading">Card color</h3>

        <Compact class="colorPicker" v-model="cardBgColor"/>
      </div>

      <div class="control">
        <h3 class="controlHeading">Text Color</h3>

        <div class="fgChooser">
          <input
              type="radio"
              name="fgColor"
              id="fgColorDark"
              value="dark"
              v-model="cardFgColor"
          />
          <label for="fgColorDark">Dark</label>
        </div>

        <div class="fgChooser">
          <input
              type="radio"
              name="fgColor"
              id="fgColorLight"
              value="light"
              v-model="cardFgColor"
          />
          <label for="fgColorLight">Light</label>
        </div>
      </div>

      <div class="control">
        <h3 class="controlHeading">Size</h3>

        <div class="sizeChooser">
          <input
              type="radio"
              name="size"
              id="sizeBig"
              value="big"
              v-model="cardSize"
          />
          <label for="sizeBig">Big</label>
        </div>

        <div class="sizeChooser">
          <input
              type="radio"
              name="size"
              id="sizeSmall"
              value="small"
              v-model="cardSize"
          />
          <label for="sizeSmall">Small</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Compact} from 'vue-color';

  export default {
    name: "ControlPanel",
    components: {
      Compact,
    },
    computed: {
      selectedCard() {
        return this.$store.getters.getSelectedCard;
      },
      cardBgColor: {
        get() {
          return this.selectedCard.background;
        },
        set(color) {
          this.$store.commit('updateCardBgColor', color.hex);
        }
      },
      cardFgColor: {
        get() {
          return this.selectedCard.foregroundControl;
        },
        set(value) {
          if (value === 'dark') {
            this.$store.commit('updateCardFgColor', {foreground: '#000000', foregroundControl: 'dark'});
          } else if (value === 'light') {
            this.$store.commit('updateCardFgColor', {foreground: '#ffffff', foregroundControl: 'light'});
          }
        }
      },
      cardSize: {
        get() {
          return this.selectedCard.sizeControl;
        },
        set(value) {
          if (value === 'big') {
            this.$store.commit('updateCardSize', {width: '2.75in', height: '2.75in', sizeControl: 'big'});
          } else if (value === 'small') {
            this.$store.commit('updateCardSize', {width: '1.75in', height: '1.75in', sizeControl: 'small'});
          }
        }
      }
    },
    methods: {
      newCard() {
        this.$store.commit('createCard', {
          background: this.selectedCard.background,
          foreground: this.selectedCard.foreground,
          foregroundControl: this.selectedCard.foregroundControl,
          width: this.selectedCard.width,
          height: this.selectedCard.height,
          sizeControl: this.selectedCard.sizeControl,
          number: '',
          subject: '',
          tracker: this.selectedCard.tracker,
          product: this.selectedCard.product,
        });
      },
      removeCard() {
        this.$store.commit('removeSelectedCard');
      },
      reset() {
        this.$store.commit('resetState');
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    margin: 1rem;
    padding-top: 1rem;
  }

  .control {
    margin-bottom: 1rem;
  }

  .colorPicker {
    margin-bottom: 1rem;
  }

  .controlHeading {
    margin: .25rem 0;
    font-size: .8rem;
    text-transform: uppercase;
  }

  .fgChooser,
  .sizeChooser {
    margin-bottom: .125rem;
  }

  .fgChooser label,
  .sizeChooser label {
    margin-left: .5rem;
  }
</style>
