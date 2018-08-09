<template>
  <div>
    <div class="wrapper">
      <div class="control">
        <h3 class="controlHeading">Card color</h3>

        <Compact :value="selectedCard.background" @input="handleCardBgColor" class="colorPicker"/>
      </div>

      <div class="control">
        <h3 class="controlHeading">Text Color</h3>

        <div class="fgChooser">
          <input
              type="radio"
              name="fgColor"
              id="fgColorDark"
              value="dark"
              :checked="selectedCard.foregroundControl  === 'dark'"
              @change="handleCardFgColor"
          />
          <label for="fgColorDark">Dark</label>
        </div>

        <div class="fgChooser">
          <input
              type="radio"
              name="fgColor"
              id="fgColorLight"
              value="light"
              :checked="selectedCard.foregroundControl === 'light'"
              @change="handleCardFgColor"
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
              :checked="selectedCard.sizeControl  === 'big'"
              @change="handleCardSize"
          />
          <label for="sizeBig">Big</label>
        </div>

        <div class="sizeChooser">
          <input
              type="radio"
              name="size"
              id="sizeSmall"
              value="small"
              :checked="selectedCard.sizeControl  === 'small'"
              @change="handleCardSize"
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
        return this.$store.state.cards[this.$store.state.selectedCard];
      }
    },
    methods: {
      handleCardBgColor(color) {
        this.$store.commit('updateCardBgColor', color.hex);
      },
      handleCardFgColor(event) {
        this.$store.commit('updateCardFgColor', event.target.value);
      },
      handleCardSize(event) {
        this.$store.commit('updateCardSize', event.target.value);
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    margin: 1rem;
    padding-top: 4rem;
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
