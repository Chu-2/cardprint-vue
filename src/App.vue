<template>
  <div class="main" id="app">
    <TheHeader></TheHeader>
    <div class="wrapper">
      <div class="canvas">
        <CardForm
          v-for="(card, index) in cards"
          :card="card"
          :index="index"
          :key="index"
        />
      </div>
      <div class="controls">
        <TheControls></TheControls>
      </div>
    </div>
  </div>
</template>

<script>
import QueryString from "querystringify";
import TheHeader from "./components/TheHeader.vue";
import TheControls from "./components/TheControls.vue";
import CardForm from "./components/CardForm.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheControls,
    CardForm
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  },
  created() {
    const query = QueryString.parse(location.search);

    if (query.number) {
      this.$store.commit("updateCard", { isLoading: true });
      this.$store.dispatch("getIssue", query.number).catch(() => {
        this.$store.commit("updateCard", {
          isLoading: false,
          number: query.number,
          subject: query.subject
        });
      });
    } else {
      this.$store.commit("updateCard", {
        isLoading: false,
        number: query.number,
        subject: query.subject
      });
    }
  }
};
</script>

<style>
:root {
  --near-black: #111111;
  --near-white: #f4f4f4;
  --washed-yellow: #fffceb;
  --light-yellow: #fbf1a9;
  --light-green: #9eebcf;
  --near-blue: #1111ff;
}

html,
body {
  height: 100%;
  margin: 0;
}
</style>

<style scoped>
.main {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.wrapper {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.canvas {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
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
    display: block;
  }

  .canvas {
    align-items: flex-end;
  }

  .controls {
    display: none;
  }
}
</style>
