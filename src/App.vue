<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="wrapper">
      <div class="canvas">
        <CardForm v-for="(card, index) in cards" :card='card' :index="index"></CardForm>
      </div>
      <div class="controls">
        <TheControls></TheControls>
      </div>
    </div>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheControls from './components/TheControls.vue';
  import CardForm from './components/CardForm.vue';

  export default {
    name: 'app',
    components: {
      TheHeader,
      TheControls,
      CardForm
    },
    computed: {
      cards() {
        return this.$store.state.cards;
      }
    }
  };
</script>

<style>
  :root {
    --near-black: #111111;
    --near-white: #F4F4F4;
    --washed-yellow: #FFFCEB;
    --light-yellow: #FBF1A9;
    --light-green: #9EEBCF;
  }
</style>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .canvas {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .controls {
    width: 18rem;
    background-color: var(--washed-yellow);
    border-left: 1px solid var(--light-yellow);
  }

  @media print {
    .wrapper {
      position: relative;
      display: block;
    }

    .controls {
      display: none;
    }
  }
</style>
