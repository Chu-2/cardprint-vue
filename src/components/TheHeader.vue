<template>
  <div>
    <div class="wrapper">
      <h1 class="title">
        <a class="logo" href="/">Kanban card</a>
      </h1>
      <div class="actions">
        <div>
          <a class="link" @click="handlePrintClick">Print</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
    methods: {
      handlePrintClick() {
        if (typeof window !== 'undefined') {
          window.print();
        }
      },
    },
  };
</script>

<style scoped>
  .wrapper {
    flex: 0 1 auto;
    display: flex;
    justify-content: space-between;
    background-color: var(--near-black);
    padding: 1rem;
  }

  .title {
    margin: 0;
    font-size: 1rem;
  }

  .logo {
    color: var(--near-white);
    text-decoration: none;
  }

  .actions {
    display: flex;
  }

  .link {
    border-bottom: 1px dotted var(--near-white);
    text-decoration: none;
    color: var(--near-white);
  }

  .link:hover {
    color: var(--light-green);
    border-bottom-color: var(--light-green);
    cursor: pointer;
  }

  @media print {
    .wrapper {
      display: none;
    }
  }
</style>
