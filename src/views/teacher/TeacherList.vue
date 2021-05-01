<template>
  <section>
    <teacher-filter @change-filter="setFilters"></teacher-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isteacher" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <teacher-item
          v-for="teacher in filteredTeachers"
          :key="teacher.id"
          :id="teacher.id"
          :first-name="teacher.firstName"
          :last-name="teacher.lastName"
          :rate="teacher.hourlyRate"
          :areas="teacher.areas"
        ></teacher-item>
      </ul>
      <h3 v-else>No result found.</h3>
    </base-card>
  </section>
</template>

<script>
import TeacherItem from "../../components/teacher/TeacherItem";
import TeacherFilter from "../../components/teacher/TeacherFilter";

export default {
  components: {
    TeacherItem,
    TeacherFilter,
  },
  data() {
    return {
      activeFilters: {
        math: true,
        chemistry: true,
        biology: true,
        physics: true,
      },
    };
  },
  computed: {
    isteacher() {
      return this.$store.getters["teachers/isteachers"];
    },
    filteredTeachers() {
      const teachers = this.$store.getters["teachers/teachers"];
      return teachers.filter((teacher) => {
        if (this.activeFilters.math && teacher.areas.includes("math")) {
          return true;
        }
        if (this.activeFilters.chemistry && teacher.areas.includes("chemistry")) {
          return true;
        }
        if (this.activeFilters.biology && teacher.areas.includes("biology")) {
          return true;
        }
        if (this.activeFilters.physics && teacher.areas.includes("physics")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["teachers/hasTeachers"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
