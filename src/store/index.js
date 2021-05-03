import { createStore } from "vuex";

import teachersModule from "./modules/teachers/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from './modules/auth/index.js';
export default createStore({
  modules: {
    auth: authModule,
    teachers: teachersModule,
    requests: requestsModule,
  },
  // state() {
  //   return {
  //     userId: "a1",
  //   };
  // },
  // getters: {
  //   userId(state) {
  //     return state.userId;
  //   },
  // },
});
