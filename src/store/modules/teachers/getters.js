export default {
  teachers(state) {
    return state.teachers;
  },
  hasTeachers(state) {
    return state.teachers && state.teachers.length > 0;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetchTime;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
  isteachers(_, getters, _2, rootGetters) {
    const teachers = getters.teachers;
    const userId = rootGetters.userId;
    return teachers.some((teacher) => teacher.id === userId);
  },
};
