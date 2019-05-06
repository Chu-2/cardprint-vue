<template>
  <div class="inner" :style="{ order: index }">
    <div
      :class="['cardBleed', selectedClass]"
      :style="{ backgroundColor: card.background, color: card.foreground }"
      @click="selectCard"
    >
      <div class="wrapper">
        <div v-if="card.isLoading" class="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          v-else
          class="card"
          :style="{ width: card.width, height: card.height }"
        >
          <div class="number">
            <div class="numberInner">
              <input
                class="numberInput"
                type="text"
                placeholder="10001"
                :value="card.number"
                @change="handleCardNumber"
                @focus="selectCard"
              />
            </div>
          </div>
          <div class="body">
            <div class="bodyInputWrapper">
              <textarea
                class="bodyInput"
                :value="card.subject"
                @change="handleCardSubject"
                @focus="selectCard"
              >
              </textarea>
            </div>
          </div>
          <div class="footer">
            <div class="parentNumber">
              <input
                type="text"
                placeholder="Parent"
                :value="card.parent"
                @change="handleCardParent"
                @focus="selectCard"
              />
            </div>
            <div class="project">
              <input
                type="text"
                placeholder="Product"
                :value="card.product"
                @change="handleCardProduct"
                @focus="selectCard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  props: ["card", "index"],
  computed: {
    selectedClass() {
      return this.index === this.$store.state.selectedCardIndex &&
        this.$store.state.cards.length > 1
        ? "selected"
        : "";
    }
  },
  methods: {
    selectCard() {
      this.$store.commit("updateSelectedCardIndex", this.index);
    },
    handleCardNumber(event) {
      this.$store.commit("updateSelectedCard", { number: event.target.value });
    },
    handleCardSubject(event) {
      this.$store.commit("updateSelectedCard", { subject: event.target.value });
    },
    handleCardParent(event) {
      this.$store.commit("updateSelectedCard", { parent: event.target.value });
    },
    handleCardProduct(event) {
      this.$store.commit("updateSelectedCard", { product: event.target.value });
    }
  }
};
</script>

<style scoped>
.inner {
  margin: 1rem;
}

.cardBleed {
  display: inline-block;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.selected {
  outline: 3px solid var(--near-blue);
}

.wrapper {
  margin: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px dashed var(--near-black);
  overflow: hidden;
  transition: width 0.2s ease, height 0.2s ease;
}

.number {
  width: 100%;
  font-weight: bold;
}

.numberInner {
  padding: 0.125in;
}

.numberInput {
  width: 75%;
  background-color: transparent;
  border: none;
}

.body {
  position: relative;
  flex: 1;
}

.bodyInputWrapper {
  position: absolute;
  top: 0;
  right: 0.125in;
  bottom: 0;
  left: 0.125in;
}

.bodyInput {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  resize: none;
  background-color: transparent;
}

.footer {
  display: flex;
  padding: 0.125in;
}

.parentNumber,
.project {
  flex: 1;
}

.parentNumber input,
.project input {
  display: inline-block;
  width: 90%;
  border: 0;
  background-color: transparent;
}

.project {
  text-align: right;
}

.project input {
  text-align: right;
}

@media print {
  .cardBleed {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  .selected {
    outline: none;
  }
}

@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
