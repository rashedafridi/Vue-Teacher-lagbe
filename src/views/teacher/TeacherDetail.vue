<template>
  <div>
    <div v-if="isLoading">
        <loading-spinner></loading-spinner>
    </div>
    <base-card v-else-if="idNoMatch">
      teacher id dose not match
    </base-card>
    <div v-else>
      <section>
        <base-card e>
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
          <base-badge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          ></base-badge>
          <p>{{ description }}</p>
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["id"],
  data() {
    return {
      selectedTeacher: null,
      idNoMatch:false,
      isLoading: true,
    };
  },
  computed: {
    fullName() {
      return (
        this.selectedTeacher.firstName + " " + this.selectedTeacher.lastName
      );
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
      return this.$route.path + "/contact"; //this.$route.path + '/' + this.id + '/contact'
    },
  },
  methods: {
    async loadTeachers() {
      
      try {
        await this.$store.dispatch("teachers/loadTeacher", {
          forceRefresh: true,
        });
        this.selectedTeacher = this.$store.getters["teachers/teachers"].find(
          (teacher) => teacher.id === this.id
        );
        console.log("[t detail->loadTeachers]", this.selectedTeacher);
        if (!this.selectedTeacher) {
          this.idNoMatch=true
          console.log("[t detail->loadTeachers->]", "not found");
        }
      } catch (error) {
        this.error = error.message || "Something went wrong 😥 !";
      }
      
    },
  },
  async created() {
    this.selectedTeacher = this.$store.getters["teachers/teachers"].find(
      (teacher) => teacher.id === this.id
    );
    if (!this.selectedTeacher) {
      try {
        await this.$store.dispatch("teachers/loadTeacher", {
          forceRefresh: true,
        });
        this.selectedTeacher = this.$store.getters["teachers/teachers"].find(
          (teacher) => teacher.id === this.id
        );

        console.log("[t detail->loadTeachers]", this.selectedTeacher);
        if (!this.selectedTeacher) {
          this.idNoMatch=true
          console.log("[t detail->loadTeachers->]", "not found");
        }
        this.isLoading=false
      } catch (error) {
        this.error = error.message || "Something went wrong 😥 !";
      }
      console.log("[t detail]"," this.selectedTeacher == null");
    }else{
      this.isLoading=false
    }
    console.log("[t detail]", this.selectedTeacher);
  },
};
</script>
<style scoped>
/* section{
  background-color: #fff5f1;
} */
</style>
