export default {
  async loadTeacher(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://teacher-algbe-default-rtdb.asia-southeast1.firebasedatabase.app/teacher.json`
    );
    const responseData = await response.json();
      console.log('refrace',responseData)
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const teachers = [];

    for (const key in responseData) {
      const teacher = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      teachers.push(teacher);
      
    }
    console.log('refrace',teachers)
    context.commit("setTeacher", teachers);
    context.commit("setFetchTimestamp");
  },

  
  async registerTeacher(context, data) {
    const userId = context.rootGetters.userId;
    const teacherData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://teacher-algbe-default-rtdb.asia-southeast1.firebasedatabase.app/teacher/${userId}.json?auth=`+token,
      {
        method: "PUT",
        body: JSON.stringify(teacherData),
      }
    );
    if (!response.ok) {
      // error ...
    }
    context.commit("registerTeacher", {
      ...teacherData,
      id: userId,
    });
  },
};
