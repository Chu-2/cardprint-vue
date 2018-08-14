<template>
  <div class="inner" :style="{order: index}">
    <div :class="['cardBleed', selectedClass]"
         :style="{backgroundColor: currentCard.background, color: currentCard.foreground}">
      <div class="wrapper">
        <div class="card" :style="{width: currentCard.width, height: currentCard.height}">
          <div class="number">
            <div class="numberInner">
              <input
                  class="numberInput"
                  type="text"
                  placeholder="10001"
                  :value="currentCard.number"
                  @change="handleCardNumber"
                  @focus="selectCard"
              />
            </div>
          </div>
          <div class="body">
            <div class="bodyInputWrapper">
              <textarea
                  class="bodyInput"
                  :value="currentCard.subject"
                  @change="handleCardSubject"
                  @focus="selectCard">
              </textarea>
            </div>
          </div>

          <div class="footer">
            <div class="parentNumber">
              <input
                  type="text"
                  placeholder="Tracker"
                  :value="currentCard.tracker"
                  @change="handleCardTracker"
                  @focus="selectCard"
              />
            </div>

            <div class="project">
              <input
                  type="text"
                  placeholder="Product"
                  :value="currentCard.product"
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
    props: ['card', 'index'],
    computed: {
      currentCard() {
        return this.card;
      },
      selectedClass() {
        return (this.index === this.$store.state.selectedCardIndex && this.$store.state.cards.length > 1) ?
          'selected' : '';
      }
    },
    methods: {
      selectCard() {
        this.$store.commit('updateSelectedCardIndex', this.index);
      },
      handleCardNumber(event) {
        this.$store.commit('updateCardNumber', event.target.value);
      },
      handleCardSubject(event) {
        this.$store.commit('updateCardSubject', event.target.value);
      },
      handleCardTracker(event) {
        this.$store.commit('updateCardTracker', event.target.value);
      },
      handleCardProduct(event) {
        this.$store.commit('updateCardProduct', event.target.value);
      }
    }
  }
</script>

<style scoped>
  .inner {
    margin: 1rem;
  }

  .cardBleed {
    display: inline-block;
    transition: background-color 0.2s ease, color 0.2s ease;

    /* Printing workarounds */
    -webkit-print-color-adjust: exact;
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
    .selected {
      outline: none;
    }
  }
</style>
