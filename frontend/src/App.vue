<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = 'JWT';
  },
};
</script>

<style>
  * {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
