<template>
  <div class="inner">
    <div class="cardBleed" :style="{backgroundColor: currentCard.background, color: currentCard.foreground}">
      <div class="wrapper">
        <div class="card">
          <div class="number">
            <div class="numberInner">
              <input
                  type="text"
                  placeholder="10001"
                  class="numberInput"
              />
            </div>
          </div>
          <div class="body">
            <div class="bodyInputWrapper">
              <textarea class="bodyInput"></textarea>
            </div>
          </div>

          <div class="footer">
            <div class="parentNumber">
              <input type="text" placeholder="Tracker"/>
            </div>

            <div class="project">
              <input type="text" placeholder="Product"/>
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
    computed: {
      currentCard() {
        return this.$store.state.cards[0];
      }
    }
  }
</script>

<style scoped>
  .inner {
    position: absolute;
    z-index: 20;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 4rem;
  }

  @media print {
    .inner {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  }

  .cardBleed {
    display: inline-block;
    margin-left: 1rem;
    transition: background-color 0.2s ease, color 0.2s ease;

    /* Printing workarounds */
    -webkit-print-color-adjust: exact;
    printer-colors: exact;
    color-adjust: exact;
  }

  .wrapper {
    margin: 1rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: 1px dashed black;
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
</style>
