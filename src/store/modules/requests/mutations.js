export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    console.log("[setRequests]-", payload);
    state.requests = payload;
  },
};
