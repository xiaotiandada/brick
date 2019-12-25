import _axios from "./_axios";

export default {
  getZcool(params) {
    return _axios.get("/api/v1/zcool", { params });
  }
};
