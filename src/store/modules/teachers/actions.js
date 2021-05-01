export default {
  registerTeacher(context, data) {
    const teacherData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerTeacher', teacherData);
  }
};