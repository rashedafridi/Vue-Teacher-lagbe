<template>
<div>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <teacher-filter @change-filter="setFilters"></teacher-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadTeachers(true)"
          >Refresh</base-button
        >
        <base-button v-if="!isteacher" link to="/register"
          >Register as a teacher</base-button
        >
      </div>
      <div v-if="isLoading">
        <loading-spinner></loading-spinner>
      </div>
      <ul v-else-if="hasTeacher">
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
</div>
</template>

<script>
import TeacherItem from "../../components/teacher/TeacherItem";
import TeacherFilter from "../../components/teacher/TeacherFilter";
import LoadingSpinner from '../../components/ui/LoadingSpinner.vue';

export default {
  components: {
    TeacherItem,
    TeacherFilter,
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
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
        if (
          this.activeFilters.chemistry &&
          teacher.areas.includes("chemistry")
        ) {
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
    hasTeacher() {
      return !this.isLoading && this.$store.getters["teachers/hasTeachers"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadTeachers(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("teachers/loadTeacher", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong 😥 !";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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
