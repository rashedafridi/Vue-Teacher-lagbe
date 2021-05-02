export default {
  contactTeacher(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      teacherId: payload.teacherId,
      userEmail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};