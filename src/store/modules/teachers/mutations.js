export default {
  setTeacher(state, payload) {
    state.teachers = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetchTime = new Date().getTime();
  },
  registerTeacher(state, payload) {
    state.teachers.push(payload);
  },
};
