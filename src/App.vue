<template>
  <top-header></top-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
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
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
    

  },
  methods:{
   
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/teachers');
      }
    }
  }
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
