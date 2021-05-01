<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #6e2c00;
  border: 1px solid #b65201;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #412300;
  border-color: #412300;
}

.flat {
  background-color: transparent;
  color: #612700;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #f6690a;
  color: #5a1d00;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffe6d2;
}
</style>
