<template>
  <top-header></top-header>
  <router-view></router-view>
  <bottom-footter></bottom-footter>
</template>

<script>
import TopHeader from "./components/layout/TopHeader.vue";
import BottomFootter from "./components/layout/bottomFooter.vue";
export default {
  components: {
    TopHeader,
    BottomFootter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
  position: relative;
  min-height: 100%;
}

body {
  margin: 0;
  background-color: #fbd6c7;
  
  z-index: -10;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #e5e5f7 20px
    ),
    repeating-linear-gradient(#ffd5b955, #ffe5d3);
}
</style>
