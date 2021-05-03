export default {
  async contactTeacher(context, payload) {
    const newRequest = {
     
      teacherId: payload.teacherId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(`https://teacher-algbe-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.teacherId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }
    //responseData.name  returns id of the firebase data
    newRequest.id = responseData.name;
    newRequest.teacherId = payload.teacherId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const teacherId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://teacher-algbe-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${teacherId}.json?auth=` + token
    );
    const responseData = await response.json();

    console.log("[responseData fetchRequests]-", responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || "OO no ! Failed to fetch requests."
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        teacherId: teacherId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    console.log("[save to array fetchRequests]-", responseData);

    context.commit("setRequests", requests);
  },
};
