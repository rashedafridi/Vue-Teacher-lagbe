<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedTeacher: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedTeacher.firstName + ' ' + this.selectedTeacher.lastName;
    },
    areas() {
      return this.selectedTeacher.areas;
    },
    rate() {
      return this.selectedTeacher.hourlyRate;
    },
    description() {
      return this.selectedTeacher.description;
    },
    contactLink() {
      return this.$route.path + '/contact';//this.$route.path + '/' + this.id + '/contact'
    }
  },
  created() {
    this.selectedTeacher = this.$store.getters['teachers/teachers'].find(
      (teacher) => teacher.id === this.id
    );
  },
};
</script>
<style scoped>
/* section{
  background-color: #fff5f1;
} */
</style>