<template>
  <base-card>
    <h2>Find Your Teacher</h2>
    <span class="filter-option">
      <input type="checkbox" id="math" checked @change="setFilter" />
      <label for="math">math</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="physics" checked @change="setFilter" />
      <label for="physics">physics</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="chemistry" checked @change="setFilter" />
      <label for="chemistry">chemistry</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="biology" checked @change="setFilter" />
      <label for="biology">biology</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        math: true,
        chemistry: true,
        biology: true,
        physics: true,
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem; 
}

.filter-option.active label {
  font-weight: bold;
}
</style>