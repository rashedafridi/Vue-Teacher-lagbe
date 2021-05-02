import { createStore } from "vuex";

import teachersModule from "./modules/teachers/index.js";
import requestsModule from "./modules/requests/index.js";
export default createStore({
  modules: {
    teachers: teachersModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
