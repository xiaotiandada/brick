import _axios from "./_axios";

export default {
  test() {
    return _axios.get("/api/v1/zcool");
  }
};
