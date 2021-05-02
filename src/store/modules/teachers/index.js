import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetchTime: null,
      teachers: [
        {
          id: "12",
          firstName: "rashed",
          lastName: "Afridi",
          areas: ["math", "physics", "chemistry"],
          description:
            " i am rashed afridi I teach 'math', 'physics' ,'chemistry', 'biology' for class 8 to 10!",
          hourlyRate: 30,
        },
        {
          id: "98",
          firstName: "rakib",
          lastName: "molla",
          areas: ["biology"],
          description: " i cgpa 5😁🤣😎",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
