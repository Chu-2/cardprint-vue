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

        <Compact class="colorPicker" v-model="cardBgColor" />
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

        <div class="fgChooser">
          <input
            type="radio"
            name="fgColor"
            id="fgColorAuto"
            value="auto"
            v-model="cardFgColor"
          />
          <label for="fgColorLight">Auto</label>
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
import { Compact } from "vue-color";
import tinycolor from "tinycolor2";

export default {
  name: "ControlPanel",
  components: {
    Compact
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
        if (this.selectedCard.foregroundControl === "auto") {
          this.$store.commit("updateSelectedCard", {
            background: color.hex,
            foreground:
              tinycolor(color.hex).getLuminance() > 0.5 ? "#000000" : "#ffffff"
          });
        } else {
          this.$store.commit("updateSelectedCard", { background: color.hex });
        }
      }
    },
    cardFgColor: {
      get() {
        return this.selectedCard.foregroundControl;
      },
      set(value) {
        switch (value) {
          case "dark":
            this.$store.commit("updateSelectedCard", {
              foreground: "#000000",
              foregroundControl: "dark"
            });
            break;
          case "light":
            this.$store.commit("updateSelectedCard", {
              foreground: "#ffffff",
              foregroundControl: "light"
            });
            break;
          case "auto":
            this.$store.commit("updateSelectedCard", {
              foreground:
                tinycolor(this.selectedCard.background).getLuminance() > 0.5
                  ? "#000000"
                  : "#ffffff",
              foregroundControl: "auto"
            });
            break;
        }
      }
    },
    cardSize: {
      get() {
        return this.selectedCard.sizeControl;
      },
      set(value) {
        if (value === "big") {
          this.$store.commit("updateSelectedCard", {
            width: "2.75in",
            height: "2.75in",
            sizeControl: "big"
          });
        } else if (value === "small") {
          this.$store.commit("updateSelectedCard", {
            width: "1.75in",
            height: "1.75in",
            sizeControl: "small"
          });
        }
      }
    }
  },
  methods: {
    newCard() {
      this.$store.commit("createCard", {
        background: this.selectedCard.background,
        foreground: this.selectedCard.foreground,
        foregroundControl: this.selectedCard.foregroundControl,
        width: this.selectedCard.width,
        height: this.selectedCard.height,
        sizeControl: this.selectedCard.sizeControl,
        number: "",
        subject: "",
        parent: this.selectedCard.parent,
        product: this.selectedCard.product
      });
      this.$store.commit(
        "updateSelectedCardIndex",
        this.$store.state.cards.length - 1
      );
    },
    removeCard() {
      this.$store.commit("removeSelectedCard");
    },
    reset() {
      this.$store.commit("resetState");
    }
  }
};
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
  margin: 0.25rem 0;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.fgChooser,
.sizeChooser {
  margin-bottom: 0.125rem;
}

.fgChooser label,
.sizeChooser label {
  margin-left: 0.5rem;
}
</style>
